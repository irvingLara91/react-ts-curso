import {connect} from "react-redux";
import {Navigate, Outlet} from 'react-router-dom'
interface PrivateRouteI {
    auth:any
}

function PrivateRoute({auth}: PrivateRouteI): JSX.Element  {


    if (auth.loggedIn) return <Outlet/>
    return <Navigate to="/"/>
}


const mapState = ( state: any ) => {
    return {
        auth: state.auth
    };
};
export default connect(mapState)(PrivateRoute);

