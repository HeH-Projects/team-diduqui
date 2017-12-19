package dogcare.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;

import dogcare.security.services.SecretaryDetailsService;

@Configuration
@EnableAuthorizationServer
public class AuthServiceConfiguration extends AuthorizationServerConfigurerAdapter {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private SecretaryDetailsService secretaryDetailsService;

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
	clients.inMemory().withClient("dogcare").secret("secret").authorizedGrantTypes("password", "refresh_token").scopes("openid")
		.accessTokenValiditySeconds(120).refreshTokenValiditySeconds(300);
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
	endpoints.authenticationManager(authenticationManager).userDetailsService(secretaryDetailsService);
    }

}
