import { forwardRef } from "react";
import { TextFieldElement } from "react-hook-form-mui";
import styles from "./styles";

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

  const TextAreaConfig = {
    id,
    label: title,
    fullWidth: true,
    multiline: true,
    rows: 8, // Adjust the number of rows as needed
    helperText,
    InputLabelProps: styles.inputLabelProps(error, extraInputLabelProps),
    InputProps: styles.inputProps(error, extraInputProps),
    FormHelperTextProps: styles.helperTextProps(isDescription, error),
    autoComplete: "off",
    placeholder,
  };

  return (
    <TextFieldElement inputRef={ref} {...TextAreaConfig} {...otherProps} />
  );
});

export default PrimaryTextArea;
