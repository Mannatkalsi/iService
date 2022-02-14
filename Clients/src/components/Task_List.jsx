import React,{useState, useContext} from 'react'
import Task from './Task'
import TaskModal from './TaskModal'
import { format } from 'date-fns';



function TaskList (props){
    const { searchTerm } = useContext(props.ContextContainer);
    // modal handling
    const [show, setShow] = useState(false);
    //const [index, setIndex] = useState(0);
    const [modalData, setModalData] = useState();

    const handleClose = () => setShow(false);
    function handleShow(id){
        // need to use id not index, so need to pass in id then return
        let tmpData = props.data.filter(function (task) {
            return task._id === id;
        });
        setModalData(tmpData);

        //console.log('id called: '+JSON.stringify(tmpData));
        //setIndex(index);
        setShow(true);
    };
    // end modal handling

    if(typeof props.data === 'undefined'||props.data.length === 0) return <div></div>;
    let tmpData = props.data;

    const filteredTasks = tmpData.filter((task)=>{

        
        if(searchTerm.criteria==='Tittle'){
            return task.Tittle.toLowerCase().includes(searchTerm.term.toLowerCase()); // filter based on title
        }
        else if(searchTerm.criteria==='Suburb'){
            return task.Suburb
        }
        else{
            console.log('Date');
            let searchDate = new Date(searchTerm.term);
            if(!searchTerm.term)
                searchDate = new Date();
            
            let taskDate = new Date(task.Date);

            return taskDate.getTime() >= searchDate.getTime() 
        }        
    })
        
  
    return <div className='row Task'>
        {filteredTasks.map((task, index) => 
            <Task 
                key = {task._id}
                id = {task._id}
                Task_type = {task.Task_type}
                Tittle = {task.Tittle}
                Description = {task.Description}
                Date = {format(new Date(task.Date), 'dd/MM/yyyy')}
                Suburb = {task.Suburb}
                handleShow = {handleShow}
                handleDelete = {props.handleDelete}
                index = {index}
            />
        )}
        <TaskModal handleShow = {handleShow}  handleClose = {handleClose} show={show} data={modalData} />  
    </div>
}

export default TaskList