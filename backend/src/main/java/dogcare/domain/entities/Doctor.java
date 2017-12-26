package dogcare.domain.entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity(name = "doctor")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Column(name = "email", nullable = false)
    private String email;

    @NotNull
    @Column(name = "firstname", nullable = false)
    private String firstname;

    @NotNull
    @Column(name = "lastname", nullable = false)
    private String lastname;

    @NotNull
    @Column(name = "phone", nullable = false)
    private String phone;

    @NotNull
    @Column(name = "specialty", nullable = false)
    private String specialty;

    /**
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @return the firstname
     */
    public String getFirstname() {
        return firstname;
    }

    /**
     * @return the lastname
     */
    public String getLastname() {
        return lastname;
    }

    /**
     * @return the phoneNumber
     */
    public String getPhone() {
        return phone;
    }

    /**
     * @return the specialty
     */
    public String getSpecialty() {
        return specialty;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @param firstname set the firstname
     */
    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    /**
     * @param lastname set the lastname
     */
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    /**
     * @param phone set the phoneNumber
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * @param specialty set the specialty
     */
    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }
}
