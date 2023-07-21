import {AppBar, CssBaseline, IconButton, MenuItem, Toolbar} from "@mui/material";
import Box from "@mui/material/Box";
import fkd from '../../assets/files/Logo.png'
import {AccountCircle} from "@mui/icons-material";
import Menu from '@mui/material/Menu';
import React from "react";
import {connect} from "react-redux";
import {logOutAction} from "../../redux/authDuck.ts";
const Header= (props:any) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseHide = () => {
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
       props.logOutAction()
    };

    return(
        <Box sx={{ display: 'flex',width:'100%'}}>
            <CssBaseline />
            <AppBar position="fixed" style={{backgroundColor:'#5141EA'}}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1,marginLeft:{xs:0,sm:5,md:5,lg:5}}}>
                        <img src={fkd} alt={""} style={{height:50}}/>
                    </Box>
                    <IconButton
                        size="medium"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit">
                        <AccountCircle fontSize={"large"} />
                    </IconButton>
                    {props.auth.loggedIn && (
                        <div style={{background:'red'}}>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseHide}
                            >
                                <MenuItem onClick={handleClose}>{"Cerrar sesión"}</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </Box>
    )
}

const mapState = ( state: any ) => {
    return {
        auth: state.auth
    };
};
export default connect(mapState,{logOutAction})(Header);
