import axios from "axios";
import { DataLoading, DataSuccess, DataError } from "./actionType";

export const getData = (url="https://farmers-api-v2.azurewebsites.net/api/bbproducts") => async (dispatch) => {
  try {
    dispatch({ type: DataLoading });
    await axios.get(url).then((res) => {
      dispatch({ type: DataSuccess, payload: res.data });
    });
  } catch (err) {
    dispatch({ type: DataError });
  }
};
