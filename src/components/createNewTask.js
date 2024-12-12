import axios from "axios";
import { useState } from "react";

const CreateTask = () => {

    const [taskName, setName] = useState('');
    const [taskDetails, setDetails] = useState('');
    const [taskDeadline, setDeadline] = useState('');

    const submit = (x) =>{
        x.preventDefault();
        const task = {taskName, taskDetails, taskDeadline};
        console.log(task);
    }

    return(
        <div>
            <h1>CREATE TASK</h1>
            <form onSubmit={submit}>
                <div>
                    <label>Enter Task Name:</label>
                    <input type="text" placeholder="Enter Task Name" onChange={(x)=>{setName(x.target.value)}}/>
                </div>

                <div>
                    <label>Enter Task Details:</label>
                    <input type="text" placeholder="Enter Task Details" onChange={(x)=>{setDetails(x.target.value)}}/>
                </div>
                
                <div>
                    <label>Enter Task Deadline:</label>
                    <input type="date" onChange={(x)=>{setDeadline(x.target.value)}}/>
                </div>
                
                <div>
                    <input type="submit" value="Set Task" />
                </div>
            </form>
        </div>
    )
}
export default CreateTask;