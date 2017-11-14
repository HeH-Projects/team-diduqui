package be.heh.dogcare.RepositoriesRestResource;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import be.heh.dogcare.Entities.Dog;

@RepositoryRestResource(collectionResourceRel="dog", path="dog")
public interface DogRepository extends PagingAndSortingRepository<Dog, Long> {

    List<Dog> findByDescription(@Param("description") String description);
    List<Dog> findByDogbreed(@Param("dogbreed") String dogbreed);
    List<Dog> findByName(@Param("name") String name);
    List<Dog> findBySize(@Param("size") String size);
    List<Dog> findByWeight(@Param("weight") String weight);

}
