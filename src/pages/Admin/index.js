import { Stack } from "@mui/material";
import ProtectedAdmin from "./ProtectedAdmin";
import SimpleCharts from "@/components/SimpleChart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchReservations } from "@/store/ReservationsSlice/reservationsSlice";
import { fetchCars } from "@/store/CarSlice/carSlice";
import { fetchAllUsers } from "@/store/AuthSlice/authSlice";


const AdminPage = () => {
    const { reservations } = useSelector((state) => state.reservations);
    const { cars } = useSelector((state) => state.cars);
    const { allUsers } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchReservations());
        dispatch(fetchCars())
        dispatch(fetchAllUsers())
    }, []);
    return (

        <Stack>
            <ProtectedAdmin />
            <SimpleCharts reserv={reservations.length} cars={cars.length} users={allUsers.length}></SimpleCharts>
        </Stack>
    );
};


export default AdminPage;