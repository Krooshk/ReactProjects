import CloseIcon from '../assets/close-icon.svg'
function Input(props) {

	function handleChange(event){
	 props.onChange(event.target.value);
	}

	function addTask(){
		props.addTask();
	}

	return (
		<label className="input-text">
	  <input 
	  	type='text' 
	  	value={props.value} 
	  	onChange={handleChange} 
		placeholder={props.importance==='HIGH'?'Добавить важных дел': 'Добавить'}
		>
		</input>
	  <img className='iconAdd' src={CloseIcon} onClick={addTask} alt="plus"></img>
	  </label>
	)
  }
  
  export default Input