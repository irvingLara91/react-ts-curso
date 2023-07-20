import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../pages/Auth/Login/Login.tsx";
import Home from "../pages/Home/Home.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import {connect} from "react-redux";
import NotFound from "../pages/NotFound/NotFound.tsx";

interface RouterAppI {
    auth: any
}
function RouterApp({auth}: RouterAppI) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/" element={auth.loggedIn ? <Home/> : <Login/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path="/home" element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const mapState = (state: any) => {
    return {
        auth: state.auth
    };
};
export default connect(mapState)(RouterApp);
