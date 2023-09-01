import { useEffect } from 'react'
import './NavigationBar.css'

const NavigationBar = ({totalQues, setQuesNum}) => {
    useEffect(() => {
        //render again
    },[totalQues])

    const handleNavigation = (e) => {
        // console.log (e.target.innerHTML)
        setQuesNum(e.target.innerHTML-1)
    }

    return (
        <div className="navigationBar">
            <ul className="navbar">
            {totalQues?.map ((ques, index) => {
                let addClass=''
                addClass = ques.attempted? 'attempted': ques.visited? 'visited' :'' 
                return (
                    <li key={`${index}`} className={`navbar-item ${addClass}`}>
                        <a onClick={handleNavigation} href="#" className={`navbar-anchor`}>{index+1}</a>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default NavigationBar;