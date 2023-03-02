import CloseIcon from '../assets/close-icon-45.svg';

function Task(props) {

	function deleteTask(event){
		event.stopPropagation();
		props.deleteTask(props.task);
	}

	function toggleStatus(event){
		props.toggleStatus(props.task,props.status);
		event.stopPropagation;
		console.log('work');
	}


	return (
		<div className='taskElement'>
		<label onChange={toggleStatus}  className="checkbox" >
		<input type="checkbox" className="checkbox-round" defaultChecked={props.status}  name={props.name} value="yes"/>{props.task}
		</label>
		<div className='iconClose' onClick={deleteTask} ><img src={CloseIcon}  alt="close"></img></div>
		</div>
	)
  }
  
  export default Task