
import Task from './Task.jsx'
import { nanoid } from 'nanoid'

function Tasks(props) {
	function deleteTask(task){
		props.deleteTask(task);
	}

	function toggleStatus(task,status){
		props.toggleStatus(task,status);
	}
	
	return (
	  <div>
	  {props.tasks.map((item,index)=><Task toggleStatus={toggleStatus} deleteTask={deleteTask} status={item.done} task={item.task} key={nanoid()} id={nanoid()} name={index.toString()}/>)}
	  </div>
	)
  }
  
  export default Tasks