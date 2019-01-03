import React from 'react';
import ArticleDetailView from '../components/articles/ArticleDetailView'

export default class ArticleDetailScreen extends React.Component {
  static navigationOptions = {
    title: '',
  };

  render() {
    console.debug("Render: " + this.constructor.name);

    return (
      <ArticleDetailView navigation={this.props.navigation}  />
    );
  }
}
