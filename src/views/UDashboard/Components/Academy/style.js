import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(3),
  },
  card1: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    textAlign: "center",
    "@media (max-width: 1000px)": {
      width: "270px",
    },
    "@media (max-width: 480px)": {
      left: "-15px",
      position: "relative",
      width: "350px",
    },
    "@media (max-width: 420px)": {
      width: "300px",
      left: "-15px",
      position: "relative",
    },
  },
  card: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
  cardContent: {
    flexGrow: 1,
  },
  cardContent1: {
    flexGrow: 1,
    "@media (max-width: 1000px)": {
      marginBottom: "80px",
    },
    "@media (max-width: 820px)": {
      marginBottom: "100px",
    },
  },
  root: {
    flexGrow: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  Texttitle: {
    fontSize: 14,
  },
  Textpos: {
    marginBottom: 12,
  },
  margin: {
    margin: theme.spacing(10),
  },
  container: {
    marginTop: "70px",
  },
  media: {
    height: 0,
    paddingTop: '80%', // 16:9
  },
  learn: {
    height: "300px",
    width: "400px",
    borderRadius: 5,
  },
  table: {
    minWidth: 650,
    borderRadius: "5px",
  },
}));

export default useStyles;
