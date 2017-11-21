package be.heh.dogcare.Controllers;

import be.heh.dogcare.Entities.Secretary;
import be.heh.dogcare.RepositoriesRestResource.SecretaryRepository;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class LoginController {

    /**
     * @return login page
     */
    @GetMapping(value = "/login")
    public String login() {
        return "index.html";
    }
}
