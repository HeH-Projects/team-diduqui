package be.heh.dogcare;

import javax.persistence.EntityManagerFactory;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HibernateUtil {

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Bean(destroyMethod="")
    public SessionFactory getSessionFactory() {
        SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
        if (sessionFactory == null) {
            throw new NullPointerException("Factory is not a hibernate factory.");
        }
        return sessionFactory;
    }
}
