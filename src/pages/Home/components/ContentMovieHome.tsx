import './ContentMovieHome.css';
import {Grid, Rating, styled} from "@mui/material";
import Box from "@mui/material/Box";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ApiApp from "../../../lib/apiApp.tsx";
import {useState} from "react";
import moment from 'moment';

moment().format("es");

interface ContentMovieHomeI {
    data?: object;
    list?: Array<Movie>
    loading?: boolean,
}

type Movie = {
    adult: string
    backdrop_path: string
    genre_ids: Array<[]>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: string
    vote_average: number
    vote_count: number
}
interface IKeys { id: number; name: string }



const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: 'rgb(245,245,245)',
    },
    '& .MuiRating-iconHover': {
        color: 'rgb(245,245,245)',
    },
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: '#fff',
    },
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ContentMovieHome = ({list}: ContentMovieHomeI) => {
    const [detailMovie, setDetailMovie] = useState(null)
    const detail = (id = 0, language = 'es-MX') => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ApiApp.getDetail(id, language).then(res => {
            if (res.status === 200) {
                setDetailMovie(res.data)
            }

        }).catch(e => {
            console.error(e)
        })
    }

    const arrayGenres = (gen: Array<[]>) => {
        let stringNames = "";

        if (gen.length > 0) {
            stringNames = gen.map((g: any): IKeys => g.name).join(' / ')
        }
        return stringNames
    }

    return (

        <Box sx={{
            width: '100%', height: {xs: 1100, sm: 1500, md: 1500, lg: 1200, xl: 1200}, paddingTop: 5,
            overflowY: 'scroll'
        }}>

            <Grid container sx={{paddingLeft: {xs: 2, lg: 15, xl: 30}, paddingRight: {xs: 2, lg: 15, xl: 30}}}
                  rowSpacing={3} columnSpacing={{xs: 2, sm: 3, md: 3}}
                  columns={{xs: 4, sm: 12, md: 16, lg: 20, xl: 24}}>
                {
                    list && list.length > 0 && list.map((item, index) => {
                        return (
                            <Grid item xs={2} sm={4} md={4} lg={5} xl={4} key={index}>
                                <div className={'card'}
                                     onMouseEnter={() => {
                                         detail(item.id, "es-MX")
                                     }}
                                >
                                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={""}/>
                                    <div className={'info'}>
                                        <h1>{item.title}</h1>
                                        <span>
                                            {item.release_date && moment(item.release_date, "YYYY-MM-DD").format("YYYY")+" ‧ "}

                                            {
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                // @ts-ignore
                                                detailMovie && arrayGenres(detailMovie?.genres)
                                            }
                                        </span>

                                        {
                                            item.overview &&
                                            <p>{item.overview}</p>
                                        }

                                    </div>
                                    <div className={'ranking'}>
                                        {
                                            item.vote_average !== 0 && item.vote_average &&
                                            <StyledRating
                                                name="customized-color"
                                                value={item.vote_average / 2}
                                                precision={0.5}
                                                size="small"
                                                readOnly
                                                icon={<StarIcon fontSize="inherit"/>}
                                                emptyIcon={<StarBorderIcon fontSize="inherit"/>}
                                                max={5}
                                            />
                                        }
                                    </div>
                                </div>
                            </Grid>)
                    })
                }
            </Grid>
        </Box>
    )
}
export default ContentMovieHome;
