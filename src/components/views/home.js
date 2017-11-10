import React, { Component } from "react";
import Layout from "../layout";
//import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import FaceIcon from "material-ui-icons/Face";
import HomeCard from "./homecard";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      a: ""
    };
  }
  render() {
    return (
      <Layout>
        <Paper>
          <div>
            <Avatar>
              <FaceIcon />
            </Avatar>
            <Typography>Welcome</Typography>
          </div>
        </Paper>
      </Layout>
    );
  }
}

export default Home;
