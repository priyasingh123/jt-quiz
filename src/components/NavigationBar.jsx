import './NavigationBar.css'
const NavigationBar = ({totalQues}) => {
    return (
        <div className="navigationBar">
            <ul className="navbar">
            {totalQues?.map ((ques, index) => {
                return (
                    <li className="navbar-item">
                        <button className="navbar-button">{index}</button>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default NavigationBar;