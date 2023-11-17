import { useState } from "react";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { ColorModeContext } from "../../theme";
import { useContext } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
//-----------------------
const options = ["AR", "EN"];
//-----------------------

function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  //--------------------
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //--------------------

  return (
    // dark mod and light mod
    <Box
      sx={{
        bgcolor: "#2B3445",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography
          sx={{
            mx: 2, // 2 = 16px
            p: "3px 10px",
            bgcolor: "#D23F57",
            borderRadius: "12px",
            fontSize: "10px",
            fontWeight: "bold",
            color: "#ffff",
          }}
          variant="body2">
          HOT
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#ffff",
          }}
          variant="body2">
          Free Express Shipping
        </Typography>
        {/* *********************************** */}
        <Box flexGrow={1} />
        {/* *********************************** */}
        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit">
              <LightModeOutlined sx={{color:"#fff"}} fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit">
              <DarkModeOutlined sx={{color:"#fff"}} fontSize="small" />
            </IconButton>
          )}
        </div>
        {/* *********************************** */}
        <List component="nav" aria-label="Device settings">
          <ListItem
            // button
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}>
            <ListItemText
              sx={{
                ".MuiTypography-root": {
                  fontSize: "10px",
                  color: "#ffff",
                },
              }}
              secondary={options[selectedIndex]}
            />
            <ExpandMore
              sx={{
                fontSize: "16px",
              }}
            />{" "}
            {/* Expand Icon*/}
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}>
          {options.map((option, index) => (
            <MenuItem
              sx={{
                fontSize: "11px",
                p: "3px 10px",
                minHeight: "10px",
              }}
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
        {/* *********************************** */}
        <IconButton>
          <FacebookIcon
            sx={{
              fontSize: "16px",
              color: "#ffff",
            }}
          />
        </IconButton>
        {/* *********************************** */}
        <IconButton>
          <TwitterIcon
            sx={{
              fontSize: "16px",
              color: "#ffff",
            }}
          />
        </IconButton>
        {/* *********************************** */}
        <IconButton>
          <InstagramIcon
            sx={{
              fontSize: "16px",
              color: "#ffff",
            }}
          />
        </IconButton>
        {/* *********************************** */}
      </Stack>
    </Box>
  );
}

export default Header1;
