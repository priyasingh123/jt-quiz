import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./../index.css"

const EntryPage = ({emailVal, setEmailVal}) => {
    
    const [visible, setVisible] = useState('none')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        if (validateEmail()) {
            navigate ('/jt-quiz/quiz')
        }
    }

    const validateEmail = () => {
        if (!emailVal) {
            setVisible('error')
            return false
        }
        else {
            setVisible('inline')
            return true
        }
    }


    return (
        <div className="container">
            <form className="login-form" >
                <h3 className="login-heading">Sign In</h3>
                    <span className={`error ${visible}`}>Email is required</span>
                    <label htmlFor="email" className="label">Email
                        <input className="inputBox" id="email" type="email" value={emailVal} onChange={(e)=> {setEmailVal(e.target.value)}}/>
                    </label>
                <button className="btn entry" onClick={handleLogin}>SUBMIT</button>
            </form>
        </div>
    )
}

export default EntryPage
