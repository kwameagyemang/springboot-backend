import React, { Component } from 'react'
import VehicleService from '../services/VehicleService'

class ViewVehicle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            vehicle: {}
        }
    }

    componentDidMount(){
        VehicleService.getVehicleById(this.state.id).then( res => {
            console.log(res.data);
            this.setState({vehicle: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Vehicle Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Vehicle Make: </label>
                            <div> { this.state.vehicle.make}</div>
                        </div>
                        <div className = "row">
                            <label> vehicle Model: </label>
                            <div> { this.state.vehicle.model }</div>
                        </div>
                        <div className = "row">
                            <label> Vehicle Number Plate: </label>
                            <div> { this.state.vehicle.numberPlate}</div>
                        </div>
                        <div className = "row">
                            <label> Owner Name: </label>
                            <div> { this.state.vehicle.ownerName}</div>
                        </div>
                        <div className = "row">
                            <label> Owner Email: </label>
                            <div> { this.state.vehicle.ownerEmail}</div>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewVehicle