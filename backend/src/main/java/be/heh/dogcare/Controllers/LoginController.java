package be.heh.dogcare.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

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
