package dogcare.domain.entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * An appointment
 * Created by the Team DiDuQui
 */
@Entity(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @OneToOne(targetEntity = Dog.class)
    private Dog dog;

    @OneToOne(targetEntity = Room.class)
    private Room room;

    @OneToOne(targetEntity = Doctor.class)
    private Doctor doctor;

    @Column(name = "description")
    private String description;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    @NotNull
    @Column(name = "duration", nullable = false)
    private int duration;

    public String getName() {
        return name;
    }

    /**
     * Set the name
     *
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Return the dog that receive the care
     *
     * @return The dog that receive the care
     */
    public Dog getDog() {
        return dog;
    }

    /**
     * Set the dog that receive the care
     *
     * @param dog The dog that receive the care
     */
    public void setDog(Dog dog) {
        this.dog = dog;
    }

    /**
     * Return the room of the operation
     *
     * @return The room of the operation
     */
    public Room getRoom() {
        return room;
    }

    /**
     * Set the room of the operation
     *
     * @param room The room of the operaion
     */
    public void setRoom(Room room) {
        this.room = room;
    }

    /**
     * Return  the doctor which will work
     *
     * @return The doctor which will work
     */
    public Doctor getDoctor() {
        return doctor;
    }

    /**
     * Set the doctor that will work
     *
     * @param doctor The doctor that will work
     */
    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    /**
     * Return the description of the appointment
     *
     * @return The description of the appointment
     */
    public String getDescription() {
        return description;
    }

    /**
     * Set the description of the appointment
     *
     * @param description The description of the appointment
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Return the date of the appointment
     *
     * @return Return the date
     */
    public Date getDate() {
        return date;
    }

    /**
     * Set the date of the appointment
     *
     * @param date Set the date
     */
    public void setDate(Date date) {
        this.date = date;
    }

    /**
     * Return the duration of the appointment
     *
     * @return The duration of the appointment
     */
    public int getDuration() {
        return duration;
    }

    /**
     * Set the duration of the appointment
     *
     * @param duration Set the duration
     */
    public void setDuration(int duration) {
        this.duration = duration;
    }
}
