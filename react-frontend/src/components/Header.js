import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar- bg-grey">
                    <div><a href="https://javaproject.net" className="navbar-brand">Garage Management</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header