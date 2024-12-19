const styles = {
  buttonProps: (isActive) => ({
    sx: {
      height: "34px",
      fontSize: "13px",
      borderRadius: "10px",
      border: `1.63px solid ${isActive ? "#FFF" : "#9D74FF"}`,
      color: "#FFF",
      background: isActive ? "#9D74FF" : "#24272F",
      textTransform: "none",
      fontFamily: "Satoshi Bold",
      fontWeight: "500",
      padding: "6px",
      "&:hover": {
        borderColor: isActive ? "#FFF" : "#9D74FF",
        background: isActive ? "#9D74FF" : "#24272F",
      },
    },
  }),
};

export default styles;
