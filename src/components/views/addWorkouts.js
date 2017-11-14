import React, { Component } from "react";

import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import ButtonBase from "material-ui/ButtonBase";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";
import List, { ListItem } from "material-ui/List";
import { FormGroup, FormControlLabel } from "material-ui/Form";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";
import Grid from "material-ui/Grid";
import AddExercise from "./addExercise";
import Layout from "../layout";

import { connect } from "react-redux";
import { addWorkoutForm } from "../actions";

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%"
  },
  avatarButton: {
    borderRadius: "50%",
    padding: 0,
    margin: "1px 6px"
  }
});
const days = {
  sun: {
    title: "S",
    selected: false
  },
  mon: {
    title: "M",
    selected: false
  },
  tue: {
    title: "T",
    selected: false
  },
  wed: {
    title: "W",
    selected: false
  },
  thu: {
    title: "T",
    selected: false
  },
  fri: {
    title: "F",
    selected: false
  },
  sat: {
    title: "S",
    selected: false
  }
};
class AddWorkouts extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      days: days,
      exercises: [],
      dialogStatus: false
    };
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleOpenDialog = () => {
    this.setState({ dialogStatus: true });
  };
  handleCloseDialog = () => {
    this.setState({ dialogStatus: false });
  };
  handleDialogFormSubmit = formContent => {
    let { exercises } = this.state;
    this.setState({
      exercises: [...exercises, formContent]
    });
    console.log(`Added ${formContent.title} to exersices Stack`);
  };
  handleDaysClick = day => {
    let updatedDay = Object.assign({}, this.state.days[day], {
      selected: !this.state.days[day].selected
    });
    let temp = Object.assign({}, this.state.days);
    temp[day] = updatedDay;
    this.setState({
      days: temp
    });
    console.log(temp);
  };
  handleFormSubmit = e => {
    e.preventDefault();
    const { title, days, exercises } = this.state;
    this.props.addWorkoutForm(title, days, exercises);
    this.setState({
      title: "",
      exercises: []
    });
  };
  render() {
    const { classes } = this.props;
    let { days } = this.state;
    return (
      <Layout>
        <Paper className={classes.root}>
          <form onSubmit={this.handleFormSubmit}>
            <TextField
              id="title"
              label="Exercise Name"
              value={this.state.title}
              onChange={this.handleChange("title")}
            />
            <Divider />
            <div style={{ margin: "1em 10px" }}>
              <Typography type="headline">Day</Typography>
              <FormGroup
                row
                style={{ padding: "0.5em 0", justifyContent: "center" }}
              >
                {Object.keys(days).map(day => (
                  <ButtonBase
                    key={day}
                    className={classes.avatarButton}
                    focusRipple
                    onClick={() => this.handleDaysClick(day)}
                  >
                    <Avatar
                      style={
                        days[day].selected ? { backgroundColor: "red" } : null
                      }
                    >
                      {days[day].title}
                    </Avatar>
                  </ButtonBase>
                ))}
              </FormGroup>
            </div>
            <Typography type="headline">Exercise</Typography>
            <List>
              {this.state.exercises &&
                this.state.exercises.map(exercise => (
                  <ListItem key={exercise.title}>{exercise.title}</ListItem>
                ))}
            </List>
            <Button onClick={this.handleOpenDialog}>Add Exercise</Button>
            <AddExercise
              dialogStatus={this.state.dialogStatus}
              handleCloseDialog={this.handleCloseDialog}
              handleDialogFormSubmit={this.handleDialogFormSubmit}
            />
            <Button onClick={this.handleFormSubmit}>Confirm</Button>
          </form>
        </Paper>
      </Layout>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addWorkoutForm: (title, days, exercises) =>
      dispatch(addWorkoutForm(title, days, exercises))
  };
};
export default connect(null, mapDispatchToProps)(
  withStyles(styles)(AddWorkouts)
);
