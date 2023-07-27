import Text from "../../../../components/Texts/Text.tsx";
import Input from "../../../../components/Inputs/Input.tsx";
import Button from "../../../../components/Buttons/Button.tsx";
import  {useEffect, useState} from "react";
import {Checkbox, FormControlLabel, Grid} from "@mui/material";
import './LoginForm.css'
import ApiApp from "../../../../lib/apiApp.tsx";


const styleInput = {
    borderRadius: '50px',
    background: '#5141EA',
    width: '100%',
    fontSize: '14px',
    height: ' 50px',
    flexShrink: 0,
    marginTop: 20,
    padding: 10
}

const styleInputError = {
    borderRadius: '50px',
    background: '#5141EA',
    width: '100%',
    borderWidth:1,
    borderColor:'red',
    fontSize: '14px',
    height: ' 50px',
    flexShrink: 0,
    marginTop: 20,
    padding: 10
}

const textStyle = {
    color: '#FFF',
    fontSize: '20px',
    fontFamily: '',
    fontStyle: ' normal',
    fontWeight: ' 400',
    lineHeight: '120%',
    marginTop: 10
}

const textCheckBoxStyle = {
    color: '#FFF',
    fontSize: '20px',
    fontFamily: '',
    fontStyle: ' italic',
    fontWeight: ' 400',
    lineHeight: '120%',
    marginTop: 10
}
interface LoginFormI {
    save: (obj:object) => void;
}

const LoginForm = ({save}: LoginFormI) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [check, setCheck] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [emailErrorMessage, setEmailErrorMessaga] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')



    const [requestToken,setRequestToken] = useState({})


    const getREquestToken = () => {
        // @ts-ignore
        ApiApp.createRequestToken().then(
            res=>{
                setRequestToken(res.data)
               // console.log("roken",res.data)
            }
        ).catch(e=>{console.error(e)})

    }

    useEffect(()=>{
        getREquestToken()
    },[])


    const  validateEmail=(email_="")=> {
        // Regular expression pattern for email validation
        // Test the email against the pattern
        if (email_.trim() !== ""){
            setEmailError(false)
        }else {
            setEmailError(true)
            setEmailErrorMessaga("Nombre de usuario invalido")
        }
        return email_.trim() !== "";
    }

    const  validatePassword=(pass="") => {
        if (pass.trim() !== "" &&  pass.length >=7) {
            console.log("Valid password");
            setPasswordError(false)
        } else {
            setPasswordError(true)
            setPasswordErrorMessage("Contraseña invalido")
        }
        return pass.trim() !== "";
    }

   const submit =()=>{
        if (!validateEmail(email)){
            return
        }

       if (!validatePassword(password)){
           return
       }

       const data_= {
           ...requestToken,
           username:email,
           password:password
       }
       save(data_)
   }

    const handleChange = (event:any) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
        } else {
            console.log('⛔️ Checkbox is NOT checked');
        }
        setCheck(event.target.checked);
    };



    return (
            <Grid container spacing={0}>
                <Grid item xs={11} sm={8} md={5.5} lg={4.5} xl={4}
                      sx={{
                          width: {xs: '10%',sm:'100px',md:'100px',lg: 100},
                          flexFlow: 'column',
                          height: {xs: '100%', lg: '450px',xl:'700px'},
                          marginLeft: {xs: 2, sm: 10}, marginTop: 10
                      }}>

                    <div style={{display: 'flex', flexFlow: 'column', marginBottom: '70px'}}>
                        <Text
                            textStyle={'titleForm'}
                            content={"Login"}/>
                        <Text
                            textStyle={'subTitleForm'}
                           content={"¡Bienvenido!"}/>
                    </div>

                    <Input textStyle={textStyle}
                           type={'text'}
                           error={emailError}
                           messageError={emailErrorMessage}
                           customStyles={emailError ? styleInputError :styleInput}
                           name={"username"} placeholder={"Nombre de usuario de DaCodes"}
                           setValue={setEmail} value={email}/>
                    <Input textStyle={textStyle}
                           type={'password'}
                           error={passwordError}
                           messageError={passwordErrorMessage}
                           customStyles={passwordError ? styleInputError : styleInput}
                           name={"password"}
                           placeholder={"Contraseña"} setValue={setPassword} value={password}/>

                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <FormControlLabel required control={<Checkbox
                            sx={{

                                color:'#fff',
                                '&.Mui-checked': {
                                    color:'#5141EA',
                                },
                                '& .MuiSvgIcon-root': { fontSize: 28} }}
                            checked={check} onChange={handleChange}
                        />} style={textCheckBoxStyle} label="He leido y acepto los terminos y condiciones" />

                    </div>

                    <Button name={'Login'} placeholder={'Crear cuenta'}
                            isDisable={check}
                            require={true}
                            clickHandler={submit}/>
                </Grid>
            </Grid>
    )
}

export default LoginForm;
