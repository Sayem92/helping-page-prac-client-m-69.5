import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Example = () => {

  const [startDate, setStartDate] = useState(new Date());

  return (
  
     <DatePicker className="input input-bordered select input-accent my-3 w-full"  selected={startDate} onChange={(date) => setStartDate(date)} />

  );
};