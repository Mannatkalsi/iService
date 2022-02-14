import React, { useRef, useState } from 'react';
import Button from './Button';
import Describe from './Describe';
import Payment from './Payment';
import Date from './Date';
import TaskType from './TaskType';
import TaskBudget from './TaskBudget';
import "./Content.css"
import axios from 'axios';

function Task() {
  const [isPerson, setIsPerson] = useState(true)
  const image = useRef(null);
  const [task, setTask] = useState({
    task_type: '',
    task_tittle: '',
    task_description: '',
    task_suburb: '',
    task_date: '',
    payment_type: '',
    budget: ''
  })
  const onTypeChange = (e) => {
    if (e.target.value === "person") {
      setIsPerson(true)
      setTask((preValue) => {
        return {
          ...preValue,
          task_type: "Person"
        }
      })
    }
    else {
      setIsPerson(false)
      setTask((preValue) => {
        return {
          ...preValue,
          task_type: "Online"
        }
      })
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setTask((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }

  const handleClick = () => {
    console.log(task.task_type, task.task_tittle, task.task_description, task.task_suburb, task.task_date, task.payment_type, task.budget)
    let formData = new FormData()
    const Image = image.current.files[0];
    formData.append('image', Image, Image.name);
    formData.append('task_type', task.task_type);
    formData.append('task_tittle', task.task_tittle);
    formData.append('task_description', task.task_description);
    formData.append('task_suburb', task.task_suburb);
    formData.append('task_date', task.task_date);
    formData.append('payment_type', task.payment_type);
    formData.append('budget', task.budget);
    axios.post('http://localhost:8000/task', formData).then(res => {
        console.log(res);
        if (res.status === 200) {
          alert(' Task Sucessfully Added !');
          window.location.href = '/'
        }

      })
  }
  return (
    <div className="App">
      <div className="header-div">
        <h1 className="main">New Task</h1>
      </div>
      <TaskType typeChange={onTypeChange} />
      <div className="header-div">
        <h2>Describe your task to Experts</h2>
      </div>
      <Describe onChange={handleChange} />
      <p className="task-type-p">Task Image</p>
      <input type="file" name="image" ref={image} id="upload_file" />
      <div className="header-div">
        <h2>Setting up your Task</h2>
      </div>
      <Date isTypePerson={isPerson} onChange={handleChange} />
      <div className="header-div">
        <h2>Suggest how much</h2>
      </div>
      <Payment onChange={handleChange} />
      <TaskBudget onChange={handleChange} />
      <div>
        <Button onClick={handleClick} />
      </div>
      <br />
    </div>
  );
}

export default Task