import React, { createContext, useState } from "react";
import photo_1 from "../assets/teachers/ermek.jpeg";
import photo_2 from "../assets/teachers/guljainar.jpeg";
import photo_3 from "../assets/teachers/irshad.jpeg";
import photo_4 from "../assets/teachers/nurmuhammed.jpeg";
import photo_5 from "../assets/teachers/artur.jpeg";
import photo_6 from "../assets/teachers/ruslan.jpeg";
import photo_7 from "../assets/teachers/nazima.jpeg";
import photo_8 from "../assets/teachers/murray.jpeg";

const initialTeachers = [
  {
    id: 1,
    name: "Ermek Esenaliev",
    photoUrl: photo_1,
    description:
      "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit tempore omnis nemo alias autem eos ullam beatae. Dolore sequi molestias sunt doloremque maxime magni impedit debitis, sint nobis culpa esse similique, ullam animi omnis voluptatibus ducimus blanditiis! Incidunt dolorum, numquam voluptatibus esse atque similique fugiat magni velit, vero ullam beatae?",
    rating: 5,
  },
  {
    id: 2,
    name: "Nurmuhammet Abdyllaev",
    photoUrl: photo_4,
    description:
      "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit tempore omnis nemo alias autem eos ullam beatae. Dolore sequi molestias sunt doloremque maxime magni impedit debitis, sint nobis culpa esse similique, ullam animi omnis voluptatibus ducimus blanditiis! Incidunt dolorum, numquam voluptatibus esse atque similique fugiat magni velit, vero ullam beatae?",
    rating: 1,
  },
  {
    id: 3,
    name: "Guljainar",
    photoUrl: photo_2,
    description:
      "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit tempore omnis nemo alias autem eos ullam beatae. Dolore sequi molestias sunt doloremque maxime magni impedit debitis, sint nobis culpa esse similique, ullam animi omnis voluptatibus ducimus blanditiis! Incidunt dolorum, numquam voluptatibus esse atque similique fugiat magni velit, vero ullam beatae?",
    rating: 5,
  },
  {
    id: 4,
    name: "Irshad",
    photoUrl: photo_3,
    description:
      "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit tempore omnis nemo alias autem eos ullam beatae. Dolore sequi molestias sunt doloremque maxime magni impedit debitis, sint nobis culpa esse similique, ullam animi omnis voluptatibus ducimus blanditiis! Incidunt dolorum, numquam voluptatibus esse atque similique fugiat magni velit, vero ullam beatae?",
    rating: 5,
  },
  {
    id: 5,
    name: "Artur",
    photoUrl: photo_5,
    description:
      "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit tempore omnis nemo alias autem eos ullam beatae. Dolore sequi molestias sunt doloremque maxime magni impedit debitis, sint nobis culpa esse similique, ullam animi omnis voluptatibus ducimus blanditiis! Incidunt dolorum, numquam voluptatibus esse atque similique fugiat magni velit, vero ullam beatae?",
    rating: 5,
  },
  {
    id: 6,
    name: "Ruslan",
    photoUrl: photo_6,
    description:
      "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit tempore omnis nemo alias autem eos ullam beatae. Dolore sequi molestias sunt doloremque maxime magni impedit debitis, sint nobis culpa esse similique, ullam animi omnis voluptatibus ducimus blanditiis! Incidunt dolorum, numquam voluptatibus esse atque similique fugiat magni velit, vero ullam beatae?",
    rating: 5,
  },
  {
    id: 7,
    name: "Nazima",
    photoUrl: photo_7,
    description:
      "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit tempore omnis nemo alias autem eos ullam beatae. Dolore sequi molestias sunt doloremque maxime magni impedit debitis, sint nobis culpa esse similique, ullam animi omnis voluptatibus ducimus blanditiis! Incidunt dolorum, numquam voluptatibus esse atque similique fugiat magni velit, vero ullam beatae?",
    rating: 5,
  },
  {
    id: 8,
    name: "Murray",
    photoUrl: photo_8,
    description:
      "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit tempore omnis nemo alias autem eos ullam beatae. Dolore sequi molestias sunt doloremque maxime magni impedit debitis, sint nobis culpa esse similique, ullam animi omnis voluptatibus ducimus blanditiis! Incidunt dolorum, numquam voluptatibus esse atque similique fugiat magni velit, vero ullam beatae?",
    rating: 5,
  },
];

export const TeachersContext = createContext();

export const TeachersContextProvider = ({ children }) => {
  const [teachersList, setTeachersList] = useState(initialTeachers);

  const updateTeacherRating = (teacherId, newRating) => {
    const updatedTeachers = teachersList.map((teacher) => {
      if (teacher.id === teacherId) {
        return { ...teacher, rating: newRating };
      }
      return teacher;
    });
    setTeachersList(updatedTeachers);
  };

  return (
    <TeachersContext.Provider value={{ teachersList, updateTeacherRating }}>
      {children}
    </TeachersContext.Provider>
  );
};
