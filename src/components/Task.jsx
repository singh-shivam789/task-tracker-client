export default function Task(props) {
  let { id, data, setTask } = props;
  const deleteHandler = async () => {
    fetch(`http://localhost:3000/task/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(resdata => {
      setTask((prev) => {
        let temp = prev.filter((task) => task.id != id)
        return temp;
      })
    })
  }

  const taskClickHandler = () => {
    props.setTaskClicked((prev) => {
      return {
        data: { data: data, id: id },
        state: !prev.state
      }
    })
  }

  return (
    <div className='task'>
      <span style={{ display: "flex", alignItems: "center", width: "100%", height: "100%" }}>{data}</span>
      <div style={{ padding: "5px 10px", display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }} >
        <img style={{ cursor: "pointer" }} onClick={taskClickHandler} src="/pencil.png" alt="edit.png" />
        <img style={{ cursor: "pointer" }} onClick={deleteHandler} src="/bin.png" alt="delete.png" />
      </div>
    </div>
  )
}
