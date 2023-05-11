import React, { createContext, useState } from "react";
import photo_1 from "./src/assets/teachers/ermek.jpeg";
import photo_2 from "./src/assets/teachers/guljainar.jpeg";
import photo_3 from "./src/assets/teachers/irshad.jpeg";
import photo_4 from "./src/assets/teachers/nurmuhammed.jpeg";
import photo_5 from "./src/assets/teachers/artur.jpeg";
import photo_6 from "./src/assets/teachers/ruslan.jpeg";
import photo_7 from "./src/assets/teachers/nazima.jpeg";
import photo_8 from "./src/assets/teachers/murray.jpeg";

export const TeachersContext = createContext();

const TeachersContextProvider = (props) => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "John Smith", subject: "Math" },
    { id: 2, name: "Jane Doe", subject: "English" },
    { id: 3, name: "Bob Johnson", subject: "Science" },
    { id: 4, name: "Sara Lee", subject: "Art" },
    { id: 5, name: "Mike Brown", subject: "Physical Education" },
  ]);

  return (
    <TeachersContext.Provider value={{ teachers }}>
      {props.children}
    </TeachersContext.Provider>
  );
};

export default TeachersContextProvider;
