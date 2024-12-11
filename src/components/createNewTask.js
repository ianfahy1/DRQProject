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
                <label>Enter Task Name</label>
                <input type="text" value={taskName} onChange={(x)=>{setName(x.target.value)}}/>
            </form>
        </div>
    )
}
export default CreateTask;