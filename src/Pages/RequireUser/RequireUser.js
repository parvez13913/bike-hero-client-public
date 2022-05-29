import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init"
import useUser from "../../hooks/useUser";
import Loading from "../Shared/Loading/Loading";

const RequireUser = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [users, userLoading] = useUser(user)
    const location = useLocation();

    if (loading || userLoading) {
        return <Loading />
    }

    if (!user || !users) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireUser;