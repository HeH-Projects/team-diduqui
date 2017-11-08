package be.heh.dogcare.RepositoriesRestResource;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import be.heh.dogcare.Entities.Secretary;

@RepositoryRestResource(collectionResourceRel="secretary", path="secretary")
public interface SecretaryRepository extends PagingAndSortingRepository<Secretary, Long> {

    List<Secretary> findByLastname(@Param("name") String name);

}
