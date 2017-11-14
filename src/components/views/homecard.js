import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
// import Avatar from "material-ui/Avatar";
// import Divider from "material-ui/Divider";
import Typography from "material-ui/Typography";
import ListSubheader from "material-ui/List/ListSubheader";
import List, { ListItem, ListItemText } from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";
import ExpandLess from "material-ui-icons/ExpandLess";
import ExpandMore from "material-ui-icons/ExpandMore";

import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";

const styles = theme => ({
  listroot: {
    width: "100%",
    overflow: "auto",
    maxHeight: 300
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class ExerciseList extends Component {
  render() {
    const { title, latestlog } = this.props;
    return (
      <List subheader={<ListSubheader>{title}</ListSubheader>}>
        {latestlog.map((res, idx) => (
          <ListItem>
            <Typography>
              <ListItemText primary={idx} />
              <ListItemText secondary={res.weight} />
              <ListItemText secondary={res.reps} />
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  }
}
class HomeCard extends Component {
  render() {
    const { exercises, classes } = this.props;
    const { title, day, exercisesId } = this.props.workouts;
    return (
      <Card>
        {!exercises ? (
          <CardContent>"LOADING..."</CardContent>
        ) : (
          <div>
            <CardHeader title={title} subheader={day} />
            <CardContent>
              {exercisesId &&
                exercisesId.map(key => (
                  <ExerciseList
                    title={exercises[key].title}
                    latestlog={
                      exercises[key].log[exercises[key].log.length - 1]
                    }
                  />
                ))}
            </CardContent>
          </div>
        )}
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return {
    workouts: state.workouts,
    exercises: state.exercises
  };
};
export default connect(mapStateToProps)(withStyles(styles)(HomeCard));
