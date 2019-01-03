import React from 'react';
import {StyleSheet, Image, Text, View, ScrollView, WebView} from 'react-native';
import { WebBrowser } from 'expo';
import Touchable from 'react-native-platform-touchable';
import BaseComponent from '../../components/BaseComponent'
import { Articles } from "../../data/Articles";
import ArticlesListView from "./ArticlesListView";

export default class ArticleDetailView extends BaseComponent {
  render() {
    const article = this.props.navigation.state.params;
    const related_articles = this._related_articles(Articles, 5);

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.articleTitle}>
          {article.title}
        </Text>

        <WebView
          style={styles.articleContent}
          originWhitelist={['*']}
          source={{ html: article.content }}
        />

        <Text style={styles.articleTitle}>
          元記事
        </Text>
        <Touchable
          background={Touchable.Ripple('#ccc', false)}
          style={styles.option}
          onPress={() => this._handlePressLink(article.url)}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../../assets/images/robot-dev.png')}
                fadeDuration={0}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                {article.url}
              </Text>
            </View>
          </View>
        </Touchable>

        <Text style={styles.articleTitle}>
          関連記事
        </Text>
        <ArticlesListView navigation={this.props.navigation} articles={related_articles} />
      </ScrollView>
    );
  }

  _related_articles = (array, num) => {
    let a = array;
    let t = [];
    let r = [];
    let l = a.length;
    let n = num < l ? num : l;
    while (n-- > 0) {
      let i = Math.random() * l | 0;
      r[n] = t[i] || a[i];
      --l;
      t[i] = t[l] || a[l];
    }
    return r;
  };

  _handlePressLink = (url) => {
    WebBrowser.openBrowserAsync(url);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
  articleTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 24,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
  articleContent: {
    // NOTE: 高さの自動調整はwebview内部と連携する必要がある
    height: 485,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 9,
  },
});
