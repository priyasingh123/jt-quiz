import logo from './logo.svg';
import './App.css';
import EntryPage from './components/EntryPage';
import QuizPage from './components/QuizPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [emailVal, setEmailVal] = useState('')
  return (
        <Router>
          <Routes>
            <Route exact path="/jt-quiz" element={<EntryPage setEmailVal={setEmailVal} emailVal={emailVal}/>}/>
            <Route exact path="/jt-quiz/quiz" element={<QuizPage emailVal={emailVal}/>}/>
          </Routes>
        </Router>
        
  );
}

export default App;
