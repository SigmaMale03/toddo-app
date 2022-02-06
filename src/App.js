import React,  { useState }  from "react";
import './index.css';
import Todolist from "./Todolist";

const App = () => {
    const [inputValue, setinputValue] = useState('');
    const [items, setitems] = useState([]);
    
    const Addlist = (e) => {
        setinputValue(e.target.value);
    };
    const Additem = () => {
        if (inputValue == "") {
            alert("write something")
        }else {
            setitems((preValue) => {
                return [...preValue, inputValue];
            });
            setinputValue('');
        }
    };
    const delitem = (id) => {
        setitems((preVlue) => {
            return preVlue.filter((arElm, index) => {
                return index !== id;
            });
        });

    }; 


// onClick={ inputValue = "" ? Additem : null }
   return(
       <>
           <div className="container">
               <div className="box">
                    <h1 className="todo_heading">To Do List</h1>
                        <input
                        type='text' 
                        className="todo_input"
                        placeholder="Enter To Do" 
                        value={inputValue}
                        onChange = {Addlist}      
                        />
                        <button className="todo_btn" onClick={Additem}  > + </button>
                        <br />
                        <hr />
                        <ol className="todo_list">
                                {items.map((itemvalue, index) => {
                                return <Todolist
                                    text= {itemvalue}
                                    key= {index}
                                    id= {index}
                                    onSelect= {delitem}
                                    />
                                })}
                        </ol>

               </div>
               <div className="animation">

               </div>
           </div>
       </>
   )
};

export default App;
