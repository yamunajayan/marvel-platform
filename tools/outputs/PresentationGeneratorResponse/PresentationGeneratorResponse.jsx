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
  useTheme,
} from "@mui/material";

import { TextFieldElement } from "react-hook-form-mui";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import GradientOutlinedButton from "@/components/GradientOutlinedButton";

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
  const { response } = useSelector((state) => state.tools);
  const { control } = useForm();
  const theme = useTheme();
  const communicatorLoading = false;

  const [subtitles, setSubtitles] = useState(
    response?.outlineMockData?.subtitles || []
  );

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;
    const newSubtitles = [...subtitles]; // Using local state
    const [removed] = newSubtitles.splice(source.index, 1);
    newSubtitles.splice(destination.index, 0, removed);

    setSubtitles(newSubtitles); // Update local state
  };

  const renderActionButtons = () => (
    <Grid mt={4} {...styles.actionButtonGridProps}>
      <GradientOutlinedButton
        id="submitButton"
        bgcolor={theme.palette.Common.White["100p"]}
        text="Generate Presentation"
        textColor={theme.palette.Common.White["100p"]}
        loading={communicatorLoading}
        onHoverTextColor={theme.palette.Background.purple}
        type="submit"
        inverted
        {...styles.submitButtonProps}
      />
    </Grid>
  );
  console.log("response", response);
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Fade in>
        <Grid {...styles.mainGridProps}>
          <form style={{ width: "100%" }}>
            <label>Presentation Details</label>
            <TextFieldElement
              name="context"
              control={control}
              label={response?.outlineMockData?.title}
              fullWidth
            />
            {/* Subtitles as separate input elements */}

            <Grid style={{ marginTop: "20px" }}>
              {/* {response?.outlineMockData?.subtitles?.map((subtitle, index) => (
                <TextFieldElement
                  key={index}
                  name={`subtitle-${index}`} // Dynamic name for each subtitle input
                  control={control}
                  placeholder={subtitle}
                  fullWidth
                />
              ))} */}
              <Droppable droppableId="subtitles">
                {(provided) => (
                  <Grid
                    container
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    sx={{ width: "100%", marginTop: "20px" }}
                    style={{ width: "100%", marginTop: "20px" }}
                  >
                    {response?.outlineMockData?.subtitles?.map(
                      (subtitle, index) => (
                        <Draggable
                          key={index}
                          draggableId={index.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <Grid
                              item
                              xs={12}
                              ref={provided.innerRef}
                              {...provided.draggableProps} // Apply this to the Grid itself
                              sx={{ width: "100%", marginTop: "20px" }}
                            >
                              {/* Add a div as the drag handle */}
                              <div
                                {...provided.dragHandleProps}
                                style={{
                                  cursor: "move", // Show the move cursor when hovering over the drag handle
                                  backgroundColor: "black", // Background color to make it visible as the handle
                                  paddingleft: "8px", // Some padding for the handle
                                  fontSize: "8px", // Font size to make it smaller
                                }}
                              >
                                drag
                              </div>

                              {/* The TextFieldElement remains the content */}
                              <TextFieldElement
                                name={`subtitle-${index}`}
                                control={control}
                                placeholder={subtitle}
                                fullWidth
                              />
                            </Grid>
                          )}
                        </Draggable>
                      )
                    )}
                    {provided.placeholder}
                  </Grid>
                )}
              </Droppable>
            </Grid>
          </form>
          {renderActionButtons()}
        </Grid>
      </Fade>
    </DragDropContext>
  );
};

export default PresentationGeneratorResponse;
