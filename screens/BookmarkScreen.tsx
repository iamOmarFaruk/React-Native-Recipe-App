import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native';

const BookmarkScreen = () => {
  const bookmarkedData = [
    { id: 1, title: 'Creamy Pasta' },
    { id: 2, title: 'Chicken Salad' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={bookmarkedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 16,
  },
});

export default BookmarkScreen;
