import React, { Component } from 'react'
import VehicleService from '../services/VehicleService';

class UpdateVehicle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Make: '',
            Model: '',
            numberPlate: '',
            ownerName:'',
            ownerEmail:''

        }
        this.changeMakeHandler = this.changeMakeHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.changeNumberPlateHandler = this.changeNumberPlateHandler(this);
        this.changeOwnerNameHandler = this.changeOwnerNameHandler.bind(this);
        this.changeOwnerEmailHandler = this.changeOwnerEmailHandler.bind(this);
        this.updateVehicle = this.updateVehicle.bind(this);
    }

    componentDidMount(){
        VehicleService.getEmployeeById(this.state.id).then( (res) =>{
            let vehicle = res.data;
            this.setState({Make: vehicle.Make,
                Model: vehicle.Model,
                numberPlate: vehicle.numberPlate,
                ownerName: vehicle.ownerName,
                ownerEmail: vehicle.ownerEmail
            });
        });
    }

    updateVehicle = (e) => {
        e.preventDefault();
        let vehicle = {Make: this.state.Make, Model: this.state.Model, numberPlate: this.state.numberPlate, ownerName: this.state.ownerName, ownerEmail: this.state.ownerEmail};
        console.log('vehicle => ' + JSON.stringify(vehicle));
        console.log('id => ' + JSON.stringify(this.state.id));
        VehicleService.updateVehicle(vehicle, this.state.id).then( res => {
            this.props.history.push('/vehicles');
        });
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Vehicle</h3>
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

                                        <button className="btn btn-success" onClick={this.updateVehicle}>Save</button>
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

export default UpdateVehicle