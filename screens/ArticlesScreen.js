import React from 'react';
import ArticlesListView from '../components/articles/ArticlesListView';
import { Articles } from "../data/Articles";

export default class ArticlesScreen extends React.Component {
  static navigationOptions = {
    title: 'Articles',
  };

  render() {
    console.debug("Render: " + this.constructor.name);

    return (
      <ArticlesListView navigation={this.props.navigation} articles={Articles} />
    );
  }
}
