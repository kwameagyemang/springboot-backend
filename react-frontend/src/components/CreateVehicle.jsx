import React, { Component } from 'react'
import VehicleService from '../services/VehicleService';

class CreateVehicle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            Make: '',
            Model: '',
            numberPlate: '',
            ownerName:'',
            ownerEmail:''
        }
        this.changeMakeHandler = this.changeMakeHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.changeNumberPlateHandler = this.changeNumberPlateHandler.bind(this);
        this.changeOwnerNameHandler = this.changeOwnerNameHandler.bind(this);
        this.changeOwnerEmailHandler = this.changeOwnerEmailHandler.bind(this);
        this.saveOrUpdateVehicle = this.saveOrUpdateVehicle.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            VehicleService.getVehicleById(this.state.id).then( (res) =>{
                console.log(res.data);
                let vehicle = res.data;
                this.setState({Make: vehicle.make,
                    Model: vehicle.model,
                    numberPlate: vehicle.numberPlate,
                    ownerName: vehicle.ownerName,
                    ownerEmail: vehicle.ownerEmail
                });
            });
        }        
    }
    saveOrUpdateVehicle = (e) => {
        e.preventDefault();
        let vehicle = {make: this.state.Make, model: this.state.Model, numberPlate: this.state.numberPlate, ownerName: this.state.ownerName, ownerEmail: this.state.ownerEmail};
        console.log('vehicle => ' + JSON.stringify(vehicle));

        // step 5
        if(this.state.id === '_add'){
            VehicleService.createVehicle(vehicle).then(res =>{
                this.props.history.push('/vehicles');
            });
        }else{
            VehicleService.updateVehicle(vehicle, this.state.id).then( res => {
                this.props.history.push('/vehicles');
            });
        }
    }
    
    changeMakeHandler= (event) => {
        this.setState({Make: event.target.value});
    }

    changeModelHandler= (event) => {
        this.setState({Model: event.target.value});
    }

    changeNumberPlateHandler= (event) => {
        this.setState({numberPlate: event.target.value});
    }

    changeOwnerNameHandler= (event) => {
        this.setState({ownerName: event.target.value});
    }
    changeOwnerEmailHandler= (event) => {
        this.setState({ownerEmail: event.target.value});
    }
    cancel(){
        this.props.history.push('/vehicles');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Vehicle</h3>
        }else{
            return <h3 className="text-center">Update Vehicle</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container_app">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-2 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Vehicle Make: </label>
                                            <input placeholder="Vehicle Make" name="vehicleMake" className="form-control" 
                                                value={this.state.Make} onChange={this.changeMakeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Vehicle Model: </label>
                                            <input placeholder="Vehicle Model" name="vehicleModel" className="form-control" 
                                                value={this.state.Model} onChange={this.changeModelHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Number Plate: </label>
                                            <input placeholder="Number Plate" name="numberPlate" className="form-control" 
                                                value={this.state.numberPlate} onChange={this.changeNumberPlateHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Owner Name: </label>
                                            <input placeholder="Owner Name" name="ownerName" className="form-control" 
                                                value={this.state.ownerName} onChange={this.changeOwnerNameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Owner Email: </label>
                                            <input placeholder="Owner Email" name="ownerEmail" className="form-control" 
                                                value={this.state.ownerEmail} onChange={this.changeOwnerEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateVehicle}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateVehicle