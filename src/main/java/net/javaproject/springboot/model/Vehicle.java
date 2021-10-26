package net.javaproject.springboot.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "vehicles")


public class Vehicle {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name= "vehicle_make")
	private String vehicleMake;
	
	@Column(name= "vehicle_model")
	private String vehicleModel;
	
	@Column(name= "number_plate")
	private int numberPlate;
	
	@Column(name= "owner_name")
	private String ownerName;
	
	@Column(name= "owner_email")
	private String ownerEmail;
	
	public Vehicle () {
		
	}
	
	public Vehicle(String vehicleMake, String vehicleModel, int numberPlate, String ownerName, String ownerEmail) {
		super();
		this.vehicleMake = vehicleMake;
		this.vehicleModel = vehicleModel;
		this.numberPlate = numberPlate;
		this.ownerName = ownerName;
		this.ownerEmail = ownerEmail;
	}
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getMake() {
		return vehicleMake;
	}
	public void setMake(String make) {
		this.vehicleMake = make;
	}
	public String getModel() {
		return vehicleModel;
	}
	public void setModel(String model) {
		this.vehicleModel = model;
	}
	public int getNumberPlate() {
		return numberPlate;
	}
	public void setNumberPlate(int numberPlate) {
		this.numberPlate = numberPlate;
	}
	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	public String getOwnerEmail() {
		return ownerEmail;
	}
	public void setOwnerEmail(String ownerEmail) {
		this.ownerEmail = ownerEmail;
	}
	
	

}
