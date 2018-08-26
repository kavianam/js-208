import React from "react";

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            isEdited: false,
            name: this.props.name,
            family: this.props.family,
            age: this.props.age
        }

    };
    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };
    handleClickEdit = () => {
        this.setState( prevState => {
            return {
                isEdited: !prevState.isEdited
            }
        })
    };
    save = () => {
        this.props.edit(this.state.name,this.state.family,this.state.age, this.props.index);
        this.handleClickEdit();
    };
    Edited = () => {
        if (this.state.isEdited) {
            return <React.Fragment>
                <input type="text" onChange={this.handleChange} value={this.state.name} className="form-control" name={"name"} id="name"/>
                <input type="text" onChange={this.handleChange} value={this.state.family} className="form-control" name={"family"} id="family"/>
                <input type="text" onChange={this.handleChange} value={this.state.age} className="form-control" name={"age"} id="age"/>
                <button className={"btn btn-primary mr-1"} onClick={this.save}>Save</button>
            </React.Fragment>;

        } else {
            return <React.Fragment>
                <p className="card-text">Name: {this.state.name}</p>
                <p className="card-text">Family: {this.state.family}</p>
                <p className="card-text">Age: {this.state.age}</p>
                <button className={"btn btn-secondary mr-1"} onClick={this.handleClickEdit}>Edit</button>
                <button className={"btn btn-danger"} onClick={ () =>  this.props.delete(this.props.index)}>Delete</button>
            </React.Fragment>
        }
    };
    render (){
        return <div className="card" >
            <div className="card-body">
                {
                    this.Edited()
                }
            </div>
        </div>
    }
 }

 export default Box;