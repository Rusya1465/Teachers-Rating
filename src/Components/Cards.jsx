import React, { useState, useContext } from "react";
import { Grid, Pagination } from "@mui/material";
import Card from "./Card";
import { TeachersContext } from "../Context/TeachersContext";
import "../styles/Cards.css";

const Cards = () => {
  const useTeachers = () => {
    const { teachersList, updateTeacherRating } = useContext(TeachersContext);
    return { teachers: teachersList, updateTeacherRating };
  };
  const [page, setPage] = useState(1);
  const cardsPerPage = 4;
  const { teachers, updateTeacherRating } = useTeachers();

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const cardsToShow = teachers.slice(startIndex, endIndex);

  return (
    <div>
      <Grid container spacing={3}>
        {cardsToShow.map((teacher) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={teacher.id}>
            <Card
              id={teacher.id}
              photoUrl={teacher.photoUrl}
              name={teacher.name}
              rating={teacher.rating}
              updateRating={updateTeacherRating}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(teachers.length / cardsPerPage)}
        page={page}
        onChange={handleChangePage}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
        className="pagination"
      />
    </div>
  );
};

export default Cards;
