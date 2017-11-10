import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
//import Avatar from "material-ui/Avatar";
import classnames from "classnames";
import Collapse from "material-ui/transitions/Collapse";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import List, { ListItem, ListItemText } from "material-ui/List";
import ListSubheader from "material-ui/List/ListSubheader";
const styles = theme => ({
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  flexGrow: {
    flex: "1 1 auto"
  }
});
const ExerciseList = props => (
  <List subheader={<ListSubheader>{props.exercise.title}</ListSubheader>}>
    {
      // set (index), weight rep
    }
    {props.exercise.details &&
      props.exercise.details.map((set, index) => (
        <ListItem>
          <ListItemText>{index}</ListItemText>
          <ListItemText>{set.weight}</ListItemText>
          <ListItemText>{set.weight}</ListItemText>
        </ListItem>
      ))}
  </List>
);
class HomeCard extends Component {
  state = {
    expandCard: false
  };
  handleExpandClick = () => {
    this.setState({ expandCard: !this.state.expandCard });
  };
  render() {
    const { classes, exercises } = this.props;
    return (
      <Card>
        <CardHeader>
          <Typography>{this.props.day}</Typography>
          <Typography>{this.props.title}</Typography>
        </CardHeader>
        {this.props.exercise && (
          <div>
            <CardContent>
              <ExerciseList exercise={this.props.exercises.slice(0, 1)} />
            </CardContent>
            <CardActions>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expandCard
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expandCard}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse
              in={this.state.expandCard}
              transitionDuration="auto"
              unmountOnExit
            >
              {this.props.exercises.slice(1).map(exercise => (
                <CardContent>
                  <ExerciseList exercise={exercise} />
                </CardContent>
              ))}
            </Collapse>
          </div>
        )}
      </Card>
    );
  }
}

export default withStyles(styles)(HomeCard);
