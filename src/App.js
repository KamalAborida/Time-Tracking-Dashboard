import "./main.css";
import GeneralContext from "./Components/Context/general-context";
import data from "./data";
import Tasks from "./Components/Task/Tasks";
import User from "./Components/User/User";
import avatar from "./Assets/images/image-jeremy.png"
import { useState } from "react";

function App() {
  const timeOptions = ["daily", "weekly", "monthly"]
  const [timeZone, setTimeZone] = useState(timeOptions[1])
  let name = "Jeremy Robson"

  const changeTimeZone = (e) => {
    setTimeZone(e.target.id)
  }

  return (
    <GeneralContext.Provider value={{timeZone: timeZone, data: data}}>
      <div className="container">
        <User timeZoneHandler={changeTimeZone} avatar={avatar} name={name}/>
        <Tasks/>
      </div>
    </GeneralContext.Provider>
  );
}

export default App;
