import React,{useState} from 'react';

const AddTodo = (props) => {
    const [title,setTitle] = useState();
    const [desc,setDesc] = useState();

    const newTitle = (e) =>{
        setTitle(e.target.value);
        console.log(e.target.value);
    };

    const newDesc = (e) =>{
        setDesc(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        if(!title || !desc) {
            alert("Title or Descriptions Can not be blank");
        }else{
            props.addTodo(title, desc);
            setTitle("")
            setDesc("")
        }

    }

    return (
        <>
            <div className="container" my-3>
                <h3>Add a Todo</h3>
                <form onSubmit={submit}>

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text"  value={title} onChange={newTitle} className="form-control" id="title" aria-describedby="emailHelp"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" value={desc} onChange={newDesc} className="form-control" id="desc"/>
                    </div>

                    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>

                </form>
            </div>
        </>
    )
}

export default AddTodo
