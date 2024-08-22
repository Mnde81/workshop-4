import { useState } from "react";

const ToDoList = () => {

const [tasks, setTasks] = useState(["Isplauti indus", "Pasidaryti valgyti", "Nenumirti"]);
const [newTask, setNewTask] = useState("");


function handleInputChange(event) {
    setNewTask(event.target.value);

}

function addTask() {

}

function deleteTask(index) {

}

function moveTaskUp(index) {

}

function moveTaskDown(index) {

}

return ( <>
<h1>TO-DO-list</h1>
<div>
    <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
    <button className="add-button" onClick={addTask}>ADD</button>
</div>
<ul>
    {
        tasks.map((task, index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>MoveUp</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>MoveDown</button>
            </li>
        )
    }
</ul>


</> 

)
}

export default ToDoList;