import {
  Fade,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useSelector } from "react-redux";

import styles from "./styles";

/**
 * Displays the response from the Presentation Generator tool in a table format.
nput Page for generating a presentation outline.
 *
 * Features:
 * - Text Area: Users enter context (e.g., "World War II overview").
 * - Dropdowns: Select number of slides (5, 10, 15, 20) & instructional level 
 *   (Elementary, High School, University).
 * - Button: "Generate Outline" triggers a mock function returning sample slides.
 *
 */
const PresentationGeneratorResponse = () => {
  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>{<h1>Hello</h1>}</Grid>
    </Fade>
  );
};

export default PresentationGeneratorResponse;
