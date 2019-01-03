import React from 'react';
import {StyleSheet, Image, Text, View, FlatList, TouchableOpacity} from 'react-native';
import BaseComponent from '../../components/BaseComponent'

export default class ArticlesListView extends BaseComponent {
  render() {
    const {navigation, articles} = this.props;
    return (
      <FlatList
        style={styles.container}
        data={articles}
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
