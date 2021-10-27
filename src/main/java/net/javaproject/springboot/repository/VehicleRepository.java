package net.javaproject.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import net.javaproject.springboot.model.Vehicle;


@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long>{

}
