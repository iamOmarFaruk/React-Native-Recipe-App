import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CategoriesComponent from '../components/CategoriesComponent';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Details Screen!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
         <CategoriesComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
