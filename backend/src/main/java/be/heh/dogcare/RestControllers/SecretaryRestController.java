package be.heh.dogcare.RestControllers;

import java.lang.Exception;
import java.util.concurrent.atomic.AtomicLong;

import be.heh.dogcare.Entities.ConnectionData;
import be.heh.dogcare.Entities.Secretary;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecretaryRestController {

    @Autowired
    private SessionFactory sessionFactory;

    private final AtomicLong counter = new AtomicLong();

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/checkUser")
    public Secretary checkUserByEmail(@RequestBody ConnectionData connectionData) throws Exception {
        Session session = sessionFactory.openSession();
        session.beginTransaction();
        Query query = session.createQuery("FROM secretary s where s.email = :sEmail AND s.password = :sPassword");
        query.setParameter("sEmail", connectionData.getEmail());
        query.setParameter("sPassword", connectionData.getPassword());
        Secretary item = (Secretary) query.list().get(0);
        session.getTransaction().commit();
        return item;
    }
}
