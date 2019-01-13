import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import BaseScreen from './BaseScreen'

export default class SettingsScreen extends BaseScreen {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
