import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut } from '../Actions/AuthActions'
const NavBar = (props) => {
    const {auth} = props
    console.log(auth)
    return (
        <nav className="nav-wrapper">
        <div className="container">
            <Link to = '/' className='logo left'>.ContactList</Link>
            {auth.uid ? 
            <ul className='right'>
            <li><NavLink to ='/create' className='links'>Create Contact</NavLink></li>
            <li ><a className='links' onClick={props.signOut}>Sign Out</a></li>
            </ul> :
            null 
            }
        </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}
const mapDispatchToProps =(dispatch) => {
    return{
            signOut : () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)