import QuestionBoard from './QuestionBoard'
import NavigationBar from './NavigationBar';
import {useState} from 'react'


const QuizPage = () => {
    const [totalQues, setTotalQues] = useState(null)
    return (
        
        <div>
            {/* <NavigationBar totalQues={totalQues} /> */}
            <QuestionBoard setTotalQues={setTotalQues}/>
        </div>
    )
}
export default QuizPage;