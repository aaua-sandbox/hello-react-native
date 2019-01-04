import React from 'react';
import BaseComponent from '../components/BaseComponent'
import ArticlesListView from '../components/articles/ArticlesListView';
import ArticlesModel from "../model/ArticlesModel"

export default class ArticlesScreen extends BaseComponent {
  static navigationOptions = {
    title: 'Articles',
  };

  render() {
    return (
      <ArticlesListView navigation={this.props.navigation} articles={new ArticlesModel()} />
    );
  }
}
