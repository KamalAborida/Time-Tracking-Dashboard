import React from "react";
import data from '../../data'

const GeneralContext = React.createContext({
  timeZone: "daily",   // default initial value
  data: [...data],
  setLast: () => {}
})

export default GeneralContext