import { useEffect } from 'react'
import "./../index.css"

const NavigationBar = ({totalQues, setQuesNum}) => {
    useEffect(() => {
    },[totalQues])

    const handleNavigation = (index) => {
        setQuesNum(index)
    }

    return (
        <div className="navigationBar">
            <ul className="navbar">
            {totalQues?.map ((ques, index) => {
                let addClass=''
                addClass = ques.attempted? 'attempted': ques.visited? 'visited' :'' 
                return (
                    <li key={`${index}`} onClick={()=>handleNavigation(index)} className={`navbar-item ${addClass}`}>
                        <a  href="#" className={`navbar-anchor`}>{index+1}</a>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default NavigationBar;