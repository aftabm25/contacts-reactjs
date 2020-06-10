export const createContact = (contact) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
            const firestore= getFirestore()
            firestore.collection('contacts').add({
                ...contact,
                Time : new Date()
            })
            .then(() =>{
                dispatch({type:'CREATE_CONTACT', contact:contact})
            }).catch((err) => {
                dispatch({type:'CREATE_CONTACT_ERROR', error:err})
            })
    }
}

export const deleteContact = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firestore = getFirestore();
      
      firestore.collection('contacts').doc(id)
        .delete()
        .then(() => {
          dispatch({ type: 'DELETE_CONTACT', id:id })
        }).catch(err => {
          dispatch({ type: 'DELETE_CONTACT_ERROR', error:err })
      })
    }
  };
  