package be.heh.dogcare.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController {

    /**
     * @return index page
     */
    @GetMapping(value = "/")
    @ResponseBody
    public String index() {
        return "Welcome to the index page!";
    }
}
