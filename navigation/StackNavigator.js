import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ArticlesScreen from '../screens/ArticlesScreen';
import TabViewScreen from '../screens/TabViewScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ArticleDetailScreen from "../screens/ArticleDetailScreen";

export const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

export const ArticlesStack = createStackNavigator({
  Articles: ArticlesScreen,
  ArticleDetail: ArticleDetailScreen,
});

export const TabViewStack = createStackNavigator({
  TabView: TabViewScreen,
  ArticleDetail: ArticleDetailScreen,
});

export const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

export const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});
