import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default () => {
  return (
    <View>
      <Text>Movies</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
};
