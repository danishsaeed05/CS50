import * as React from 'react';
import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  blockJS()
  {
    console.log('blocking!')
    const done = Date.now() + 5000
    while(Date.now() < done)
      {
        
      }
      console.log('unblocked!')
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Button title="block js" onPress={() => this.blockJS()} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
