package be.heh.dogcare.RepositoriesRestResource;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import be.heh.dogcare.Entities.Secretary;

@RepositoryRestResource(collectionResourceRel="secretary", path="secretary")
public interface SecretaryRepository extends PagingAndSortingRepository<Secretary, Long> {

    Secretary findByEmail(@Param("email") String email);
    List<Secretary> findByFirstname(@Param("firstname") String firstname);
    List<Secretary> findByLastname(@Param("lastname") String lastname);
    Secretary findByPhone(@Param("phone") String phone);
}
