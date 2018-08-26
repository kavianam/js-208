import React from "react";
import Box from "./Box";
import 'bootstrap/dist/css/bootstrap.min.css';

class InlineEdit extends React.Component {
    constructor() {
        super();
        this.state = {
            isEdited: false,
            data: [
                {name: 'kavian', family: 'mozafari', age: 22},
                {name: 'kiarash', family: 'nouri', age: 25},
                {name: 'kiara', family: 'dehdar', age: 9}
                ]
        }
    }
    handleEdit = (name, family, age, i) => {
        let Data = this.state.data;
        Data[i] = {
            name, family, age
        };
        this.setState({
            data: Data
        })
    };
    handleDelete = (i) => {
        let Data = this.state.data;
        Data.splice(i,1);
        this.setState({
            data: Data
        })
    };
    render () {
        return <React.Fragment>
            <div className={"card-columns"}>
                {
                    this.state.data.map((value, index) => {
                        return <Box name={value.name} family={value.family} age={value.age} edit={this.handleEdit} delete={this.handleDelete} isEdited={this.state.isEdited} index={index} key={index}/>
                    })
                }
            </div>
        </React.Fragment>
    }
 }
 
 export default InlineEdit;