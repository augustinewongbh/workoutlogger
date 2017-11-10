import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "material-ui/Dialog";
import Button from "material-ui/Button";
import Checkbox from "material-ui/Checkbox";
import { FormGroup, FormControlLabel } from "material-ui/Form";

class AddExercise extends Component {
  state = {
    title: "",
    sets: 3,
    reps: 8,
    trackPr: false
  };
  handleChange = name => event => {
    name === "sets" || name === "reps"
      ? this.setState({
          [name]: parseInt(event.target.value, 10)
        })
      : this.setState({
          [name]: event.target.value
        });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleDialogFormSubmit(this.state);
    this.props.handleCloseDialog();
    this.setState({
      title: "",
      sets: 3,
      reps: 8,
      trackPr: false
    });
  };
  render() {
    return (
      <Dialog
        open={this.props.dialogStatus}
        onRequestClose={this.props.handleCloseDialog}
      >
        <DialogTitle>
          <TextField
            id="title"
            label="Exercise Name"
            value={this.state.title}
            onChange={this.handleChange("title")}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.trackPr}
                onChange={this.handleChange("trackPr")}
                value="true"
              />
            }
            label="Track PR?"
          />
        </DialogTitle>
        <DialogContent>
          <TextField
            id="sets"
            label="Sets"
            value={this.state.sets}
            onChange={this.handleChange("sets")}
            type="number"
          />
          <TextField
            id="reps"
            label="Reps"
            value={this.state.reps}
            onChange={this.handleChange("reps")}
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit}>Add Exercise</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default AddExercise;
