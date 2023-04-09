import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StudentPage from './Components/StudentPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<StudentPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
