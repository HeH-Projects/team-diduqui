package dogcare.domain.repositories;

import dogcare.domain.entities.Room;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "room", path = "room")
public interface RoomRepository extends PagingAndSortingRepository<Room, Long> {

    List<Room> findByDescription(@Param("description") String description);

    List<Room> findByName(@Param("name") String name);

}
