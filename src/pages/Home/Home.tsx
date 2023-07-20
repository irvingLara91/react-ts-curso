import {useEffect, useState} from "react";
import ApiApp from "../../lib/apiApp.tsx";
import ContentMovieHome from "./components/ContentMovieHome.tsx";
import Button from "../../components/Buttons/Button.tsx";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Text from "../../components/Texts/Text.tsx";
import './Home.css'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AuthTemplate from "../../templates/AuthTemplate.tsx";
import MovieHomeSkeleton from "./components/MovieHomeSkeleton.tsx";
interface MovieI {
    dates?: object;
    page: number;
    results?: Array<[]>;
    total_pages?: number;
    total_results?: number;
}

const initData = {
    dates: {},
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

const Home = () => {
    const [url, setUrl] = useState("now_playing");
    const [data, setData] = useState<MovieI>(initData)
    const [page, setPage] = useState(0)
    const [list, setList] = useState<[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getMovies = (url = "", page = 1) => {
        setLoading(true)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ApiApp.getMovieLists({language: 'es-MX', page: page, url: url}).then(response => {
            // console.log("respuestas", response)
            if (response.status === 200) {
                setData(response.data)
                setPage(response.data.page)
                setList(response.data.results)
            } else {
                setData(initData)
            }
            setLoading(false)
        }).catch(e => {
            setLoading(false)
            console.log("error", e)
        })
    }

    useEffect(() => {
        getMovies(url)
    }, [url])

    const changePage = (page = 1) => {
        setTimeout(()=>{
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        },500)
        getMovies(url, page)
    }
    return (
        <AuthTemplate>
            <Box sx={{flexGrow: 1, paddingBottom: 3}}>
                <Grid container spacing={2} rowSpacing={2}
                      columnSpacing={{xs: 2, sm: 4, md: 1.5, lg: 2}}
                      sx={{
                          width: '100%', justifyContent: {lg: 'center'},
                          paddingRight: {xs: 1, lg: 0}, paddingLeft: {xs: 1, lg: 0}
                      }}>
                    <Grid item xs={3} sm={3} md={3} lg={2.5}>
                        <Button selected={url} clickHandler={() => {
                            setUrl("now_playing")
                        }} name={"now_playing"} placeholder={"Now playing"}/>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={2.5}>
                        <Button selected={url} clickHandler={() => {
                            setUrl("popular")
                        }} name={"popular"} placeholder={"Popular"}/>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={2.5}>
                        <Button selected={url} clickHandler={() => {
                            setUrl("top_rated")
                        }} name={"top_rated"} placeholder={"Top rated"}/>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={2.5}>
                        <Button selected={url} clickHandler={() => {
                            setUrl("upcoming")
                        }} name={"upcoming"} placeholder={"Upcoming"}/>
                    </Grid>
                </Grid>
            </Box>
            {
                loading ?
                    <MovieHomeSkeleton/>
                    :

                <ContentMovieHome data={data} list={list} loading={loading}/>

            }
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexGrow: 1, paddingTop: 3, paddingBottom: 3,
                alignItems: 'center',
            }}>
                <button
                    style={{
                        display: 'flex',
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(81, 65, 234, 1)', borderRadius: 50
                    }}
                    onClick={() => {
                        changePage(page !== 0 && data.page === 1 ? page :
                            data.total_pages === data.page ? page - 1 : page - 1
                        );
                    }}

                >
                    <ArrowBackIosNewOutlinedIcon
                        fontSize={"medium"}/>
                </button>

                <Text textStyle={"pageTitle"} content={page + "/" + data.total_pages}/>

                <button style={{
                    display: 'flex',
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(81, 65, 234, 1)', borderRadius: 50
                }} onClick={() => {
                    changePage(page !== 0 ?
                        data.total_pages === data.page ?
                            data.page
                            :
                            data.page >= page ?
                                page + 1
                                :
                                page
                        :
                        page);
                }}>
                    <ArrowForwardIosOutlinedIcon fontSize={"medium"}/>
                </button>
            </Box>
        </AuthTemplate>

    )
}
export default Home;
