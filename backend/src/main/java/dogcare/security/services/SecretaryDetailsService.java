package dogcare.security.services;

import dogcare.domain.entities.Secretary;
import dogcare.domain.repositories.SecretaryRepository;
import dogcare.security.securities.SecretarySecurity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class SecretaryDetailsService implements UserDetailsService {

    @Autowired
    private SecretaryRepository secretaryRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Secretary secretary  = secretaryRepository.findByEmail(email);
        if (secretary == null) {
            throw new UsernameNotFoundException("The email " + email + " doesn't exist.");
        }
        return new SecretarySecurity(secretary);
    }
}
