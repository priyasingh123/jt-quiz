import './App.css';
import EntryPage from './components/EntryPage';
import QuizPage from './components/QuizPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [username, setUsername] = useState('')
  return (
        <Router>
          <Routes>
            <Route exact path="/jt-quiz" element={<EntryPage setUsername={setUsername} username={username}/>}/>
            <Route exact path="/jt-quiz/quiz" element={<QuizPage username={username}/>}/>
          </Routes>
        </Router>
        
  );
}

export default App;
