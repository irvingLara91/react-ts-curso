import {Skeleton, Box, Grid} from "@mui/material";

const MovieHomeSkeleton = () => {


    return (
        <Box sx={{width: '100%', height: {xs: 1000, sm: 1500, md: 1500, lg: 1200, xl: 1200}, paddingTop: 5}}>
            <Grid container
                  sx={{
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}

                  rowSpacing={3} columnSpacing={{xs: 1, sm: 3, md: 3}}
                  columns={{xs: 3, sm: 12, md: 16, lg: 20, xl: 24}}>
                {
                    Array.from(new Array(8)).map((item, index) => (
                            <Box key={index + item} sx={{width: 210, marginRight: 0.5, my: 5}}>
                                <Skeleton variant="rectangular" width={210} height={118}/>
                                <Box sx={{pt: 0.5}}>
                                    <Skeleton/>
                                    <Skeleton width="60%"/>
                                </Box>
                            </Box>
                        )
                    )
                }
            </Grid>
        </Box>
    )
}
export default MovieHomeSkeleton
