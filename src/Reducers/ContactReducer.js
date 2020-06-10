const initState= {
    contacts :[
        {id:1, FirstName:'Aftab', LastName:'Mohideen', Phone:'7977676639', Email:'aftabmohideen25@gmail.com', Status:'Active'},
        {id:1, FirstName:'Aysha', LastName:'Mohideen', Phone:'9969896248', Email:'ayshamohideen25@gmail.com', Status:'Active'}
    ]
}


const ContactReducer = (state= initState,action) => {

    switch(action.type) {
        case 'CREATE_CONTACT': 
            console.log('created contact', action.contact)
            return state
        case 'CREATE_CONTACT_ERROR':
            console.log('create contact error', action.error)

            case 'DELETE_CONTACT':
                console.log('delete contact');
                return state
            case 'DELETE_CONTACT_ERROR':
                console.log('delete contact error', 'state: ', state, 'action: ', action.project);
                return state;

        default:
            return state

    }
}

export default ContactReducer