import React from 'react';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            inputTitle: this.props.title,
            inputDescription: this.props.description
        }
    };
    show() {
        if(this.state.edit) {
            return <React.Fragment>
                <input type="text" className="form-control mr-2 col-md-2" value={this.state.inputTitle} onChange={this.inputTitleOnChange} title={'inputTitle'}/>
                <input type="text" className="form-control mr-2 col-md-2" value={this.state.inputDescription} onChange={this.inputTitleOnChange} title={'inputDescription'}/>
            </React.Fragment>

        } else {
            return <React.Fragment>
                <span className="input-group-text mr-2 col-md-2">{this.props.title}</span>
                <span className="input-group-text mr-2">{this.props.description}</span>
            </React.Fragment>
        }
    };
    inputTitleOnChange = (e) => {
        let {title, value} = e.target;
        this.setState({
            [title]: value
        })
    };
    editClick = () => {
        if (this.state.edit) {
            this.props.edit(this.props.id,this.state.inputTitle, this.state.inputDescription);
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