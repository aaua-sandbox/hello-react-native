import React from 'react';
import BaseScreen from './BaseScreen'
import ArticlesListView from '../components/articles/ArticlesListView';
import ArticlesModel from "../model/ArticlesModel"

export default class ArticlesScreen extends BaseScreen {
  static navigationOptions = {
    title: 'Articles',
  };

  render() {
    return (
      <ArticlesListView navigation={this.props.navigation} articles={new ArticlesModel()} />
    );
  }
}
