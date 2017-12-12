package dogcare.domain.entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * A dog entity
 * Created by the Team DiDuQui
 */
@Entity(name = "dog")
public class Dog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "description")
    private String description;

    @OneToOne(targetEntity = Customer.class)
    private Customer customer;

    @NotNull
    @Column(name = "dogbreed", nullable = false)
    private String dogbreed;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "size")
    private String size;

    @Column(name = "weight")
    private String weight;

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @return the dogbreed
     */
    public String getDogBreed() {
        return dogbreed;
    }

    /**
     * @return the size
     */
    public String getSize() {
        return size;
    }

    /**
     * @return the weight
     */
    public String getWeight() {
        return weight;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @param dogbreed the dogBreed to set
     */
    public void setDogBreed(String dogbreed) {
        this.dogbreed = dogbreed;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @param size the size to set
     */
    public void setSize(String size) {
        this.size = size;
    }

    /**
     * @param weight
     */
    public void setWeight(String weight) {
        this.weight = weight;
    }
}
