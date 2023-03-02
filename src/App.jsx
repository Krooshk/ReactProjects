import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
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
	(name==='HIGH'?setHighTasks:setLowTasks)(oldArray=>[...oldArray,{task:input,done:false}]);
}

function deleteTask(task,name){
	(name==='HIGH'?setHighTasks:setLowTasks)(oldArray=>[...oldArray.filter((element)=>element.task!==task)]);
}

function toggleStatus(task,status,name){
	(name==='HIGH'?setHighTasks:setLowTasks)(oldArray=>[...oldArray.map((element)=>{
		return element.task === task ?
			{...element, done: !status} :
			element
	})]);
	// console.log(status,task);
	// console.log('work');
}



  return (
	<div className='Container'>
		<List name='HIGH' toggleStatus={toggleStatus} tasks={highTasks} addTask={addTask} deleteTask={deleteTask}/>
		<List name='LOW' toggleStatus={toggleStatus} tasks={lowTasks} addTask={addTask} deleteTask={deleteTask}/>
	</div>
  )
}

export default App
