import React from 'react';
import BaseScreen from './BaseScreen'
import ArticleDetailView from '../components/articles/ArticleDetailView'

export default class ArticleDetailScreen extends BaseScreen {
  static navigationOptions = {
    title: '',
  };

  render() {
    return (
      <ArticleDetailView navigation={this.props.navigation}  />
    );
  }
}
