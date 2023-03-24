import React from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()}/>;
}

class AnalyzeData extends React.Component {
    state = {
        clinicalData: []
    }

    componentDidMount() {
        let {patientId} = this.props.params;
        axios.get('http://localhost:8080/clinicalservices/api/patients/analyze/' + patientId).then(
            res => {
                this.setState(res.data)
            }
        )
    }

    render() {
        return (<div>
            <h2>Patient Details</h2>
            First Name: {this.state.firstName}
            Last Name: {this.state.lastName}
            Age: {this.state.age}

            <h2>Clinical Report</h2>
            {this.state.clinicalData.map(eachEntry => <TableCreator item={eachEntry} patientId={this.state.id}/>)}
        < /div>)
    }
}


class TableCreator extends React.Component {
    render() {
        var eachEntry = this.props.item;
        let PatientId = this.props.patientId;
        return <div>
            <table>
                <tr>
                    <td><b>{eachEntry.componentName}</b></td>
                </tr>
                <tr>
                    <td>{eachEntry.componentName}</td>
                    <td>{eachEntry.componentValue}</td>
                    <td>{eachEntry.measuredDateTime}</td>
                </tr>
            </table>
        </div>
    }
}

export default withParams(AnalyzeData);