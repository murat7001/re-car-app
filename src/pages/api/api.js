import axios from "axios";

export const fetchCars = async () => {
    const response = await axios.get( "http://localhost:3001/vehicles");
    return response.data;
  };