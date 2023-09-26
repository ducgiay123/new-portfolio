import React,{useState,useEffect,useRef} from 'react';

function TodoForm(props) {
const [input,setInput] = useState(props.edit?  props.edit.value:'');


const inputRef = useRef(null);

useEffect(() => {
    inputRef.current.focus();
})

const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
        id: Math.floor(Math.random() *10000),
        text: input
    });
    setInput('');
};
const handleChange = e =>{
    setInput(e.target.value);
}; 

    return (
        <form className ="todo-form" onSubmit={handleSubmit}>  
            {props.edit ? (
            <>    
            <input 
                type ="text" 
                placeholder ='Update your things' 
                value={input}
                name='text' 
                className='todo-input'
                onChange={handleChange}
                ref ={inputRef}
                ></input>
            <button className='todo-button'>Update task</button>
            </>
            ):(<>
            <input 
                type ="text" 
                placeholder ='Add a task' 
                value={input}
                name='text' 
                className='todo-input'
                onChange={handleChange}
                ref ={inputRef}
                >
                
            </input>
            <button className='todo-button'>Add a task</button>
            </>
            )}
        </form>
    )
}

export default TodoForm
