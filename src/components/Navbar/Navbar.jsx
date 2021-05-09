import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import Contact from "./links/Contact";

const useStyles = makeStyles((theme) => ({
  contact: {
    padding: "16px",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(39, 37, 37)",
      textDecoration: "none",
      cursor: "pointer",
    },
  },
  about: {
    padding: "16px",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(39, 37, 37)",
      textDecoration: "none",
      cursor: "pointer",
    },
  },
  title: {
    margin: "auto",
    display: "flex",
  },
  active_nav_class: {
    backgroundColor: "rgb(39, 37, 37)",
    textDecoration: "none",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <NavLink
              activeClassName={classes.active_nav_class}
              to="/contact"
              exact
            >
              <Typography variant="h6" className={classes.contact}>
                <Contact />
              </Typography>
            </NavLink>
            <NavLink
              activeClassName={classes.active_nav_class}
              to="/about"
              exact
            >
              <Typography variant="h6" className={classes.about}>
                About
              </Typography>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
