import React from 'react';
import {View, StyleSheet, TextInput, Button} from "react-native";

export const AddTodo = props => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input}/>
      <Button
        title='Add'
      />
    </View>
  )
};

const styles = StyleSheet.create({
  block: {
    // backgroundColor: '#3f2a89',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#3949ab'
  }
});
