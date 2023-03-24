import React from "react";
import axios from "axios";
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {Link} from "react-router-dom";

toast.configure();

class AddPatient extends React.Component {
    handleSubmit(event) {
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age
        }
        axios.post("http://localhost:8080/clinicalservices/api/patients", data)
            .then(res => {
                toast('Patient added successfully!', {autoClose:2000, position:toast.POSITION.BOTTOM_CENTER});
                event.preventDefault();
            });
    }

    render() {
        return (<div>
            <h2>Create Patient</h2>
            <form>
                First Name: <input type="test" name="firstName"
                                   onChange={(event => this.firstName = event.target.value)}/>
                Last Name: <input type="test" name="lastName" onChange={(event => this.lastName = event.target.value)}/>
                Age: <input type="test" name="age" onChange={(event => this.age = event.target.value)}/>
                <button onClick={this.handleSubmit.bind(this)}>Confirm</button>
            </form>
            <Link to={'/'}>Go Back</Link>
        </div>)
    }
}

export default AddPatient;