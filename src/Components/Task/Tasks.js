import { useContext, useState } from "react";
import GeneralContext from "../Context/general-context";
import Task from "./Task";

import workIcon from '../../Assets/images/icon-work.svg'
import playIcon from '../../Assets/images/icon-play.svg'
import studyIcon from '../../Assets/images/icon-study.svg'
import exerciseIcon from '../../Assets/images/icon-exercise.svg'
import socialIcon from '../../Assets/images/icon-social.svg'
import selfCareIcon from '../../Assets/images/icon-self-care.svg'

function Tasks(props) {
  const ctx = useContext(GeneralContext);
  let timeZone = ctx.timeZone;

  const taskColorList = new Map();
  taskColorList.set("Work", "orange");
  taskColorList.set("Play", "blue");
  taskColorList.set("Study", "red");
  taskColorList.set("Exercise", "green");
  taskColorList.set("Social", "violet");
  taskColorList.set("Self Care", "yellow");

  const taskIconsList = new Map();
  taskIconsList.set("Work", workIcon);
  taskIconsList.set("Play", playIcon);
  taskIconsList.set("Study", studyIcon);
  taskIconsList.set("Exercise", exerciseIcon);
  taskIconsList.set("Social", socialIcon);
  taskIconsList.set("Self Care", selfCareIcon);

  const newData = ctx.data.map((property) => {
    return { ...property, color: taskColorList.get(property.title), icon: taskIconsList.get(property.title)};
  });

  // console.log(newData);

  const tasksList = newData.map((property) => {
    // console.log(property.timeframes[timeZone]);
    return (
      <Task
        color={property.color}
        title={property.title}
        currentHours={property.timeframes[timeZone].current}
        prevHours={property.timeframes[timeZone].previous}
        icon={property.icon}
        key={Math.random()}
      />
    );
  });

  // console.log(tasksList[0]);
  return <div className="tasks">{tasksList}</div>;
}

export default Tasks;
