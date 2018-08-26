import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Box from "./Box";
import Swal from 'sweetalert2';

//TODO 1: delete click shod be porse motmaene ya na
//TODO 2: dar edit, age ham beshe edit kard
//TODO 3: edit ro vaghti mizanim text ma focus va select beshe va button delete tabdil be cancel beshe

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            inputName: '',
            inputAge: '',
            data: [],
            searchInput: ''
            // searchInputIcon : document.getElementById('searchInputIcon')
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/')
            .then( res => {
                this.setState({
                    data: res.data
                });
            })
            .catch( err => {
                Swal('Oops...', 'Something went wrong!', 'error');
                console.log(err);
            })
    }
    handleSearchInput = (e) => {
        this.setState({
            searchInput: e.target.value
        });

    };
    handleSearchQuery = () => {
        if (this.state.searchInput === '') {
            return 'Showing All Item';
        } else {
            return 'Search Query: ' + this.state.searchInput;
        }
    };
    handleDelete = (id) => {
        axios.delete('http://localhost:3000/',{
            data: {
                id
            }
        }).then( res => {
            console.log(res);
            this.componentDidMount();
        }).catch( err => {
            Swal('Oops...', 'Something went wrong!', 'error');
                console.log(err);
        });
    };
    handleEdit1 = (id, name) => {
        Swal({
            title: 'Change your name',
            input: 'text',
            inputValue: name,
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Update',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                axios({
                    method: 'put',
                    url: 'http://localhost:3000/',
                    data: {
                        id,
                        name: login
                    }
                }).then( res => {
                    console.log(res);
                    this.componentDidMount();
                }).catch( err => {
                    Swal('Oops...', 'Something went wrong!', 'error');
                    console.log(err);
                });
            },
            allowOutsideClick: () => !Swal.isLoading()
        });
    };
    handleEdit2 = (id, name) => {
        axios({
            method: 'put',
            url: 'http://localhost:3000/',
            data: {
                id,
                name
            }
        }).then( res => {
            console.log(res);
            this.componentDidMount();
        }).catch( err => {
            Swal('Oops...', 'Something went wrong!', 'error');
            console.log(err);
        });
    };
    add = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/', {
            name: this.state.inputName,
            age: this.state.inputAge
        }).then( res => {
            console.log(res);
            this.setState({
                inputName: '',
                inputAge: ''
            });
            this.componentDidMount();
        }).catch( err => {
            Swal('Oops...', 'Something went wrong!', 'error');
            console.log(err);
        });
    };
    handleInputChage = (e) => {
        let {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };
    searchInputDeleteIcon = () => {
        this.setState({
            searchInput: ''
        })
    };
    showSearchIcon = () => {
        if (this.state.searchInput === '') {
            return <i className="fa fa-times" aria-hidden="true" onClick={this.searchInputDeleteIcon} id={'searchInputIcon'} style={{marginLeft: '-25px', cursor: 'pointer', display: 'none'}}> </i>
        }else {
            return <i className="fa fa-times" aria-hidden="true" onClick={this.searchInputDeleteIcon} id={'searchInputIcon'} style={{marginLeft: '-25px', cursor: 'pointer'}}> </i>
        }
    };
    render (){
        return <React.Fragment>
            <div className={'container'}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                    <form className="form-inline">
                        <div className="form-group mb-2">
                            <label htmlFor="taskNameLabel" className="sr-only">Name: </label>
                            <label htmlFor="taskNameLabel">Name: </label>
                            {/*<input type="text" readOnly className="form-control-plaintext" value="Task Name: "/>*/}
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="taskNameInput" className="sr-only">Name:</label>
                            <input type="text" className="form-control" name="inputName" value={this.state.inputName} onChange={this.handleInputChage}/>
                            {/*<label htmlFor="taskNameInput">Task Age:</label>*/}
                            {/*<input type="number" className="form-control" id="taskNameInput1"/>*/}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="taskNameLabel" className="sr-only">Age: </label>
                            <label htmlFor="taskNameLabel">Age: </label>
                            {/*<input type="text" readOnly className="form-control-plaintext" value="Task Name: "/>*/}
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="taskNameInput" className="sr-only">Age:</label>
                            <input type="number" className="form-control" name="inputAge" value={this.state.inputAge} onChange={this.handleInputChage}/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2 mr-4" onClick={this.add}>Add</button>
                    </form>
                    <form className="form-inline ">
                        <div className="form-group mb-2">
                            <label htmlFor="searchLabel" className="sr-only">Search: </label>
                            <label htmlFor="searchLabel">Search: </label>
                            {/*<input type="text" readOnly className="form-control-plaintext" value="Search: "/>*/}
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="searchInput" className="sr-only">Search:</label>
                            <input type="text" className="form-control" id="searchInput" value={this.state.searchInput} onChange={this.handleSearchInput}/>
                            {
                                this.showSearchIcon()
                            }

                        </div>
                    </form>
                </nav>
            </div>
            <div className={'container'}>
                <div className="alert alert-secondary" role="alert">
                    TODO List Application <span className="badge badge-info">{this.state.data.length}</span>
                    <span className={'ml-5'} id={'searchQuery'}>{this.handleSearchQuery()}</span>
                </div>
            </div>
            <div className={'container'}>
                <div className="alert alert-info" role="alert">
                    <div className={'row'}>
                        <span className={'col-md-2'}> Name </span>
                        <span className={'col-md-2'}> Age </span>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'list-group list-group-flush'}>
                    {
                        (this.state.data).map( (value, index) => {
                            if (this.state.searchInput === '') {
                                return <Box name={value.name} age={value.age} delete={this.handleDelete}
                                            edit={this.handleEdit2} id={value.id} key={index}/>
                            } else {
                                if (value.name.indexOf(this.state.searchInput) > -1) {
                                    return <Box name={value.name} age={value.age} delete={this.handleDelete}
                                                edit={this.handleEdit2} id={value.id} key={index}/>
                                }
                                return '';
                            }
                        })
                    }
                </div>
            </div>
        </React.Fragment>
        }
 }

 export default Todo;