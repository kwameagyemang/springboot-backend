package net.javaproject.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaproject.springboot.model.VehicleInfo;



@Repository
//JpaRepository< provides a lot of methods like findALL etc
public interface VehicleRepository extends JpaRepository<VehicleInfo, Long>{

}
