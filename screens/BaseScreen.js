import React from 'react';
import { LayoutAnimation } from 'react-native'
import BaseComponent from '../components/BaseComponent'

export default class BaseScreen extends BaseComponent {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }
}
