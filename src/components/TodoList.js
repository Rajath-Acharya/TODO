import React,{useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const TodoList = () => {
const [item, setItem] = useState("buy apple");

const itemEvent=(event)=>{
    setItem(event.target.value);

}

    return (
       <>
       <div className="main_div">
           <div className="center_div">
               <br/>
               <h1> ToDo List</h1>
               <br/>
               <input type="text" placeholder="Add todo..." onChange={itemEvent}/>
               <Button className="newBtn">
                   <AddIcon/>
               </Button>
               <ol>
                   <li>{item}</li>
               </ol>

               
           </div>
       </div>
       </>
    )
}
export default TodoList;