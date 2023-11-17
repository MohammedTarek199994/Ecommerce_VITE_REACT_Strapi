import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const Links = ({ title }) => {
  return (
    <Box
      //   className="border"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        zIndex: 6,
        // p: 1,
        ":hover .show-when-hover": {
          display: "block",
        },
        ":hover": {
          cursor: "pointer",
        },
      }}>
      <Typography variant="body1"> {title} </Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translate(-50%)",
          minWidth: "170px",
          display: "none",
        }}>
        <Paper sx={{ mt: 3 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  position: "relative",
                  ":hover .sub-link": {
                    display: "block",
                  },
                }}
                disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Products"
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>
                <Box
                  className="sub-link"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "100%",
                    display: "none",
                  }}>
                  <Paper sx={{ ml: 1, minWidth: "150px" }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton sx={{ m: 0, p: 0 }}>
                            <ListItemText
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 400,
                                  ml: 1,
                                },
                              }}
                              primary="Product 1"
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ p: 0, m: 0 }}
                            component="a"
                            href="#simple-list">
                            <ListItemText
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 400,
                                  ml: 1,
                                },
                              }}
                              primary="Product 2"
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
