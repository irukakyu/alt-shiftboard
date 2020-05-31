import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Header,
} from 'react-native-elements'

import Now from './Now';
import SelectDay from './SelectDay';

export default function App() {
  return (
    <View>
      <Header
        leftComponent={{ icon: 'star', color: '#fff' }}
        centerComponent={{ text: 'ALTERNATIVE SHIFTBOARD', style: { color: '#fff' } }}
        rightComponent={{ icon: 'star', color: '#fff' }}
        containerStyle = {{
          backgroundColor: '#000'
        }}
      />
      <Now />
      <SelectDay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});