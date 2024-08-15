import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const[showFinished,setshowFinished] = useState(true);

useEffect(() => {
  let todostring =localStorage.getItem("todos")
  if(todostring){
    let todos= JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
  }

  
}, [])


  const saveToLS=(params)=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    saveToLS();
  };

  const handleEdit = (index) => {
    // let t= todos.filter(i=>i.index ==index);
    setTodo(todos[index].todo)
    setTodos(todos.filter((_, i) => i !== index));
    saveToLS();
  };

  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);

  };

  const handleCheckbox = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const handleShowFinished= ()=>{
    setshowFinished(!showFinished)
  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto my-7 rounded-xl p-7 bg-violet-200 min-h-[70vh] w-2/3">
        <div className="addTodo my-5">
          <h1 className='text-xl font-bold flex justify-center'>iTask-Your all thoughts and notes</h1>
          <h2 className='text-lg font-bold m-1'>Add a Todo</h2>
          <div className='flex'>
          <input onChange={handleChange} value={todo} type="text" className='w-11/12 rounded-md p-1' />
          <button onClick={handleAdd} className='rounded-lg bg-blue-500 hover:bg-black text-white px-2 py-1 mx-5'>Add</button>
          </div>
          <div className='p-2 gap-5'><input type="checkbox"  onClick={handleShowFinished}/> Show finished </div> 
        </div>
        <h2 className='font-bold text-lg'>Your Todos</h2>
        <div className="todos ">
          {todos.length===0 && <div className='font-bold  m-5 px-10'>No Todos to display</div>}
          {todos.map((item, index) => {

   return (showFinished || !item.isCompleted) &&  <div key={index} className="todo flex w-1/4 justify-between">

              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => handleCheckbox(index)}
              />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>


              <div className="buttons flex my-2">
                <button onClick={() => handleEdit(index)} className='rounded-lg bg-blue-500 hover:bg-black text-white px-2 py-1 mx-1'>Edit</button>
                <button onClick={() => handleDelete(index)} className='rounded-lg bg-blue-500 hover:bg-black text-white px-2 py-1 mx-1'>Delete</button>
              </div>
            </div>
})}
        </div>
      </div>
    </>
  );
}

export default App;
 