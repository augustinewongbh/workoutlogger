import React from "react";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemText, ListItemIcon } from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";
import ExpandLess from "material-ui-icons/ExpandLess";
import ExpandMore from "material-ui-icons/ExpandMore";
import Divider from "material-ui/Divider";
import { connect } from "react-redux";
//import Card, {CardActions, CardContent} from 'material-ui/Card'

import Layout from "../layout";

const styles = theme => ({
  root: {
    width: "100%"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

// const WorkoutCard = props => {
//   const {classes} = props
//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         <Typography type="body1">
//           {props.}
//         </Typography>
//       </CardContent>
//     </Card>
//   )
// }
class WorkoutItems extends React.Component {
  state = {
    open: false
  };
  toggleNested = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { classes, days, title, exercises, exercisesId } = this.props;
    return (
      <div>
        <ListItem button onClick={this.toggleNested}>
          <ListItemText primary={title} style={{ flex: 1 }} />
          {days &&
            Object.keys(days)
              .filter(key => days[key].selected)
              .map(res => (
                <ListItemText
                  style={{ flex: "none" }}
                  key={res}
                  secondary={res}
                />
              ))}
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem>
            <List>
              {exercisesId.map(key => (
                <ListItem key={key}>
                  <ListItemText
                    primary={exercises[key].title}
                    style={{ flex: 1 }}
                  />
                  <ListItemText
                    style={{ flex: "none" }}
                    secondary={`${exercises[key].reps} x ${exercises[key]
                      .sets}`}
                  />
                </ListItem>
              ))}
            </List>
          </ListItem>
        </Collapse>
      </div>
    );
  }
}

const WorkoutsList = props => {
  const { classes, workouts, exercises } = props;
  const woKeys = Object.keys(workouts);
  return (
    <Layout>
      <Paper className={classes.root}>
        <List style={{ padding: "1em" }}>
          <Typography type="headline">Workouts</Typography>
          {/* {workouts &&
          woKeys.map(key => <WorkoutItems title={workouts[woKeys].title} />)} */}
          {woKeys &&
            woKeys.map(key => (
              <WorkoutItems
                key={key}
                exercisesId={workouts[key].exercisesId}
                title={workouts[key].title}
                days={workouts[key].days}
                exercises={exercises}
              />
            ))}
        </List>
      </Paper>
    </Layout>
  );
};
const mapStateToProps = state => {
  return {
    workouts: state.workouts,
    exercises: state.exercises
  };
};
export default connect(mapStateToProps)(withStyles(styles)(WorkoutsList));
