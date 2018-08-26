import React from 'react';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            inputName: this.props.name
        }
    };
    show() {
        if(this.state.edit) {
            return <input type="text" className="form-control mr-2 col-md-2" value={this.state.inputName} onChange={this.inputNameOnChange} name={'inputName'}/>
        } else {
            return <span className="input-group-text mr-2 col-md-2">{this.props.name}</span>
        }
    };
    inputNameOnChange = (e) => {
        let {name, value} = e.target;
        this.setState({
            [name]: value
        })
    };
    editClick = () => {
        if (this.state.edit) {
            this.props.edit(this.props.id,this.state.inputName);
            this.setState({
                edit: false
            })
        }else {
            this.setState({
                edit: true
            })
        }
    };
    render (){
        return <li className="list-group-item d-flex justify-content-between align-items-center">
            {/*<span className="input-group-text mr-2 col-md-2">{this.props.name}</span>*/}
            {/*<input type="text" className="form-control mr-2 col-md-2" value={this.props.name} onChange={this.inputOnChange}/>*/}
            {this.show()}
            <span className="input-group-text mr-2 col-md-2">{this.props.description}</span>
            {/*<button className="btn btn-info ml-auto mr-2" type="button" id="inputGroupFileAddon04" onClick={ () => this.props.edit(this.props.id,this.props.name)}>*/}
                {/*<i className="fa fa-pencil mr-1"> </i>*/}
                {/*Edit*/}
            {/*</button>*/}
            <button className="btn btn-info ml-auto mr-2" type="button" id="inputGroupFileAddon04" onClick={this.editClick}>
                <i className="fa fa-pencil mr-1"> </i>
                {(this.state.edit ? 'Save' : 'Edit')}
            </button>
            <button className="btn btn-danger" type="button" id="inputGroupFileAddon04" onClick={ () => this.props.delete(this.props.id)}>
                <i className="fa fa-trash mr-1"> </i>
                Remove
            </button>
        </li>
    }
}
 export default Box;



// class Box extends React.Component {
//     render (){
//         return <div className="input-group mb-3">
//             <div className="input-group-prepend">
//                 <span className="input-group-text">Name: {this.props.name}</span>
//                 <span className="input-group-text">Age: {this.props.age}</span>
//             </div>
//             {/*<input type="text" className="form-control" aria-label="Text input with segmented dropdown button" value={"kavin iss gera"}/>*/}
//             <input type="text" readOnly={'readonly'} className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
//             <div className="input-group-append">
//                 <button className="btn btn-info" type="button" id="inputGroupFileAddon04">
//                     <i className="fas fa-pencil-alt mr-1"> </i>
//                     Edit
//                 </button>
//                 <button className="btn btn-danger" type="button" id="inputGroupFileAddon04">
//                     <i className="fas fa-trash-alt mr-1"> </i>
//                     Remove
//                 </button>
//             </div>
//         </div>
//         }
//  }