package be.heh.dogcare.RepositoriesRestResource;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import be.heh.dogcare.Entities.Appointment;

@RepositoryRestResource(collectionResourceRel="appointment", path="appointment")
public interface AppointmentRepository extends PagingAndSortingRepository<Appointment, Long> {

    List<Appointment> findByName(@Param("name") String name);
    List<Appointment> findByDescription(@Param("description") String description);
    List<Appointment> findByDuration(@Param("duration") String duration);

}
