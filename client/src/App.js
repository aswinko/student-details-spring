import './App.css';
import Form from './Components/Form/Form';
import StudentList from './Components/StudentList/StudentList';

function App() {
  return (
    <div className="container mx-auto flex w-full flex-col md:flex-row">
      <div className="left w-full md:w-5/12">
        <Form />
      </div>
      <div className="right w-full">
        <StudentList />
      </div>
    </div>
  );
}

export default App;
