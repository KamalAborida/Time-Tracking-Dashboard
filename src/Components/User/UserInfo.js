import Card from "../UI/Card"

function UserInfo(props) {
  return (
    <Card className="user-info">
      <img className="user-info__avatar avatar" src={props.avatar} alt="Avatar"/>
      <div className="user-info__nameDiv">
        <p>Report for</p>
        <h1 className="user-info__nameDiv__name">
          {props.name}
        </h1>
      </div>
    </Card>
  )
}

export default UserInfo