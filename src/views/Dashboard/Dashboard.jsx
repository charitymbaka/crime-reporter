import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
// @material-ui/icons
import ContentCopy from '@material-ui/icons/ContentCopy';
import Store from '@material-ui/icons/Store';
import InfoOutline from '@material-ui/icons/InfoOutline';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Alert from '@material-ui/icons/ErrorOutline';
import AlertNew from '@material-ui/icons/AddAlert';
import Pending from '@material-ui/icons/Error';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';

// core components
import GridItem from 'components/Grid/GridItem.jsx';
import Danger from 'components/Typography/Danger.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

// airship

import { DonutChart } from '@carto/airship';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from 'variables/charts';

import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle.jsx';

import { getFeatureCount, getFeaturesSummary } from '../../utils';
import { DATA_REQUEST } from '../../constants/actionTypes';

import robbery from './robberyicon.png';
import vandalism from './vandalismicon.png';
import burglary from './burglaryicon.png';
import drugUse from './druguseicon.png';
import corruption from './corruptionicon.png';

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const { classes, data } = this.props;
    let summary;
    if (data.features.length) {
      summary = getFeaturesSummary(data);
    }
    return (
      <div>
        <Grid container>
         
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              
              <CardIcon color="info"><img width={60} height={60} src={robbery} /></CardIcon>   
                <p className={classes.cardCategory}>Robbery </p>
                <h3 className={classes.cardTitle}>
                  {getFeatureCount(data, 'robbery')}
                </h3>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Robberies reported
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          

          <GridItem xs={12} sm={6} md={3}>
            <Card>
              
                <CardIcon color="info"><img width={60} height={60} src={vandalism} /></CardIcon> 
                <p className={classes.cardCategory}>Vandalism</p>
                <h3 className={classes.cardTitle}>
                  {getFeatureCount(data, 'vandalism')}
                </h3>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Vandalism Cases
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          

          <GridItem xs={12} sm={6} md={3}>
            <Card>
              
                <CardIcon color="info"><img width={60} height={60} src={burglary} /></CardIcon> 
                <p className={classes.cardCategory}>Burglary</p>
                <h3 className={classes.cardTitle}>
                  {getFeatureCount(data, 'burglary')}
                </h3>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange /> Burglary Cases
                </div>
              </CardFooter>
            </Card>
          </GridItem>
         

          <GridItem xs={12} sm={6} md={3}>
            <Card>
              
              <CardIcon color="info"><img width={60} height={60} src={drugUse} /></CardIcon> 
                <p className={classes.cardCategory}>Drug Use </p>
                <h3 className={classes.cardTitle}>
                  {getFeatureCount(data, 'drugUse')}
                </h3>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Drug Use Cases
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          

          <GridItem xs={12} sm={6} md={3}>
            <Card>
              
              <CardIcon color="info"><img width={60} height={60} src={corruption} /></CardIcon> 
                <p className={classes.cardCategory}>Corruption </p>
                <h3 className={classes.cardTitle}>
                  {getFeatureCount(data, 'corruption')}
                </h3>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Corruption Cases
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
       

        <Grid container>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Cases</h4>
                <p className={classes.cardCategory}>
                  Cases reported within this week
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
         

          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader>
                <DonutChart data={summary} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Case Distribution</h4>
                {/* <p className={classes.cardCategory}>Cases Reported</p> */}
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime />
                </div>
              </CardFooter>
            </Card>
          </GridItem>
         

          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Frequency</h4>
                <p className={classes.cardCategory}>
                  Frequency of Cases Reported Today
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.map.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchData: () => {
      dispatch({ type: DATA_REQUEST });
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default withStyles(dashboardStyle)(withConnect);
