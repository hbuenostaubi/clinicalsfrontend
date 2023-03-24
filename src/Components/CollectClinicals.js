import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {toast} from "react-toastify"

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class CollectClinicals extends React.Component {
    state = {}

    componentDidMount() {
        let {patientId} = this.props.params;
        console.log('ID: ', patientId);
        axios.get('http://localhost:8080/clinicalservices/api/patients/'+patientId).then(res => {
                    this.setState(res.data);
                });

    }

    handleSubmit(event) {
        event.preventDefault()
        let {patientId} = this.props.params;
        const data = {
            patientId: patientId,
            componentName: this.componentName,
            componentValue: this.componentValue
        }
        console.log(data);
        axios.post('http://localhost:8080/clinicalservices/api/clinicals', data)
            .then(res=>{
            toast("Patient data saved successfully", {autoClose:3000, position:toast.POSITION.TOP_CENTER})
            console.log('Success')
        }).catch(
            res=> {
                toast("data not saved", {autoClose:3000, position:toast.POSITION.TOP_CENTER})
                console.log('FAIL')
            }
        )
    }

    render() {
        return (<div>
            <h2>Patient Details:</h2>
            First Name: {this.state.firstName}
            Last Name: {this.state.lastName}
            Age: {this.state.age}
            <h2>Patient Clinical Data</h2>
            <form>
                Clinical Entry Type <select onChange={(event) => {
                this.componentName = event.target.value
            }}>
                <option>Select One</option>
                <option value="bp"> Blood Pressure</option>
                <option value="hw">Height/Weight</option>
                <option value="hr">Heart Rate</option>
            </select>
                Value: <input text="text" name="componentValue" onChange={(event) => {
                this.componentValue = event.target.value}}/>
                <button onClick={this.handleSubmit.bind(this)}>Confirm</button>
            </form>
        </div>)
    }
}
// export default CollectClinicals;
export default withParams(CollectClinicals);