import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './index.css'

function FindTasks(props) {
  console.log(JSON.stringify(props));
  
  return (
    <div className="modal">
      <div className="modal-header">
        <div><b>Detail:</b></div>
        <div onClick={props.closeModal}>x</div>
      </div>
      <div>
        <div><b>Task-Type:</b> {props.currentTask.Task_type}</div><br/>
        <div><b>Task_Tittle: </b>{props.currentTask.Tittle}</div><br/>
        <div><b>Task_Description:</b> {props.currentTask.Description}</div><br/>
        <div><b>Image:</b><img src={props.currentTask.Image} style={{ width: '100px', height: '100px' }} /></div><br/>
        <div><b>Task_Suburb:</b> {props.currentTask.Suburb}</div><br/>
        <div><b>Due_Date: </b>{props.currentTask.Date}</div><br/>
        <div><b>Payment_Type:</b> {props.currentTask.Payment_type}</div><br/>
        <div><b>Budget: $</b>{props.currentTask.Budget}</div>
        

      </div>
    </div>
  )
}
function TaskList(props) {
  
  const [tableList, setTableList] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  

  useEffect(() => {
    axios.get('http://localhost:8000/task').then(response => {
      console.log(response);
      if (response.status === 200) {
        setTableList(response.data)
      }
    })
  }, []);

  

  // delete data
  const deleteRow = (id) => {
    axios.post('http://localhost:8000/delete_task', { id }).then(response => {
      if (response.status === 200) {
        //alert(response.data.message);
        if (response.data.code === 0) {
          window.location.href = '/';
        }
      }
    })
  }

  const detailsRow = (item) => {
    setCurrentTask(item);
    setIsShowModal(true);
  }

  const closeModal = () => {
    setIsShowModal(false);
  }

  return (
    <div className="task-list">
      <table className="task-table" cellSpacing="0">
        <thead>
          <tr>
            <th>Task-Type</th>
            <th>Task_Tittle</th>
            <th>Task_Description</th>
            <th>Image</th>
            <th>Task_Suburb</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {
            tableList.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{item.Task_type}</th>
                  <th>{item.Tittle}</th>
                  <th>{item.Description}</th>
                  <th>
                    <img src={item.Image} style={{ width: '100px', height: '100px' }} />
                  </th>
                  <th>{item.Suburb}</th>
                  <th>
                    <button onClick={() => detailsRow(item)}>details</button>
                    <button onClick={() => deleteRow(item._id)}>delete</button>
                  </th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {
        isShowModal ? <FindTasks currentTask={currentTask} closeModal={closeModal} /> : null
      }

    </div>
  )
}
export default TaskList;
