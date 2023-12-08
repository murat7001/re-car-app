import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const withAuth = (WrappedComponent) => {
    const AuthProtected = (props) => {
        const router = useRouter();
        let { loggedIn, user } = useSelector((state) => state.auth);


        useEffect(() => {
            if (!isAdmin()) {
                router.push('/');
            }
        }, [user]);

        const isAdmin = () => {
            if(user && loggedIn && user.role === 'admin'){
                return true;
            }
            return false;
        };

        return <WrappedComponent {...props} />;
    };

    return AuthProtected;
};

export default withAuth;