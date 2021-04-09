import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Post } from '../components/Post';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';

const styles = theme => ({
  root: {}
});
const print2aApiHost = "https://print2a.com";
const print2aApiPort = "5757";
const print2aApiEndpoint = `${print2aApiHost}:${print2aApiPort}`;

class Latest extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  const [latest, setLatest] = useState([{title: "LOADING...", tags: "LOADING...", link: "#"}]);
  useEffect(() => {
    if (typeof window !== "undefined"){
      async function getLatest(){
        const req = await fetch(`${print2aApiEndpoint}/LatestProjects`);
        const res = await response.json();
        setProjects(res);
      }
      getLatest()
    }
  }, [])

  render () {
    const { classes } = this.props;
    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <header>
            <h1><Text>Latest Files</Text></h1>
          </header>
          {
            latest.map((file, index) => (
            <Post
              key={index}
              audio={{ silent: index > 4 }}
              data={{ ...file, id: 'file' + index }}
            />
          ))}
        </Secuence>
      </Main>
    )
  }
}

export default withStyles(styles)(Latest);
