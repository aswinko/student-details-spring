import './App.css';
import Form from './Components/Form/Form';
import Table from './Components/Table/Table';

function App() {
  return (
    <div className="container mx-auto flex w-full">
      <div className="left w-5/12">
        <Form />
      </div>
      <div className="right w-full">
        <Table />
      </div>
    </div>
  );
}

export default App;
