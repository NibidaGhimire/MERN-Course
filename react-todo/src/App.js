
import './App.css';
import {useEffect, useState} from "react";


function App() {
  return (
    <Todos />
  );
}


function Todos(){
  const AppTitle="TODO APP"
  const [todoList,setTodoList]=useState([
    // {
    //   title:"Read a book",
    //   striked:false
    // },
    // {
    //   title:"Buy a pen",
    //   striked:false
    // }

  ]);


  const [counter,setCounter]=useState(0)
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCounter((prev)=>prev+1)
    },1000)
   
    return ()=>{
      clearInterval(interval);
    }
  },[])




  const onAddTodo=(todo)=>{
    // setTodoList((prev)=>[...prev,todo]);
    setTodoList((prev)=>{
      const newState=[...prev,todo];
      return newState;
    })
    
  }
  const changeTodoStrike=(index)=>{
    const newTodoList=todoList.map((todo,idx)=>{
      if(index===idx){
        return {...todo,striked:!todo.striked}
      }
      return todo
    })
    setTodoList ((prev)=>[...newTodoList])
  }


  const clearTodo=()=>{
    setTodoList((_)=>[]);
  }
  
  return(
    <div className="todo-card">
      <TodoTitle title={AppTitle} />
      <AddTodo addTodo={onAddTodo} />
      <TodoList todos={todoList} onClickTodo={changeTodoStrike}/>
      <br />
      <TodoFooter  todoClear={clearTodo}/>
      <p>{counter}</p>
    </div>
  )
}


function TodoTitle({title}){
  return (
    <div className="title">
          <h1>{title}</h1>
    </div>
  )
}


function AddTodo({addTodo}){
  const [todo,setTodo]=useState("");



  const handleTodo=(event)=>{
    const todoValue=event.target.value;
    setTodo((_)=>todoValue);
  }
  const handleAddTodo=()=>{
    if(valueOf(todo)!==null){
    addTodo({
      title:todo,
      striked:false
    });
    setTodo((_)=>"");
  }
  }

  return (
    <div className="todo-card add-todo">
          <input placeholder='Add new todo' onChange={handleTodo} value={todo} ></input>
          <br />
          <button onClick={handleAddTodo}>+</button>
    </div>
  )
}

 
function TodoList({todos,onClickTodo}){
  
  const crossTodo=(index)=>{
    onClickTodo(index);
  }
  return(
    <>
      <h2>TODO-LIST</h2>
      <div className="todo-card todo-list">
        {
          todos.map((todo,index)=>(
            <div key={index} style={todo.striked?{cursor:"pointer",textDecoration:"line-through"}:{cursor:"pointer"}} onClick={(event)=>crossTodo(index)}>
              <li>{todo.title}</li>
            </div>
          ))
        }
      </div> 
    </>
  )
}


function TodoFooter({todoClear}){
  return (
    <div className="todo-card todo-footer">
      {/* <div className="todo-card pending-task" >
          <p>You have  pending tasks!</p>       
      </div> */}
      <div>
        <button onClick={todoClear}>Clear All!</button>
      </div>
    </div>
  )
}


export default App;
