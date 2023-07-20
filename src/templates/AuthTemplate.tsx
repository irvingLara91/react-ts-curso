import React from "react";
import Header from "../components/Header/Header.tsx";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Footer from "../components/Footer/Footer.tsx";
import {connect} from "react-redux";
import {CircularProgress, Stack, Typography} from "@mui/material";

interface AuthTemplateI {
    auth:any
    children: React.ReactNode
}

const AuthTemplate = ({auth,children}: AuthTemplateI) => {
    return (
        <div>
            <Container disableGutters maxWidth={false}>
                <main>
                    <Header/>
                    <Box style={{width: '100%', height: 'auto'}}>
                        {
                            auth.fetching ?
                                <div style={{alignItems: 'center', display: 'block', width: '100%', height: '50vh'}}>
                                    <Stack sx={{
                                        display: 'flex',
                                        textAlign: 'center',
                                        alignSelf: 'center',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }} direction={{xs: 'column'}} spacing={0}>
                                        <Box sx={{
                                            display: 'flex',
                                            textAlign: 'center',
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <CircularProgress sx={{color:'white'}} size={50}/>
                                        </Box>
                                        <Typography sx={{
                                            paddingTop: '25px',
                                            fontWeight: 600,
                                            color:'white',
                                            fontSize: {xs: "13px", lg: "20px"}
                                        }}>
                                            {'Cargando la información....'}
                                        </Typography>
                                    </Stack>
                                </div>
                                :
                            children
                        }
                    </Box>
                    <Footer/>
                </main>
            </Container>
        </div>
    )
}
const mapState = ( state: any ) => {
    return {
        auth: state.auth
    };
};
export default connect(mapState)(AuthTemplate);
