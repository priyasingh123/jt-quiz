import {useState, useEffect} from 'react'
import "./../index.css"

const Report = ({questionBank, totalQues, username}) => {
  const [correctNo, setCorrectNo] = useState(0);
  const [incorrectNo, setIncorrectNo] = useState(0);
  const [unattemptedNo, setUnattemptedNo] = useState(0);

  useEffect(() => {
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    questionBank.forEach((ques, index) => {
      if (totalQues[index].attempted === ques.correct_answer) {
        correctCount++;
      } else if (!totalQues[index].attempted) {
        unattemptedCount++;
      } else {
        incorrectCount++;
      }
    });

    setCorrectNo(correctCount);
    setIncorrectNo(incorrectCount);
    setUnattemptedNo(unattemptedCount);
  }, []);


    return (
        <div className="report-file">
            <h1 className="report-heading">Results</h1>
            Hi, {username}
            <div className="result-summary">
                <p className={`review-ques`}>Total : 15</p>
                <p className={`correct-p`}>Correct : {correctNo} </p>
                <p className={`incorrect-p`}>Incorrect : {incorrectNo}</p>
                <p className={`unattempted-p`}>Unattempted : {unattemptedNo}</p>
            </div>
            
            {questionBank.map ((ques, index)=> {
                let reviewClass=''
                if (totalQues[index].attempted === ques.correct_answer) {
                    reviewClass = 'correct'
                }
                else if (!totalQues[index].attempted){
                    reviewClass = 'unattempted'
                }
                else {
                    reviewClass = 'incorrect'
                }
                return (
                    
                    
                    <div key={index} className={`review ${reviewClass}`}>
                        <p className={`${reviewClass}-p`}>{String(reviewClass).toUpperCase()}</p>
                        <p className={`review-ques`}>{`${index+1}. ${ques.question}`}</p>
                        {totalQues[index]?.mcq?.map ((option) => 
                           <div className={`review-ques`}><input type="radio" disabled value={option} />{option}</div>
                        )}
                        <p className={`${reviewClass}-p`}>Your Answer: {totalQues[index].attempted}</p>
                        {reviewClass !== 'correct' && <p className={`correct-p`}>Correct Answer: {questionBank[index].correct_answer}</p>}
                    </div>
                    
                )
            })}
        </div>
    )
}

export default Report;