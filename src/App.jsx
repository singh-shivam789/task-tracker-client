import { useEffect, useState } from 'react'
import Header from '../src/components/Header'
import Main from '../src/components/Main'
import Footer from '../src/components/Footer'
import EditPopUp from './components/EditPopUp'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskClicked, setTaskClicked] = useState({
    data: null,
    state: false
  });
  useEffect(() => {
    fetch("http://localhost:3000").then(res => res.json()).then((resData) => {
      const data = resData.data;
      console.log(data)
      setTasks(data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <div className="container">
      <Header setTasks={setTasks} />
      <Main tasks={tasks} setTasks={setTasks} setTaskClicked={setTaskClicked} />
      <Footer />
      {taskClicked.state && <EditPopUp setTask={setTasks} taskClicked={taskClicked} setTaskClicked={setTaskClicked} />}
    </div>
  )
}

export default App
