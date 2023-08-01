import LoginForm from "./components/LoginForm.tsx";
import ApiApp from "../../../lib/apiApp.tsx";
import {connect} from "react-redux";
import {loginAction} from "../../../redux/authDuck.ts";
import AuthTemplate from "../../../templates/AuthTemplate.tsx";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Login = (props:any) => {
    const navigate = useNavigate()

    const login_ = (data:object) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ApiApp.loginAction(data).then(res=>{
            console.log("login",res.data)
            props.loginAction(res.data)
            navigate("/home")
        }).catch(e=>{
            alert("Verifique sus credenciales")
            console.error("",e)})
    }

    return (
        <AuthTemplate>
            <LoginForm save={login_}/>
        </AuthTemplate>

    )
}

const mapState = ( state: any ) => {
    return {
        auth: state.auth
    };
};
export default connect(mapState,{loginAction})(Login);

