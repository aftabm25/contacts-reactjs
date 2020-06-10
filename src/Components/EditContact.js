import React , {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {createContact, deleteContact} from '../Actions/ContactActions'
import {Redirect} from 'react-router-dom'
const EditContact = (props) => {
    const {contact} = props 
    const {auth} =props
    const [details, setDetails] = useState({
        FirstName : '',
        LastName : '',
        Phone : '',
        Email :'',
        Status :''
    })
    useEffect(() => {
        console.log('updated', contact)
        setDetails({
            ...contact
        })
    }, [contact])
    console.log(details)
    if(!auth.uid) return <Redirect to= '/signIn'/>
        if(contact) {
        const id= props.match.params.id
         const handleChange = (e) => {
            e.preventDefault()
            setDetails({
                ...details,
                [e.target.id] : e.target.value, 
            }
            )
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            props.deleteContact(id)
            props.createContact(details)
            props.history.push('/')

        }
        const handleRadio = (e) => {
            e.preventDefault();
            setDetails({
                ...details,
                Status : e.target.id 
            }
            )
    }
        return(
            <div className='container'>
                <form onSubmit={handleSubmit} className="forms">
                    <h5 className='title'>Edit Contact</h5>
                    <div>
                        <input value={details.FirstName} onChange={handleChange} type="text" id='FirstName' className='white-text'  />
                    </div>
                    <div className="input-field">
                        <input onChange={handleChange} type="text" id='LastName' value={details.LastName} className='white-text'/>
                    </div>
                    <div className="input-field">
                        
                        <input onChange={handleChange} type="text" id='Phone' value={details.Phone} className='white-text'/>
                    </div>
                    <div className="input-field">
                        
                        <input onChange={handleChange} type="email" id='Email' value={details.Email} className='white-text'/>
                    </div>
                        <label>
                            <input className="with-gap" name="group1" type="radio" onChange={handleRadio} id='Active'/>
                            <span>Active</span>
                        </label>
                        <label>
                            <input className="with-gap" name="group1" type="radio" onChange={handleRadio} id='Inactive'/>
                            <span>Inactive</span>
                        </label>
                    <div className="input-field">
                        <button className="btn add lighten-1 depth-0">Edit Contact</button>
                    </div>
                </form>
                
            </div>
        )
    }
    else 
    {
        return (
            <p>Loading Project</p>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    
        const id = ownProps.match.params.id
        const contacts = state.firestore.data.contacts
        const contact = contacts? contacts[id] : null 
        return{
            contact:contact,
            auth: state.firebase.auth

        }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: (id) => dispatch(deleteContact(id)),
        createContact : (contact) => dispatch(createContact(contact))
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection : "contacts"}
   ])
)(EditContact)
