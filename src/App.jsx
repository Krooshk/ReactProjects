import { useState, useEffect} from 'react'
import List from './components/List.jsx'
import './App.css'


function App() {

const [lowTasks,setLowTasks]=useState( JSON.parse(localStorage.getItem('lowTasks')) || [{task:'Посмотреть в окно',done:false},{task:'Почесать спину', done:false},{task:'Выпить пива', done:false}]);
const [highTasks,setHighTasks]=useState(JSON.parse(localStorage.getItem('highTasks')) || [{task:'Переписать ToDo на рект',done:false},{task:'Посмотреть ролик о TS',done:false},{task:'Применить useEffect в todo',done:false},{task:'Добавить сохранение результатов в localstorage',done:false}]);


useEffect(() => {
	localStorage.setItem('lowTasks', JSON.stringify(lowTasks));
	localStorage.setItem('highTasks', JSON.stringify(highTasks));
},[lowTasks,highTasks]);

function addTask(input,name){

	let dublicate =(name==='HIGH') ? highTasks.map(item=>item.task).includes(input):
		lowTasks.map(item=>item.task).includes(input);

	dublicate && alert('Такая задача существует');

	if ((input!==undefined)&&(input!=="")&&(!dublicate)){
	(name==='HIGH'?setHighTasks:setLowTasks)(oldArray=>[...oldArray,{task:input,done:false}]);
	}
}

function deleteTask(task,name){
	(name==='HIGH'?setHighTasks:setLowTasks)(oldArray=>[...oldArray.filter((element)=>element.task!==task)]);
	console.log(task);
}

function toggleStatus(task,status,name){
	(name==='HIGH'?setHighTasks:setLowTasks)(oldArray=>[...oldArray.map((element)=>{
		return element.task === task ?
			{...element, done: !status} :
			element
	})]);
}



  return (
	<div className='Container'>
		<List name='HIGH' toggleStatus={toggleStatus} tasks={highTasks} addTask={addTask} deleteTask={deleteTask}/>
		<List name='LOW' toggleStatus={toggleStatus} tasks={lowTasks} addTask={addTask} deleteTask={deleteTask}/>
	</div>
  )
}

export default App
