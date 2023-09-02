import { useState, useEffect } from "react"
import "./QuestionBoard.css"

const Timer = ({setShowReport}) => {
    //send min initial value from parent
    const [min, setMin] = useState(30)
    // const [min, setMin] = useState(2)
    const [sec, setSec] = useState(0)
    useEffect (() => {
        let timer;
        if (min > 0) {
            timer = setTimeout(() => {
                if (sec > 0) {
                    setSec((prevSec) => prevSec - 1);
                } else {
                    setMin((prevMin) => prevMin - 1);
                    setSec(59);
                }
            }, 1000);
        } else if (min === 0 && sec === 0) {
            timer = setTimeout(() => {
                setShowReport(true);
            }, 1000);
        }
        else if (min === 0) {
            timer = setTimeout(() => {
                setSec((prevSec) => prevSec - 1);
            }, 1000);
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [min, sec, setShowReport]);

    return (
        <>
        <div className="timer">{min.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}</div>
        </>
    )
}

export default Timer;