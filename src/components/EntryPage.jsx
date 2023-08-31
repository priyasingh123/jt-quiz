import React from 'react'
import './EntryPage.css'

const EntryPage = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        console.log ('loggedIn')
    }
    return (
        <div className="container">
            
            <form className="login-form" >
                <h3 className="login-heading">Sign In</h3>
                <label htmlFor="email">
                    <input className="inputBox" id="email" type="password" />Email
                </label>
                <button onClick={handleLogin}>SUBMIT</button>
            </form>
        </div>
    )
}

export default EntryPage
