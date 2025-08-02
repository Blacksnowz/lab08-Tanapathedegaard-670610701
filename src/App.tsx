import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskInput from "../components/TaskInput";
import Task from "../components/Task";
import Footer from "../components/Footer";

function App() {
  const username = "Tanapat Hedegaard"
  let tasks = [
    {id:1, title: "Read a book",description:"Vite + React + Bootstrap + TS",isDone: false}
  ];
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div className="d-flex flex-grow-1" style={{ flex: 1 }}>
        <Sidebar userName={username} type="student" />
        <main className="flex-grow-1 p-3" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <TaskInput />
          {tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </main>
      </div>
      <Footer year="2024" fullName="Tanapat Hedegaard" studentId="670610701" />
    </div>
  );
}


export default App;
