import QuestionBoard from './QuestionBoard'
import NavigationBar from './NavigationBar';
import {useState} from 'react'


const QuizPage = () => {
    const [totalQues, setTotalQues] = useState([])
    return (
        
        <div>
            <NavigationBar totalQues={totalQues} />
            <QuestionBoard setTotalQues={setTotalQues} totalQues={totalQues}/>
        </div>
    )
}
export default QuizPage;