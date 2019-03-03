import React from 'react';
import { LayoutAnimation } from 'react-native'
import BaseComponent from '../components/BaseComponent'

export default class BaseScreen extends BaseComponent {
  componentWillUpdate() {
    // https://kang.hateblo.jp/entry/2018/10/20/234246
    LayoutAnimation.easeInEaseOut()
  }
}
