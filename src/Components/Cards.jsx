import React, { useState } from "react";
import { Grid, Pagination } from "@mui/material";
import Card from "./Card";

const Cards = ({ teachers }) => {
  const [page, setPage] = useState(1);
  const cardsPerPage = 5;
  const totalPages = Math.ceil(teachers.length / cardsPerPage);

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
            <Card teacher={teacher} />
          </Grid>
        ))}
      </Grid>
      <Pagination count={totalPages} page={page} onChange={handleChangePage} />
    </div>
  );
};

export default Cards;
