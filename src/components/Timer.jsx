import { useState, useEffect } from "react"
const Timer = () => {
    //send min initial value from parent
    const [min, setMin] = useState(1)
    const [sec, setSec] = useState(5)

    useEffect (() => {
        if (min > 0) {
            setTimeout(() => {
                sec >=2 ? setSec((prevSec) => prevSec-1): setSec(5)
                sec >=2 ? setMin((prevMin) => prevMin): setMin((prevMin) => prevMin-1)
            }, 1000)
        }
        else if (min === 0) {
            setTimeout(() => {
                sec >=1 ? setSec((prevSec) => prevSec-1): setSec((prevSec) => prevSec)
            }, 1000)
        }
    }, [sec])

    return (
        <div>
            <button>{min}:{sec}</button>
        </div>
    )
}

export default Timer;