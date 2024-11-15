import axios from 'axios'
export default function Header({ setTasks }) {
  const handler = (e) => {
    e.preventDefault();
    const form = e.target;
    const textInput = new FormData(form).get("textInput");
    axios.post("http://localhost:3000/task", {
      data: { task: textInput }
    }).then((res) => {

      setTasks((prev) => {
        return [...prev, { id: res.data.data.id, task: textInput }]
      })
    }).catch((err) => {
      console.log(err);
    })
    form.reset();
  }
  return (
    <div className='header'>
      <form onSubmit={handler}>
        <input maxLength={100} minLength={5} required name="textInput" className='text-input' placeholder={"What do you want to do?"} />
        <button className="add-text-btn" type="submit">Add Task</button>
      </form>
    </div>
  )
}
