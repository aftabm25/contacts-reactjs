const initState= {
    authError:null 
}


const AuthReducer = (state= initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR' :
            console.log('Login error');
            return {
                ...state, 
                authError : 'LOGIN FAILED'
            }

        case 'LOGIN_SUCCESS' :
            console.log('LOGIN SUCCESS')
            return {
                ...state,
                authError:null
            }
        
            case 'SIGN_OUT_SUCCESS' :
                console.log('Signed out')
                return state
        default :
        return state 
    }

}

export default AuthReducer