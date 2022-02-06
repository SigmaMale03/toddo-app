import React, {useState} from "react";
import App from './App';
import './index.css';


const Todolist = (props) => {
   return (
       <>
          <div className="list_box">
          <i className="fas fa-times-circle todo_delbtn" 
                onClick={() => {
                    props.onSelect(props.id);
                }} 
          />
            <li>{props.text}</li>
          </div>
       </>
   )
};

export default Todolist;
