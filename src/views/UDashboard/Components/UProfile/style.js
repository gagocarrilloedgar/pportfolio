import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(3),
  },
  card: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },

  score: {
    height: "100%",
    width: "100%",
    borderRadius: 5
  },

  score_context: {
    marginBottom: "20px"
  },

  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
}));

export default useStyles;
