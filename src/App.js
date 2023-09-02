import logo from './logo.svg';
import './App.css';
import EntryPage from './components/EntryPage';
import QuestionBoard from './components/QuestionBoard'
import NavigationBar from './components/NavigationBar';
import QuizPage from './components/QuizPage';
import Timer from './components/Timer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
        <Router>
          <Routes>
            <Route exact path="/jt-quiz" element={<EntryPage/>}/>
            <Route exact path="/jt-quiz/quiz" element={<QuizPage/>}/>
          </Routes>
        </Router>
        
  );
}

export default App;
