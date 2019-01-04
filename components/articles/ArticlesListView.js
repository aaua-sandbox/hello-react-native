import React from 'react';
import {StyleSheet, Image, Text, View, FlatList, TouchableOpacity, RefreshControl} from 'react-native';
import BaseComponent from '../../components/BaseComponent'

export default class ArticlesListView extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      navigation: props.navigation,
      articles: props.articles.get(),
    };
  }

  render() {
    const {navigation, articles} = this.state;
    return (
      <FlatList
        style={styles.container}
        data={articles}
        onEndReached={() => this._next()}
        refreshControl={
          <RefreshControl
            colors={["#9Bd35A", "#689F38"]}
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            style={styles.option}
            onPress={() => navigation.push('ArticleDetail', item)}
          >
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require('../../assets/images/robot-dev.png')}
                  fadeDuration={0}
                  style={{ width: 40, height: 40 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  {item.title}
                </Text>
                <Text style={styles.optionText}>
                  {item.author}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }

  _next() {
    this.setState({
      articles: [...this.state.articles, ...this.props.articles.get()],
    });
  }

  _onRefresh() {
    this.setState({refreshing: true});

    // NOTE: それっぽく見せるために少し待たせる
    this.sleep(1000);

    this.setState({
      refreshing: false,
      articles: this.props.articles.refresh(),
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
