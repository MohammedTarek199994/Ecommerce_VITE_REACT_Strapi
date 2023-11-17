import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
  ExpandMore,
} from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Links from "./Links";

function Header3() {
  const Accordion_List = [
    { mainLink: "Home", subLink: ["Link01", "Link02", "Link03"] },
    { mainLink: "Mega Menu", subLink: ["Link01", "Link02", "Link03"] },
    { mainLink: "Full Screen Menu", subLink: ["Link01", "Link02", "Link03"] },
    { mainLink: "Pages", subLink: ["Link01", "Link02", "Link03"] },
    { mainLink: "User Account", subLink: ["Link01", "Link02", "Link03"] },
    { mainLink: "Vendor Account", subLink: ["Link01", "Link02", "Link03"] },
  ];

  //-----------
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //-----------
  const theme = useTheme();
  //------------
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      // className="border"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}>
      <Box>
        <Button
          // className="border"
          sx={{
            width: "222px",
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}>
          <WindowIcon />

          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}>
            Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          sx={{
            ".MuiPaper-root": {
              width: "222px",
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              // color: theme.palette.text.secondary,
            },
          }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}>
          <MenuItem>
            <ListItemIcon>
              {" "}
              <ElectricBikeOutlined />{" "}
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      {/* --------------------- */}
      {useMediaQuery("(min-width:1200px)") && (
        <Stack
          gap={5}
          direction={"row"}
          textAlign={"center"}
          justifyContent={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"Pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        
        </Stack>
      )}

      {/* --------------------- */}
      {/* Display Icon only when screen width less than 1000px */}
      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}
      {/* --------------------- */}
      <Drawer
        sx={{
          ".MuiPaper-root.MuiDrawer-paper": { height: "100%" },
        }}
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}>
        <Box
          // className="border"
          sx={{
            position: "relative",
            mx: "auto",
            mt: "48px",
            pt: 8,
            width: "450px",
          }}>
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              "&:hover": {
                color: "red",
                transition: "transform 0.3s ease",
                transform: "rotate(180deg)",
              },
            }}>
            <Close onClick={toggleDrawer("top", false)} />
          </IconButton>

          {Accordion_List.map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                // @ts-ignore
                elevation={"0"}
                sx={{ bgcolor: "initial" }}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}

export default Header3;
