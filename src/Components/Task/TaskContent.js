import { useContext, useEffect, useState } from "react";
import Card from "../UI/Card";
import GeneralContext from "../Context/general-context";

function TaskContent(props) {
  const ctx = useContext(GeneralContext);
  const [last, setLast] = useState("week");

  useEffect(() => {
    if (ctx.timeZone === "daily") {
      setLast("day");
    } else if (ctx.timeZone === "weekly") {
      setLast("week");
    } else {
      setLast("month");
    }
  }, [ctx.timeZone]);

  return (
    <Card className="task-content">
      <div className="task-content__titleDiv">
        <p className="task-content__title">{props.title}</p>
        <svg
          className="task-content__action"
          width="21"
          height="5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            fill="#BBC0FF"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="task-content__hoursDiv">
        <h1 className="task-content__cHours">{props.currentHours}hrs</h1>
        <p className="task-content__pHours">
          Last {last} - {props.prevHours}hrs
        </p>
      </div>
    </Card>
  );
}

export default TaskContent;
