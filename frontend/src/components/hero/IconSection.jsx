import {
  Container,
  Stack,
  Box,
  Typography,
  useTheme,
  Divider,
  useMediaQuery,
} from "@mui/material";
// import React from "react";
import {
  ElectricBolt,
  CreditScoreOutlined,
  WorkspacePremiumOutlined,
  AccessAlarmOutlined,
} from "@mui/icons-material";
function IconSection() {
  const theme = useTheme();
  return (
    <Container sx={{mt:3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}>
      <Stack
        // className="border"
        direction={"row"}
        alignItems={"center"}
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mt: 2,
        }}>
        <MyBox
          icon={<ElectricBolt fontSize="large" />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <MyBox
          icon={<CreditScoreOutlined fontSize="large" />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined fontSize="large" />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyBox
          icon={<AccessAlarmOutlined fontSize="large" />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
}

// eslint-disable-next-line react/prop-types
function MyBox({ icon, title, subTitle }) {
  const theme = useTheme();
  return (
    <Box
      // className="border"

      sx={{
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        width: 250,
        gap: 3,
        // mt:2,
        py: 1.6,
        px: 1,
      }}>
      {icon}
      <Box sx={{}}>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
          variant="body1">
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default IconSection;
