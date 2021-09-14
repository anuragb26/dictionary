import React from "react";
import { MenuItem, TextField } from "@material-ui/core";
import categories from "../../data/category";
import "./Header.css";

const Header = ({ category, setCategory, word, setWord }) => {
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <TextField
          className="search"
          label="Search a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <TextField
          className="select"
          select
          label="Language"
          value={category}
          onChange={(e) => handleChange(e.target.value)}
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Header;
