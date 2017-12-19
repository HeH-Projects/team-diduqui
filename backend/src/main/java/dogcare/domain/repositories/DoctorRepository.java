package dogcare.domain.repositories;

import dogcare.domain.entities.Doctor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "doctor", path = "doctor")
public interface DoctorRepository extends PagingAndSortingRepository<Doctor, Long> {

    List<Doctor> findByEmail(@Param("email") String email);

    List<Doctor> findByFirstname(@Param("firstname") String firstname);

    List<Doctor> findByLastname(@Param("lastname") String lastname);

    List<Doctor> findByPhone(@Param("phone") String phone);

    List<Doctor> findBySpecialty(@Param("specialty") String specialty);

}
