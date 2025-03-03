import { useState, forwardRef, useRef } from "react";
import { TextFieldElement } from "react-hook-form-mui";
import styles from "./styles";
import { FileUploadOutlined, Close } from "@mui/icons-material";
import { IconButton, Grid, InputAdornment, Chip } from "@mui/material";

/**
 * Generates a reusable textarea component with a required title and an optional description.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.id - The id of the textarea.
 * @param {string} props.error - The error state of this component.
 * @param {string} props.placeholder - The placeholder text for the textarea.
 * @param {string} props.helperText - The helper text for the textarea.
 * @param {string} props.title - The title of the textarea.
 * @param {string} props.borderColor - The border color of the textarea.
 * @param {Object} props.control - The control object from react-hook-form.
 * @param {Object} props.extraInputProps - Extra props for the textarea.
 * @param {Object} props.extraInputLabelProps - Extra props for the label.
 *
 * @return {JSX.Element} - The rendered textarea component.
 */
const PrimaryTextArea = forwardRef((props, ref) => {
  const {
    id,
    error,
    placeholder,
    title,
    helperText,
    isDescription,
    description,
    borderColor,
    extraInputProps,
    extraInputLabelProps,
    ...otherProps
  } = props;

  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const TextAreaConfig = {
    id,
    label: title,
    fullWidth: true,
    multiline: true,
    rows: 8, // Adjust the number of rows as needed
    helperText,
    InputLabelProps: styles.inputLabelProps(error, extraInputLabelProps),
    InputProps: {
      ...styles.inputProps(error, extraInputProps),
      endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick={handleFileUpload}>
            <FileUploadOutlined />
          </IconButton>
        </InputAdornment>
      ),
    },
    FormHelperTextProps: styles.helperTextProps(isDescription, error),
    autoComplete: "off",
    placeholder,
  };

  return (
    <Grid container sx={{ width: "100%" }}>
      {/* TextArea */}
      <TextFieldElement inputRef={ref} {...TextAreaConfig} {...otherProps} />

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Show uploaded file with remove option */}
      {uploadedFile && (
        <Grid item sx={{ marginTop: "8px" }}>
          <Chip
            label={uploadedFile}
            onDelete={removeFile}
            sx={{ backgroundColor: "#444", color: "#fff", fontWeight: "bold" }}
            icon={<FileUploadOutlined />}
            deleteIcon={<Close />}
          />
        </Grid>
      )}
    </Grid>
  );
});

export default PrimaryTextArea;
