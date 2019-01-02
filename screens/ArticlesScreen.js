import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ArticlesListView from '../components/articles/ArticlesListView';

export default class ArticlesScreen extends React.Component {
  static navigationOptions = {
    title: 'Articles',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ArticlesListView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
