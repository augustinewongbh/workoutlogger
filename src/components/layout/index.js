import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import List, { ListItem, ListItemText } from "material-ui/List";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";

const drawerWidth = 240;

const styles = theme => ({
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    height: "100%",
    top: "65px",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    width: "100%",
    marginLeft: -drawerWidth,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: `calc(100%-56px)`,
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      content: {
        height: "calc(100%-64px)",
        marginTop: 64
      }
    }
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
});

class Layout extends Component {
  state = {
    open: true,
    checked: 1
  };

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleNavToggle = value => {
    this.setState({
      checked: value
    });
  };

  render() {
    const { children, classes, theme } = this.props;

    return (
      <div className={classes.appFrame}>
        <AppBar
          className={classNames(
            classes.appBar
            //this.state.open && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={true}>
            <IconButton
              color="contrast"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classNames(
                classes.menuButton
                //this.state.open && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          type="persistent"
          classes={{
            paper: classes.drawerPaper
          }}
          open={this.state.open}
        >
          <div className={classes.drawerInner}>
            {/* <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "rtl" ? (
                <ChevronRightIcon />
                ) : (
                <ChevronLeftIcon />
                )}
                </IconButton>
                </div>
            <Divider /> */}
            <List className={classes.list}>
              <NavLink
                exact
                to="/"
                style={{ textDecoration: "none" }}
                activeStyle={{ backgroundColor: "salmon" }}
              >
                <ListItem
                  button
                  onClick={() => this.handleNavToggle(1)}
                  style={{ backgroundColor: "inherit" }}
                >
                  <Typography type="body1" noWrap>
                    Home
                  </Typography>
                </ListItem>
              </NavLink>
              <Divider />
              <NavLink
                exact
                to="/addworkout"
                style={{ textDecoration: "none" }}
                activeStyle={{ backgroundColor: "salmon" }}
              >
                <ListItem
                  button
                  onClick={() => this.handleNavToggle(2)}
                  style={{ backgroundColor: "inherit" }}
                >
                  <Typography type="body1" noWrap>
                    Add Workout
                  </Typography>
                </ListItem>
              </NavLink>
              <Divider />
            </List>
          </div>
        </Drawer>
        <main
          className={classNames(
            classes.content,
            this.state.open && classes.contentShift
          )}
        >
          {/* <Typography type="body1" noWrap>
            {"You think water moves fast? You should see ice."}
          </Typography> */}
          {children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
