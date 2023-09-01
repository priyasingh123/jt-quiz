import './Report.css'

const Report = ({questionBank, totalQues}) => {
    return (
        <div className="report-file">
            {/* todo show options also */}
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
                        <p>{ques.question}</p>
                        <p>Your Answer: {totalQues[index].attempted}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Report;