import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    user: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
        
    },
    news: {
        width: "100%",
        height: "500px",
        borderRadius: 5
    },
    actions: {
        display: "flex",
        justifyContent: "flex-start"
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    }
}));

export default useStyles;