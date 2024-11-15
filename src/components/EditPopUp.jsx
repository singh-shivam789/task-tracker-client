import axios from 'axios';
import React from 'react'

export default function EditPopUp({ setTaskClicked, taskClicked, setTask }) {
    const taskEditHandler = async (e) => {
        try {
            e.preventDefault();
            const form = new FormData(e.target);
            const newTask = form.get("task");
            await axios.put(`http://localhost:3000/task/${taskClicked.data.id}`, { data: newTask });
            setTask((prev) => {
                let temp = prev;
                temp.forEach((task) => {
                    if (task.id == taskClicked.data.id) {
                        task.task = newTask
                    }
                });
                return temp;
            })

            setTaskClicked((prev) => {
                return {
                    ...prev,
                    state: !prev.state
                }
            })

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='edit-pop-up'>
            <form onSubmit={taskEditHandler} className='edit-form'>
                <input maxLength={100} minLength={5} required className='edit-form-input' type="text" name="task" placeholder='Add Task Description' />
                <button type="submit" style={{ cursor: "pointer", backgroundColor: "transparent" }}>
                    <img src="/checked.png" alt="" />
                </button>
                <button onClick={() => {
                    setTaskClicked((prev) => {
                        return {
                            ...prev,
                            state: !prev.state
                        }
                    })
                }} style={{ cursor: "pointer", backgroundColor: "transparent" }} type="reset">
                    <img src="/left-arrow.png" alt="" />
                </button>
            </form>
        </div>
    )
}
