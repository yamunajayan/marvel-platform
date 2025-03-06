const styles = {
  mainGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    rowGap: 4,
    px: 6,
    py: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    sx: {
      background: "#0F0E14",
      border: "2px solid #1C1233",
      color: "white",
    },
  },
  titleGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleProps: {
    fontFamily: "Satoshi Bold",
    fontSize: { laptop: "20px", desktop: "24px" },
  },
  questionsGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: "flex-start",
    alignItems: "center",
    rowGap: 1.5,
  },
  questionGridProps: {
    container: true,
    item: true,
    gap: 1.5,
    mobileSmall: 12,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  questionTitleProps: {
    fontFamily: "Satoshi Bold",
    fontSize: { laptop: "18px", desktop: "20px" },
  },
  choiceProps: {
    fontFamily: "Satoshi Regular",
    fontSize: { laptop: "18px", desktop: "20px" },
  },
  actionButtonGridProps: {
    alignSelf: "end",
  },
  submitButtonProps: {
    color: "purple",
    extraProps: {
      padding: "2px",
      height: { laptop: "42px", desktop: "44px", desktopMedium: "47px" },
    },
    extraButtonProps: {
      fontFamily: "Satoshi Medium",
      fontSize: { laptop: "14px", desktop: "15px", desktopMedium: "16px" },
      px: { laptop: 5, desktop: 6, desktopMedium: 7 },
    },
  },
};

export default styles;
