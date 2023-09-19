import {useEffect } from 'react'
import "./../index.css"
import _ from 'lodash'

const Question = ({question, index, totalQues, setTotalQues}) => {
    
    useEffect(() => {
        const visitedTotalQues = totalQues.map((ques, ind) => {
          return ind === index ? { ...ques, visited: true} : ques;
        });
        setTotalQues(visitedTotalQues);
      }, [index]);

    const handleChange = (e) => {
        const updatedTotalQues = totalQues.map ((ques, ind) => 
            ind === index ? {...ques, attempted: e.target.value, visited: true}: ques
        )
        setTotalQues(updatedTotalQues)
    }

    return (
        <div className="question">
            <p>{`${index+1}. ${question}`}</p>

            <div className='options'>
            {totalQues[index]?.mcq?.map ((option) => {
                return (
                    <div key={`${index}-${option}`} className='option'>
                        <label ><input type="radio" name={`${question}-${index+1}`} value={option} checked={option === totalQues[index]?.attempted? true: false} onChange={handleChange} />{option}</label>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Question