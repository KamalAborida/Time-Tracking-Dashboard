import Card from '../UI/Card'

function TaskBody(props) {
  
  return (
    <Card className={`card-${props.color} task-body`}>
      <img className='task-body__icon' src={props.icon}></img>
      {/* {props.icon} */}
      {/* <p>Hello</p> */}
    </Card>
  )
}

export default TaskBody