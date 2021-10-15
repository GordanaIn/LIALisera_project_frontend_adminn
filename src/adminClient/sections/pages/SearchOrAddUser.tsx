import React, {FC, ReactElement, useEffect, useState} from "react";
import { useStyles } from "../components/landingStyle/LandingStyle";



const SearchOrAddUser:FC<{}> = ():ReactElement => {
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const classes = useStyles();
    useEffect(() => {
        setLoading(false);
    },[]);


    return(
        <div className={classes.root}>
            <h1>Search or Add User</h1>
        </div>

    );
}
export default SearchOrAddUser;
