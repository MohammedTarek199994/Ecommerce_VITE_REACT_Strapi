import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Rating from "@mui/material/Rating";

import Dialog from "@mui/material/Dialog";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";

const allProducts = "/products?populate=*";
const menProducts = "/products?populate=*&filters[productCategory][$eq]=men";
const womenProducts =
  "/products?populate=*&filters[productCategory][$eq]=women";

function Main() {
  const [alignment, setAlignment] = useState(allProducts);
  const [FetchData, setFetchData] = useState(allProducts);
  const [selectedProduct, setSelectedProduct] = useState({});
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      setFetchData(newAlignment);
    }
  };

  const theme = useTheme();

  // Dialog ...
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // http://localhost:1337/api/products
  const [data, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Accessing API_URL
        const response = await fetch(
          // @ts-ignore
          `${import.meta.env.VITE_BASE_URL}${FetchData}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [FetchData]);
  // Display different content based on loading state or error
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoading) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          flexDirection={"row"}
          // justifyContent={"space-between"}
          sx={{
            justifyContent: { xs: "center", md: "space-between" },
          }}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={3}>
          <Box>
            <Typography variant="h6"> Selected Products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233,69,96,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
            color="error"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment">
            <ToggleButton
              sx={{
                color: theme.palette.text.primary,
              }}
              className="myButton"
              value={allProducts}
              aria-label="left aligned">
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
              className="myButton"
              value={menProducts}
              aria-label="centered">
              Men Category
            </ToggleButton>
            <ToggleButton
              sx={{
                color: theme.palette.text.primary,
              }}
              className="myButton"
              value={womenProducts}
              aria-label="right aligned">
              Women Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={{
              xs: "center",
              md: "flex-start",
            }}
            textAlign="center"
            gap={2}>
            {data.map((item) => {
              return (
                <Card
                  key={item.id}
                  sx={{
                    maxWidth: 333,
                    mt: 6,
                    "&:hover .MuiCardMedia-root": {
                      transition: "0.35s",
                      scale: "1.05",
                      rotate: "0.5deg",
                    },
                  }}>
                  <CardMedia
                    sx={{ height: 277 }}
                    image={item.attributes.productImage.data[0].attributes.url}
                    title="green iguana"
                  />
                  <CardContent>
                    <Stack
                      flexDirection={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.attributes.productTitle}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.attributes.productPrice}
                      </Typography>
                    </Stack>

                    <Typography variant="body2" color="text.secondary">
                      {item.attributes.productDescription}
                    </Typography>
                  </CardContent>

                  <CardActions
                    sx={{
                      justifyContent: "space-between",
                    }}>
                    <Button
                      sx={{
                        textTransform: "capitalize",
                      }}
                      onClick={() => {
                        handleClickOpen();
                        setSelectedProduct(item);
                      }}
                      size="large">
                      <ShoppingCartOutlinedIcon
                        sx={{ mr: 1 }}
                        fontSize="small"
                      />
                      Add To Cart
                    </Button>
                    <Rating
                      name="read-only"
                      value={item.attributes.productRating}
                      precision={0.5}
                      readOnly
                    />
                  </CardActions>
                </Card>
              );
            })}
          </Stack>
        </Stack>
        <Dialog
          sx={{
            ".MuiPaper-root": {
              minWidth: {
                xs: "100%",
                md: 800,
              },
              minHeight: {
                xs: 350,
              },
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <IconButton
            sx={{
              position: "absolute",
              top: 5,
              right: 10,
              "&:hover": {
                color: "red",
                transition: "transform 0.3s ease",
                transform: "rotate(180deg)",
              },
            }}
            onClick={handleClose}>
            <Close />
          </IconButton>
          <ProductDetails product={selectedProduct} />
        </Dialog>
      </Container>
    );
  }
}

export default Main;
