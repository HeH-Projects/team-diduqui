package dogcare.security.securities;

import dogcare.domain.entities.Secretary;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class SecretarySecurity extends Secretary implements UserDetails {

	private static final long serialVersionUID = 1L;

	public SecretarySecurity(Secretary secretary) {
        setId(secretary.getId());
        setEmail(secretary.getEmail());
        setFirstname(secretary.getFirstname());
        setLastname(secretary.getLastname());
        setPassword(secretary.getPassword());
        setPhone(secretary.getPhone());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return super.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
