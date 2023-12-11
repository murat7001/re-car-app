import { Stack } from "@mui/material";
import ProtectedAdmin from "./ProtectedAdmin";


const AdminPage = () => {
    return (

        <Stack>
            <ProtectedAdmin />
        </Stack>
    );
};


export default AdminPage;