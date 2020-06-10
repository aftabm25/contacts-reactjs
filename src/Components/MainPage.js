import React, { Component } from 'react'
import ContactList from './ContactList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from  'react-router-dom'
class MainPage extends Component{
    state={
      search:''
    }
    onchange = (e) => {
        this.setState({search: e.target.value})
    }
    
    render() {
        const {contacts, auth} = this.props
        const{search} = this.state
        if(!auth.uid) return <Redirect to= '/signIn'/>
        return(
            <div className="mainpage container ">
        
            <input  className='search-box' type="text" onChange={this.onchange} placeholder='Search Contact'/>
                <div className="contact-list">
                    <ContactList contacts={contacts} search={search}/>
                </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
  return{
      contacts:state.firestore.ordered.contacts,
      auth:state.firebase.auth
  }

}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'contacts', orderBy:['FirstName','asc']}
    ]))(MainPage)