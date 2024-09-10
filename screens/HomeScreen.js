import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeFeed from '../components/HomeFeed';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeFeed />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default HomeScreen;
