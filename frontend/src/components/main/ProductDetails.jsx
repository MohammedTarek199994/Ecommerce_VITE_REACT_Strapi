/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// eslint-disable-next-line react/prop-types
const ProductDetails = ({ product }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [alignment, setAlignment] = useState(0);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
        my:{xs: 2 , sm:0}
      }}>
      <Box sx={{ display: "flex" }}>
        <img
          width={"100%"}
          height={"350px"}
          // eslint-disable-next-line react/prop-types
          src={product.attributes.productImage.data[selectedImg].attributes.url}
          alt=""
        />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">{product.attributes.productTitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          {product.attributes.productPrice}
        </Typography>
        <Typography variant="body1">
          {product.attributes.productDescription}
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}>
          {/* {product.attributes.productImage.data[0].attributes.url} */}
          {product.attributes.productImage.data.map((item, index) => {
            return (
              <div key={item.id}>

                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment">
                  <ToggleButton
                    sx={{
                      opacity: "0.5",
                      p: 0,
                      "&.Mui-selected": {
                        opacity: "1",
                      },
                    }}
                    value={index}
                    aria-label="left aligned">
                    <img
                      style={{ borderRadius: 3 }}
                      height={100}
                      width={90}
                      key={item}
                      src={item.attributes.url}
                      alt=""
                      onClick={() => {
                        setAlignment(index);
                        setSelectedImg(index);
                      }}
                    />
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            );
          })}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained">
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
