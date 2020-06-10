import React from 'react'
import {connect} from 'react-redux'
import {deleteContact} from '../Actions/ContactActions'
import {Link} from 'react-router-dom'

const ContactDetails = ({contact, deleteContact, search}) => {

    const handleDelete = (e) =>{
            e.preventDefault();
            const id= contact.id 
            deleteContact(id)
            
    }
if(search!=='' && contact.FirstName.toLowerCase().indexOf(search.toLowerCase())===-1 && contact.LastName.toLowerCase().indexOf(search.toLowerCase())===-1 && contact.Phone.indexOf(search)===-1 && contact.Email.toLowerCase().indexOf(search.toLowerCase())===-1){
    return null;
}
return(
        <div className="card horizontal z-depth-2 contact-summary center">
                <div className="card-content grey-text">
                <div className="title center">
                <span className="card-title contact-name">{contact.FirstName} {contact.LastName}</span>
                </div>
                <div className="details">
                    <p>Phone : {contact.Phone}</p>
                    <p>Email : {contact.Email}</p>
                    <p>Status : {contact.Status}</p>
                </div>
                </div>
                <div className="card-action">
                <i className="material-icons small" onClick ={handleDelete}>delete</i>
            <Link to ={'/editContact/' + contact.id}>
            <i className="material-icons small" >edit</i>
            </Link>
            </div>
            </div>
    )
}

const mapStateToProps =(state, ownProps) => {
return{
    id: ownProps.contact.id
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: (id) => dispatch(deleteContact(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails)