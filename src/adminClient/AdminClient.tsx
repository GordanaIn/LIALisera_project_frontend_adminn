import React, {FC, ReactElement} from "react";

import {ThemeProvider} from "@mui/material";
import theme from "../Theme";
import {useStyles} from "./sections/components/landingStyle/LandingStyle";



const Support:FC<{}> = ():ReactElement => {
    const classes = useStyles();

    return(
        <ThemeProvider theme={theme}>
            <div className={classes.root} >

            </div>
        </ThemeProvider>
    );
}
export default Support;
