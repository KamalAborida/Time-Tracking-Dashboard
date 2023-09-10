import Card from "../UI/Card"
import UserInfo from "./UserInfo"

function User(props) {
  return (
    <Card className="user">
      <UserInfo avatar={props.avatar} name={props.name}/>
      <div className="user__timeZones">
        <p id="daily" onClick={props.timeZoneHandler}>Daily</p>
        <p id="weekly" onClick={props.timeZoneHandler}>Weekly</p>
        <p id="monthly" onClick={props.timeZoneHandler}>Monthly</p>
      </div>
    </Card>
  )
}

export default User