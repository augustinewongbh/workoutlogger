import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
// import Avatar from "material-ui/Avatar";
// import Divider from "material-ui/Divider";
import ListSubheader from 'material-ui/List/ListSubheader'
import List, {ListItem, ListItemText} from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import Typography from 'material-ui/Typography'
// import Card, {
//   CardHeader,
//   CardMedia,
//   CardContent,
//   CardActions
// } from "material-ui/Card";
import Paper from "material-ui/Paper";
import TextField from 'material-ui/TextField'

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
})

class WODCard extends Component {
  state={
    isOpen: false
  }
  handleClick = () => {
    this.setState(isOpen:!this.state.isOpen)
  }
  render() {
    const {classes} = this.props
    return(
      <ListItem button onClick={this.handleClick}>
        <ListItemText>{this.props.exercise.title}</ListItemText>
        <ListItemText>{this.props.exercise.sets} x {this.props.exercise.reps}</ListItemText>
        <ListItemText>{this.props.exercise.weight}</ListItemText>
        <ListItemText>{this.state.isOpen?<ExpandLess/>:<ExpandMore/>}</ListItemText>
      </ListItem>
      <Collapse in={this.state.isOpen} transitionDuration="auto" unmountOnExit>
        <ListItem className={classes.nested}>
          {this.props.exercise.details.map(set=>(
            <div>
              <TextField

              /> X <TextField/>
            </div>
          ))}
        </ListItem>
      </Collapse>
    )
  }
}

class WOD extends Component {
  render(){
    return(
      <Paper>
        <List subheader={<ListSubheader>{this.props.title}</ListSubheader>}>
          {!this.props.exercises?"LOADING...":this.props.exercises.map(exercise=><WODCard exercise={exercise}/>)}
        </List>
      </Paper>
    )
  }
}
