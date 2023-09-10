import Card from "../UI/Card"
import TaskBody from "./TaskBody"
import TaskContent from "./TaskContent"

function Task(props) {
  // console.log(props);
  
  return (
    <Card className="task">
      <TaskBody color={props.color} icon={props.icon}/>
      <TaskContent title={props.title} currentHours={props.currentHours} prevHours={props.prevHours}/>
    </Card>
  )
}

export default Task