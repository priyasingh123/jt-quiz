import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./../index.css"

const EntryPage = ({username, setUsername}) => {
    
    const [visible, setVisible] = useState('none')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        if (validateUsername()) {
            navigate ('/jt-quiz/quiz')
        }
    }

    const validateUsername = () => {
        const pattern = /^(?![\s]*$).{4,}$/;
        if (!pattern.test(username)) {
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
                    <span className={`error ${visible}`}>Username should be 4 characters long.</span>
                    <label htmlFor="username" className="label">Username
                        <input className="inputBox" id="username" type="text" value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
                    </label>
                <button className="btn entry" onClick={handleLogin}>SUBMIT</button>
            </form>
        </div>
    )
}

export default EntryPage
