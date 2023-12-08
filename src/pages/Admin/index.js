import withAuth from "../withAuth";

const AdminPage = () => {
    return (
        <div>
            <h1>Admin Sayfası</h1>
        </div>
    );  
};
 

export default withAuth(AdminPage);