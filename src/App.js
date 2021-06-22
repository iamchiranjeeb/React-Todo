import React,{useState,useEffect} from 'react';
import Headers from './Components/Headers';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import Footers from './Components/Footers';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


const App = () => {
  let initTodo;
  if(localStorage.getItem("allTodos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("allTodos"));
  }

  const deleteTodos = (todo) => {
    console.log("Delete Your Todos.",todo);

    setAllTodos(allTodos.filter((e)=>{
      return e!==todo;
    }));

    localStorage.setItem("allTodos",JSON.stringify(allTodos));
  }

  const addTodo = (title,desc) => {
    console.log("Todos ",title,desc);
    let sno;

    if(allTodos.length === 0) {
      sno = 0
    }else{
      sno = allTodos[allTodos.length-1].sno + 1;
    }

    const myTodos = {
      sno : sno,
      title : title,
      desc : desc,
    }

    setAllTodos([...allTodos,myTodos])
    console.log(myTodos);

   
  }

  let [allTodos,setAllTodos] = useState([initTodo]);

  useEffect(()=>{
    localStorage.setItem("allTodos",JSON.stringify(allTodos))
  },[allTodos])
  


  return (
    <>
      <Router>
        <Headers title="Looser Todo" searchBar={false}/>

        <Switch>
          <Route exact path="/" render={() =>{
            return(
              <>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={allTodos} deleteTodo={deleteTodos}/>
              </>
            )
          } }>

          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
        <Footers/>
      </Router>
    </>
  )
}

export default App
