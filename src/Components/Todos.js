import React from 'react';
import TodoItems from './TodoItems';

const Todos = (props) => {

    const myStyle = {
        minHeight: "50vh",
        margin: "40px auto",
    }

    return (
        <>
            <div className="container my-3" style={myStyle}>
                <h3 className="my-3">Todos List</h3>
                {/* <TodoItems todo={props.todos[2]}/> */}
                {
                    props.todos.length ===0 ?
                    "No Todos" :
                    props.todos.map((todo)=>{
                        return (<TodoItems todo={todo} key={todo.sno} onDelete={props.deleteTodo}/>)
                    })
                }
            </div>
        </>
    )
}

export default Todos
