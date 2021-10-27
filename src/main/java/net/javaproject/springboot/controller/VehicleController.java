package net.javaproject.springboot.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaproject.springboot.exception.ResourceNotFoundException;
import net.javaproject.springboot.model.Vehicle;
import net.javaproject.springboot.repository.VehicleRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class VehicleController {

	@Autowired
//	inject VehicleRepositopry
	private VehicleRepository vehicleRepository;

//	get all Vehicles
	@GetMapping("/vehicles")
	public List<Vehicle> getAllVehicle() {
//		System.out.println("get request to vehicles");
		return vehicleRepository.findAll();
	}
	// create Vehicle rest api
	@PostMapping("/vehicles")
	public Vehicle createEmployee(@RequestBody Vehicle vehicle) {
		return vehicleRepository.save(vehicle);
	}
	
	// get Vehicle by id rest api
	@GetMapping("/vehicles/{id}")
	public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long id) {
		Vehicle vehicle = vehicleRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not exist with id :" + id));
		return ResponseEntity.ok(vehicle);
	}
	
	// update Vehicle rest api
	
	@PutMapping("/vehicles/{id}")
	public ResponseEntity<Vehicle> updateVehicle(@PathVariable Long id, @RequestBody Vehicle vehicleDetails){
		Vehicle vehicle = vehicleRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not exist with id :" + id));
		
		vehicle.setMake(vehicleDetails.getMake());
		vehicle.setModel(vehicleDetails.getModel());
		vehicle.setNumberPlate(vehicleDetails.getNumberPlate());
		vehicle.setOwnerName(vehicleDetails.getOwnerName());
		vehicle.setOwnerEmail(vehicleDetails.getOwnerEmail());
		
		
		Vehicle updatedVehicle = vehicleRepository.save(vehicle);
		return ResponseEntity.ok(updatedVehicle);
	}
	
	// delete vehiclerestapi
	@DeleteMapping("/vehicles/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteVehicle(@PathVariable Long id){
		Vehicle vehicle = vehicleRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("vehicle not exist with id :" + id));
		
		vehicleRepository.delete(vehicle);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}


