import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import BaseComponent from '../components/BaseComponent'

export default class SettingsScreen extends BaseComponent {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
