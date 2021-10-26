package net.javaproject.springboot.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaproject.springboot.model.Vehicle;
import net.javaproject.springboot.repository.VehicleRepository;




@RestController
@RequestMapping("/api/v1/")
public class VehicleController {

	@Autowired
//	inject VehicleRepositopry
	private VehicleRepository vehicleRepository;

//	get all Vehicles
	@GetMapping("/vehicles")
	public List<Vehicle> getAllVehicle() {
		return vehicleRepository.findAll();
	}

}
