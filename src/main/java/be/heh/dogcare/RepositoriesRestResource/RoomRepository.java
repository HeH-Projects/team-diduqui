package be.heh.dogcare.RepositoriesRestResource;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import be.heh.dogcare.Entities.Room;

@RepositoryRestResource(collectionResourceRel="room", path="room")
public interface RoomRepository extends PagingAndSortingRepository<Room, Long> {

    List<Room> findByDescription(@Param("description") String description);
    List<Room> findByName(@Param("name") String name);

}
