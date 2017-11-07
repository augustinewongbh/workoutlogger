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
    title: null,
    sets: 3,
    reps: 8,
    trackPr: false
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleSubmit = () => {
    console.log(JSON.stringify(this.state));
  };
  render() {
    return (
      <Dialog
        open={this.props.handleOpenDialog}
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
                value="trackPr"
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
