package dogcare.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import dogcare.security.services.SecretaryDetailsService;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private SecretaryDetailsService secretaryDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	auth.userDetailsService(secretaryDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
	http.authorizeRequests().anyRequest().permitAll().and().formLogin().loginPage("/login").and().csrf().disable();
    }

}
