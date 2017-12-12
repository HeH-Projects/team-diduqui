package dogcare.domain.repositories;

import dogcare.domain.entities.Customer;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "customer", path = "customer")
public interface CustomerRepository extends PagingAndSortingRepository<Customer, Long> {

    List<Customer> findByAddress(@Param("address") String address);

    List<Customer> findByBillingaddress(@Param("billingaddress") String billingaddress);

    List<Customer> findByEmail(@Param("email") String email);

    List<Customer> findByFirstname(@Param("firstname") String firstname);

    List<Customer> findByLastname(@Param("lastname") String lastname);

    List<Customer> findByPhone(@Param("phone") String phone);

}
