import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const HomeFeed = () => {
  const [posts, setPosts] = useState([]);

  // Function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/posts'); // Use your backend endpoint
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts: ', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPost = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.userInfo}>
        <Image source={{ uri: item.user.profilePicUrl }} style={styles.profileImage} />
        <Text style={styles.username}>{item.user.username}</Text>
      </View>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <View style={styles.actionsRow}>
        <TouchableOpacity>
          <Text>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>📤</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.likeCount}>{item.likes} likes</Text>
      <Text style={styles.caption}><Text style={styles.username}>{item.user.username}</Text> {item.caption}</Text>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  postCard: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  likeCount: {
    fontWeight: 'bold',
  },
  caption: {
    marginTop: 5,
  },
});

export default HomeFeed;
