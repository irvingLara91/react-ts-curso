import '../../components/Footer/Footer.css';
import {Paper} from "@mui/material";
import Text from "../Texts/Text.tsx";
import Box from "@mui/material/Box";
import aws from '../../assets/files/aws.svg';
import efy from '../../assets/files/efy.svg';
import GPTW from '../../assets/files/GPTW.png';
import BestPlaceToCode from '../../assets/files/BestPlaceToCode.svg';

const Footer = () => {
    return (
        <Paper sx={{
            pacity: 0,
            backgroundColor: 'transparent',
            marginTop: {
                xs: 'calc(17% + 100px)',
                lg: 'calc(17% + 60px)',
                xl: 0
            },
            height: '100%',
            position: 'relative',
            bottom: 0,
            width: '100%'
        }} component="footer">
            <div className="footer">
                <Box sx={{
                    display: 'flex',
                    flexFlow: 'column',
                    paddingTop: {xs: '140px', md: '200px'},
                    paddingLeft: {xs: '10px', sm: '10px', md: '40px', lg: '50px'},
                    justifyContent: {xs: 'center', sm: "left"}
                }}>
                    <Text textStyle={'titleFooter'} content={"We are coding the world of tomorrow_"}/>
                    <Box sx={{
                        display: 'flex',
                        flexFlow: 'column',
                        width: {xs: '100%', lg: 1250},
                        paddingLeft: {xs: 1, lg: 0},
                        paddingRight: {xs: 3, lg: 0},
                        textAlign: {xs: 'left', md: 'left'},
                        paddingTop: {xs: '40px', md: '50px'},
                        // paddingBottom: {xs: 15, md: 15},
                    }}>
                        <Text textStyle={'subTitleFooter'}
                              content={"DaCodes es una de las mejores empresas de desarrollo de software en México y LATAM. Lo que nos separa de los demás es el nivel de involucramiento que tenemos en nuestros proyectos y la pasión que tenemos por desarrollar productos digitales de calidad mundial. Somos un equipo de 220+ dacoders especializados en la planeación, diseño, desarrollo, implementación e innovación continua de productos digitales disruptivos."}/>
                        <Box
                            sx={{
                                display: 'flex',
                                flexFlow: {xs: 'row', sm: 'row'},
                                paddingTop: {xs: 10, sm: 8},
                                paddingBottom: {xs: 10, md: 10},
                                alignItems: 'center'
                            }}>

                            <picture style={{marginRight: 20}}>
                                <source media="(min-width: 1199px)" srcSet={BestPlaceToCode}/>
                                <source media="(min-width: 1440px)" srcSet={BestPlaceToCode}/>
                                <source media="(min-width: 1024px)" srcSet={BestPlaceToCode}/>
                                <source media="(min-width: 768px)"
                                        srcSet={`${BestPlaceToCode}?w=200&h=200&fit=crop&auto=format&dpr=1 1.5x`}/>
                                <source media="(min-width: 320px)"
                                        srcSet={`${BestPlaceToCode}?w=200&h=200&fit=crop&auto=format&dpr=1 1.5x`}/>
                                <img src={BestPlaceToCode} alt="BestPlaceToCode"/>
                            </picture>

                            <picture style={{marginRight: 20}}>
                                <source media="(min-width: 1199px)"
                                        srcSet={`${GPTW}?w=200&h=200&fit=crop&auto=format&dpr=1 1.5x`}/>
                                <source media="(min-width: 1440px)"
                                        srcSet={`${GPTW}?w=200&h=200&fit=crop&auto=format&dpr=1 1.5x`}/>
                                <source media="(min-width: 1024px)"
                                        srcSet={`${GPTW}?w=200&h=200&fit=crop&auto=format&dpr=1 1.5x`}/>
                                <source media="(min-width: 768px)"
                                        srcSet={`${GPTW}?w=190&h=190&fit=crop&auto=format&dpr=2 2x`}/>
                                <source media="(min-width: 320px)"
                                        srcSet={`${GPTW}?w=190&h=190&fit=crop&auto=format&dpr=2 2x`}/>
                                <img src={GPTW} alt="GPTW"/>
                            </picture>
                            <picture style={{marginRight: 20}}>
                                <source media="(min-width: 1199px)"
                                        srcSet={`${efy}?w=200&h=200&fit=crop&auto=format&dpr=1 1.2x`}/>
                                <source media="(min-width: 1440px)"
                                        srcSet={`${efy}?w=200&h=200&fit=crop&auto=format&dpr=1 1.2x`}/>
                                <source media="(min-width: 1024px)"
                                        srcSet={`${efy}?w=200&h=200&fit=crop&auto=format&dpr=1 1.2x`}/>
                                <source media="(min-width: 768px)"
                                        srcSet={`${efy}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}/>
                                <source media="(min-width: 320px)"
                                        srcSet={`${efy}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}/>
                                <img src={efy} alt="efy"/>
                            </picture>
                            <picture>
                                <source media="(min-width: 1199px)"
                                        srcSet={`${aws}?w=200&h=200&fit=crop&auto=format&dpr=1 1.5x`}/>
                                <source media="(min-width: 1440px)"
                                        srcSet={`${aws}?w=164&h=164&fit=crop&auto=format&dpr=1 1.15x`}/>
                                <source media="(min-width: 1024px)"
                                        srcSet={`${aws}?w=164&h=164&fit=crop&auto=format&dpr=1 1.15x`}/>
                                <source media="(min-width: 768px)"
                                        srcSet={`${aws}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}/>
                                <source media="(min-width: 320px)"
                                        srcSet={`${aws}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}/>
                                <img src={aws} alt="aws"/>
                            </picture>


                        </Box>
                    </Box>
                </Box>
            </div>
        </Paper>
    )
}
export default Footer;
