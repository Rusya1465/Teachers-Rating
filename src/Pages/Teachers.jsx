import React, { useState } from "react";
import Cards from "../Components/Cards";
import { TextField, Button } from "@mui/material";

const Teachers = ({ teachers }) => {
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filtered = teachers.filter((teacher) => {
      return teacher.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredTeachers(filtered);
  };

  const handleReset = () => {
    setFilteredTeachers(teachers);
    setSearchText("");
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Search"
        value={searchText}
        onChange={handleInputChange}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      <Button variant="contained" color="secondary" onClick={handleReset}>
        Reset
      </Button>
      <Cards teachers={filteredTeachers} />
    </div>
  );
};

export default Teachers;
