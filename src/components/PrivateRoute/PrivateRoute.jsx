import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const isRefreshing = useSelector(state => state.isRefreshing)
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={ redirectTo} /> : <Component/>
}

export default PrivateRoute;