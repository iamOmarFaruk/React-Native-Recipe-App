import React from 'react';

import { ScrollView, StyleSheet, Text , View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function AllCategoriesScreen() {
  return (
     
     <View style={styles.screenContainer}>
           <ScrollView contentContainerStyle={styles.contentContainer}>
             <Text>All Categories</Text>
             <Text>All Categories</Text>
             <Text>All Categories</Text>
             <Text>All Categories</Text>
             <Text>All Categories</Text>
             <Text>All Categories</Text>
             <Text>All Categories</Text>
           </ScrollView>
      </View>
    
    
    
  );
}


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom:10, // Space for Footer to avoid overlap
  },
});
