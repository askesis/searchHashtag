import React, {Component} from 'react';
import * as Actions from '../actions/Actions.js';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';

// mandatory
import 'react-s-alert/dist/s-alert-default.css';

// optional - you can choose the effect you want
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

class Notifications extends Component {

  componentDidUpdate(){
    this.alertS();
  }

  alertS(){
    if (this.props.notification.show){
      Alert.info('',{
        position: 'bottom-right',
        effect: 'slide',
        timeout: 12000,
        onShow:()=>{
          this.props.showAlert(false)
        },
        customFields:{
          count: this.props.notification.count
        }
      });
    }
  }
  render(){
    return(
      <div></div>
    )
  }
}

const NotificationsWithRedux = connect(
  state => ({
      notification: state.notification,
      test: state.test,
    }),
    {
      showAlert : Actions.showAlert,
    }
)(Notifications)


export default NotificationsWithRedux;