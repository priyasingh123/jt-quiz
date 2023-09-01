import React from 'react'
import './EntryPage.css'
import QuizPage from './QuizPage'
import { useNavigate } from 'react-router-dom'

const EntryPage = () => {
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()

        navigate ('/quiz')

    }
    return (
        <div className="container">
            
            <form className="login-form" >
                <h3 className="login-heading">Sign In</h3>
                    <label htmlFor="email" className="label">Email
                        <input className="inputBox" id="email" type="email" required/>
                    </label>
                <button className="btn entry" onClick={handleLogin}>SUBMIT</button>
            </form>
        </div>
    )
}

export default EntryPage
