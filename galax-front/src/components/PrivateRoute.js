import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
const PrivateRoutes = () => {
    let cookies = new Cookies();
    let auth = cookies.get("auth");
    
    return(
        auth ==="undefined" ? <Navigate to="/"/>: <Outlet/>
    )
}

export default PrivateRoutes