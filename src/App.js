import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Content from './components/content';
import List from './components/list';
import CreateNewTask from './components/createNewTask';



function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/createNewTask" element={<CreateNewTask/>}/>
      </Routes>
    </Router>
  );
}

export default App;
