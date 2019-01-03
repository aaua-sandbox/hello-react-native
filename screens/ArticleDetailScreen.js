import React from 'react';
import BaseComponent from '../components/BaseComponent'
import ArticleDetailView from '../components/articles/ArticleDetailView'

export default class ArticleDetailScreen extends BaseComponent {
  static navigationOptions = {
    title: '',
  };

  render() {
    return (
      <ArticleDetailView navigation={this.props.navigation}  />
    );
  }
}
