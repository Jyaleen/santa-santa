import React from "react";
import { Grid, makeStyles } from '@material-ui/core';


type Props = {
};

const useStyles = makeStyles((theme) => ({

}))

const Kitsch: React.FC<Props> = (props) => {
    const classes = useStyles()
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            wrap='nowrap'
        >
            <Grid item xs={8}>
                <img src="https://www.clipartqueen.com/image-files/cute-dog-delivering-christmas-gifts.png" alt={"santa pic"} width="30%" />
            </Grid>
            <Grid item xs={10}>
                <img src="https://pngshare.com/wp-content/uploads/2021/06/Funny-Christmas-Clip-Art-Black-and-White-15.png" alt={"santa pic"} width="30%" />
            </Grid>
            <Grid item xs={8}>
                <img src="https://www.clipartqueen.com/image-files/vintage-snowman-with-christmas-presents.png" alt={"santa pic"} width="30%" />
            </Grid>
            <Grid item xs={8}>
                <img src="https://clipartix.com/wp-content/uploads/2017/10/Free-santa-claus-clipart-christmas-clip-art-3-image.png" alt={"santa pic"} width="30%" />
            </Grid>
        </Grid >
    )
};

export default Kitsch;
