import React, { useEffect, useState } from "react";
import { Box, Select, Skeleton } from "@chakra-ui/react";

import { getData } from "../redux/ProductPage/action";
import { useDispatch, useSelector } from "react-redux";
import ProductCardItem from "../components/productCardItem";

import HandleError from "../components/HandleError";
import HandleLoading from "../components/HandleLoading";

const Product = () => {
  const dispatch = useDispatch();
  const [URL, setURL] = useState(
    "https://db-server-india.centralindia.cloudapp.azure.com/FarmersAPI/api/bbproducts"
  );
  const { data, loading, error } = useSelector((store) => store.productReducer);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    dispatch(getData(URL));
  }, [URL]);

  if (loading) {
    return <HandleLoading />;
  }
  if (error) {
    return <HandleError />;
  }
  setTimeout(() => {
    setisLoading(true);
  }, 1500);

  return (
    <>
      <Box
        width={{
          base: "60%",
          lg: "30%",
        }}
        margin="auto"
        marginTop="5"
        display={"flex"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap="5"
      >
        {/* <Select
          onChange={(e) => {
            setURL(e.target.value);
            setisLoading(false);
          }}
        >
          <option value="https://farmers-api.azurewebsites.net/api/bbproducts">
            Sort by Price
          </option>
          <option value="https://farmers-api.azurewebsites.net/api/bbproducts">
            All
          </option>
          <option value="https://farmers-api.azurewebsites.net/api/bbproducts">
            Low to High
          </option>
          <option value="https://farmers-api.azurewebsites.net/api/bbproducts">
            High to Low
          </option>
        </Select> */}
      </Box>
      <Box
        display="grid"
        width="90%"
        margin="auto"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: `repeat(4,1fr)`,
        }}
        gap="20px"
        marginTop="50px"
        marginBottom="50px"
      >
        {data.map((item, index) => (
          <Skeleton isLoaded={isLoading} key={index}>
            <ProductCardItem
              index={index}
              img={item.img}
              title={item.title}
              body={item.body}
              price={item.price}
              rating={item.rating}
              category={item.category}
              quantity={item.quantity}
              key={index}
            />
          </Skeleton>
        ))}
      </Box>
    </>
  );
};

export default Product;
