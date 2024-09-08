import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { fetchUserData } from '../services/apiService'; // Adjust the import path

const HomePage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    };

    getUserData();
  }, []);

  const renderItem = ({ item }) => (
    <Text style={styles.item}>{item.name}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    fontSize: 18,
    padding: 8,
  },
});

export default HomePage;