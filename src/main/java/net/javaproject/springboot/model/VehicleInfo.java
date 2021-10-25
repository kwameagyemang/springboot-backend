package net.javaproject.springboot.model;

public class VehicleInfo {
	private long id;
	private String make;
	private String model;
	private int numberPlate;
	private String ownerName;
	private String ownerEmail;
	
	public VehicleInfo () {
		
	}
	
	public VehicleInfo(String make, String model, int numberPlate, String ownerName, String ownerEmail) {
		super();
		this.make = make;
		this.model = model;
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
		return make;
	}
	public void setMake(String make) {
		this.make = make;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
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
