import { Button, Grid } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GifBoxIcon from "@mui/icons-material/GifBox";
import { Routes, Route, Link } from "react-router-dom";
import "../style.css";
function TagComponent() {
  // const isGif = true;
  return (
    <div className="mainDiv">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="tagDiv">
            <PersonAddAlt1Icon />
            Tag Friends
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="tagDiv">
            <LocationOnIcon />
            Check In
          </div>
        </Grid>
        <Grid item xs={6}>
          <Link exact to="/gif">
            <div className="tagDiv">
              <GifBoxIcon />
            </div>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link exact to="/tag">
            <div className="tagDiv">
              <CalendarMonthIcon />
              Tag Event
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export { TagComponent };
