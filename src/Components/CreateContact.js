import React, { Component } from 'react'
import {createContact} from '../Actions/ContactActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class CreateContact extends Component {
    state = {
            FirstName : '',
            LastName : '',
            Phone : '',
            Email :'',
            Status :''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createContact(this.state)
        this.props.history.push('/')
    }
    handleRadio = (e) => {
            e.preventDefault();
            this.setState({
                Status : e.target.id 
            }
            )
    }
    render() {
        const {auth}= this.props
        if(!auth.uid) return <Redirect to= '/signIn'/>
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='forms'>
                    <h5 className='title'>Add Contact</h5>
                    <div className="input-field">
                        <label htmlFor="FirstName">First Name</label>
                        <input onChange={this.handleChange} type="text" id='FirstName' className='white-text'/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="LastName">Last Name</label>
                        <input onChange={this.handleChange} type="text" id='LastName' className='white-text'/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="Phone">Phone</label>
                        <input onChange={this.handleChange} type="text" id='Phone' className='white-text'/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handleChange} type="email" id='Email' className='white-text'/>
                    </div>
                        <label>
                            <input className="with-gap" name="group1" type="radio" onChange={this.handleRadio} id='Active'/>
                            <span>Active</span>
                        </label>
                        <label>
                            <input className="with-gap" name="group1" type="radio" onChange={this.handleRadio} id='Inactive'/>
                            <span>Inactive</span>
                        </label>
                    <div className="input-field">
                        <button className="btn add depth-0">Add Contact</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {

    return{
        createContact : (contact) => dispatch(createContact(contact))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CreateContact)
