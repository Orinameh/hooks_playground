import React, { useState, useReducer } from 'react';
import { login } from '../utils'
import './Login.css';

const initialState = {
    username: '',
    password: '',
    loading: false,
    success: false,
    error: ''

}

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'FIELD':
            return {
                ...state,
                [action.field]: action.value
            }
        case 'LOGIN':
            return {
                ...state,
                loading: true,
                error: ''

            }

        case 'SUCCESS':
            return {
                ...state,
                success: true,
            }
        case 'ERROR':
            return {
                ...state,
                success: false,
                loading: false,
                error: 'Incorrect username and password',
                
            }

        case 'LOGOUT':
            return {
                ...state,
                success: false,
                username: '',
                loading: false,
                password: ''
            }
        default:
            return state;
    }
    
}
const Login = () => {

    const [state, dispatch] = useReducer(loginReducer, initialState)

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [loading, setLoading] = useState(false);
    // const [success, setSucces] = useState(false)
    // const [error, setError] = useState('');
    const { username, password, loading, success, error } = state

    const onSubmit = async e => {
        e.preventDefault();
        // setError('');
        // setSucces(false)
        // setLoading(true)
        dispatch({ type: 'LOGIN'})
        try {
            await login({username, password});
            // setSucces(true)
            // setError('')
            // setPassword('')
            dispatch({ type: 'SUCCESS'})
        } catch (error) {
            // setError("Incorrect username or password")
            dispatch({ type: 'ERROR'})
        }
        // setLoading(false)
    }


    return (
        <div className="App">
            {success  ? 
                <>
                    <p className="success">Welcome {username}</p>
                    <button className="submit"  onClick={() => dispatch({type: 'LOGOUT'})}>
                        Logout
                    </button>
                </>
                :
                <div className="login__container">
                    <form className="form" onSubmit={onSubmit}>
                        {error  && <p className="error">{error}</p>}
                        

                        <p>Please Log in</p>
                        <input 
                            className="inputForm" 
                            type="text" 
                            placeholder="Username" 
                            value={username} 
                            required
                            onChange={e => dispatch({ type: 'FIELD', field: 'username', value: e.currentTarget.value })}/>
                        <input
                            className="inputForm"
                            type="password"
                            autoComplete="new-password"
                            placeholder="Password"
                            value={password} 
                            required
                            onChange={e => dispatch({ type: 'FIELD', field: 'password', value: e.currentTarget.value })}
                        />
                        <button className="submit" type="submit" disabled={loading}>
                            { loading ? "Loggin in" : "Login"}
                        </button>
                    </form>
                </div>
            

            }
        </div>
    )
}

export default Login