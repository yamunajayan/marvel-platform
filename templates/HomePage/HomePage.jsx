import { useState } from "react";

import { Search } from "@mui/icons-material";
import { Box, Grid, TextField, Typography, Select } from "@mui/material";
import Image from "next/image";

import TabButton from "@/components/TabButton";
import ToolsButton from "@/components/ToolsButton";

import Star from "@/assets/svg/Star_3.svg";
import ImageURLs from "@/assets/urls";

import styles from "./styles";

import disableFilters from "@/libs/constants/disableFilters";
import { ToolsListingContainer } from "@/tools";

const TABS = ["All", "Questions", "Planning", "Feedback"];
const TOOLS = [
  "All",
  "New",
  "Planning",
  "Assessment",
  "Assignments",
  "Writing",
  "Study",
];

const HomePage = (props) => {
  const { data: unsortedData, loading } = props;
  const data = [...(unsortedData || [])].sort((a, b) => a.id - b.id);

  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const renderWelcomeBanner = () => {
    return (
      <Grid {...styles.bannerGridProps}>
        <Image
          src={ImageURLs.WelcomeBannerImg}
          alt="welcome_banner_img"
          {...styles.image1Props}
        />
        <Box {...styles.star1Props}>
          <Star />
        </Box>
        <Box {...styles.star2Props}>
          <Star />
        </Box>

        <Grid>
          <Typography {...styles.titleProps}>
            Hello! Welcome to Marvel AI Tools. 👋
          </Typography>
          <Typography {...styles.subtitleProps}>
            Made for{" "}
            <Typography {...styles.highlightTextProps}>educators. </Typography>
            Hello! I&apos;m Marvel AI, your AI teaching assistant. We are here
            to support you on your journey as a <b>teacher</b>, <b>mentor</b>,
            and <b>more</b>!
          </Typography>
        </Grid>

        <Image
          src={ImageURLs.CapsulesImg}
          alt="capsules_img"
          {...styles.image2Props}
        />
        <Box {...styles.star3Props}>
          <Star />
        </Box>
      </Grid>
    );
  };

  const renderFilters = () => {
    return (
      <Grid {...styles.filtersProps}>
        <Grid {...styles.tabsGrid}>
          {TABS.map((tab) => (
            <TabButton
              text={tab}
              isActive={currentTab === tab}
              setActive={setCurrentTab}
              key={tab}
            />
          ))}
        </Grid>

        <TextField {...styles.inputProps(<Search />)} />
      </Grid>
    );
  };

  const renderTools = () => {
    return (
      <Grid {...styles.toolProps}>
        <Grid {...styles.toolsSearchGrid}>
          <TextField {...styles.inputProps(<Search />)} />
          <TextField {...styles.inputProps(<Search />)} />
        </Grid>

        <Grid {...styles.tabsGrid}>
          {TOOLS.map((tool) => (
            <ToolsButton
              text={tool}
              isActive={currentTab === tool}
              setActive={setCurrentTab}
              key={tool}
            />
          ))}
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      {renderWelcomeBanner()}
      {!disableFilters && renderFilters()} {renderTools()}
      <ToolsListingContainer
        data={data}
        loading={loading}
        category="Marvel Tools"
      />
    </Grid>
  );
};

export default HomePage;
