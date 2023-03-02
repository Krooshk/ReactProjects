
import Input from './Input.jsx';
import Tasks from './Tasks.jsx';
import { useState } from 'react'

function List(props) {

	const [input,setInput] = useState();

	function handleChange(value){
		setInput(value);
		console.log(value);
	}

	function addTask(){
		props.addTask(input,props.name);
	}

	function deleteTask(task){
		props.deleteTask(task,props.name);
	}

	function toggleStatus(task,status){
		props.toggleStatus(task,status,props.name);
	}

	return (
	  <div>
	  <h3>{props.name}</h3>
	  <Input importance={props.name} value={input} onChange={handleChange} addTask={addTask}/>
	  <Tasks toggleStatus={toggleStatus} tasks={props.tasks} deleteTask={deleteTask}/>
	  </div>
	)
  }
  
  export default List