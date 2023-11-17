// import React from 'react'
import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
function ScrollToTop() {
  const trigger = useScrollTrigger({
    // Number of pixels needed to scroll to toggle `trigger` to `true`.
    threshold: 200,
  });
  return (
    <Zoom in={trigger}>
      <Fab
        sx={{
          position: "fixed",
          bottom: 52,
          right: 33,
        }}
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        onClick={() => {
          window.scrollTo(0, 0);
        }}>
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTop;
