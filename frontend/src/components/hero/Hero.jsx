// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import required modules
import { Pagination } from "swiper/modules";
import "./slider.css";

// ----------------------------------
const mySlider = [
  { text: "MEN", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner-25.jpg" },
];
function Hero() {
  const theme = useTheme();
  return (
    <Container
      // disableGutters
      // className="border"
      sx={{
        mt: 2.5,
        display: "flex",
        gap: 2,
        alignItems: "center",
        p: 2,
      }}>
      <Swiper
   
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        {mySlider.map((item) => {
          return (
            <SwiperSlide key={item.link} className="swiper-slide">
              {/* {useMediaQuery("(min-width:900px)") && ( */}
              <img src={item.link}></img>
              {/* )} */}

              <Box
                // className="border"
                sx={{
                  [theme.breakpoints.up("sm")]: {
                    position: "absolute",
                    left: "10%",
                    textAlign: "left",
                  },
                  [theme.breakpoints.down("sm")]: {
                    pt: 4,
                    pb: 6,
                  },
                }}>
                <Typography
                  sx={{
                    [theme.breakpoints.down("md")]: {
                      fontSize: "25px",
                    },
                    [theme.breakpoints.up("md")]: {
                      fontSize: "30px",
                    },
                  }}
                  variant="h4"
                  color="#333"
                  fontWeight={200}>
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography variant="h3" color="#333" fontWeight="bold">
                  {item.text}
                </Typography>
                <Stack
                  sx={{
                    [theme.breakpoints.down("sm")]: {
                      justifyContent: "center",
                    },
                  }}
                  direction={"row"}
                  alignItems={"center"}>
                  <Typography
                    variant="h5"
                    color="#333"
                    mr={1}
                    fontWeight="bold">
                    SALE UP TO
                  </Typography>
                  <Typography variant="h5" color="#D23F57" fontWeight="bold">
                    30% OFF
                  </Typography>
                </Stack>
                <Typography
                  variant="h4"
                  color="#333"
                  mt={1}
                  fontSize={14}
                  fontWeight={300}>
                  Get Free Shipping On Order Over $99.00
                </Typography>
                <Button
                  sx={{
                    bgcolor: "#222",
                    color: "#fff",
                    px: 5,
                    py: 1,
                    mt: 2,
                    borderRadius: "1px",
                    boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                    "&:hover": {
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                    },
                  }}
                  variant="contained">
                  {" "}
                  SHOP NOW
                </Button>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* ---------------------------- */}
      <Box sx={{ minWidth: "26.3%", display: { xs: "none", md: "block" } }}>
        <Box
          // className="border"
          sx={{ position: "relative" }}>
          {/* 2-1 */}
          <img width={"100%"} src="src\images\banner-17.jpg"></img>
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              left: 25,
              transform: "translateY(-50%)",
            }}>
            <Typography
              variant="caption"
              sx={{ color: "#2b3445", fontSize: "18px" }}>
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2b3445", lineHeight: "16px", mt: 1 }}>
              SUMMER
            </Typography>
            <Typography variant="h6" sx={{ color: "#2b3445" }}>
              SALES 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2b3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": {
                  color: "#d23f57",
                },
              }}
              href="#"
              underline="none">
              SHOP NOW
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
        <Box
          // className="border"
          sx={{ position: "relative" }}>
          {/* 2-2 */}
          <img width={"100%"} src="src\images\banner-16.jpg"></img>
          <Stack
            // className="border"
            sx={{
              position: "absolute",
              left: 25,
              top: "50%",
              transform: "translateY(-50%)",
            }}>
            <Typography
              variant="caption"
              sx={{ color: "#2b3445", fontSize: "18px" }}>
              GAMING 4K
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2b3445", lineHeight: "16px", mt: 1 }}>
              DESKTOPS &
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2b3445", lineHeight: "16px", mt: 1 }}>
              LAPTOPS
            </Typography>

            <Link
              sx={{
                color: "#2b3445",
                display: "flex",
                alignItems: "center",
                gap: "7px",
                transition: "0.2s",
                mt: 1,
                "&:hover": {
                  color: "#d23f57",
                },
              }}
              href="#"
              underline="none">
              SHOP NOW
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;
