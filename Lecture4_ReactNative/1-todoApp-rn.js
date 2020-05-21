import React from "react";
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'
// Demo is shown as gif in the same folder/github README

import Constants from 'expo-constants';


let id = 0;

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appContainer: {
    paddingTop: Constants.statusBarHeight,
  },
  fill: {
    flex: 1,
  },
})

const Todo = props => (
  <View style={styles.todoContainer}>
  <Switch value={props.todo.checked} onValueChange={props.onToggle}/>
    <Button onPress={props.onDelete} title="delete"/>
    <Text>{props.todo.text}</Text>
  </View>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = `TODO number ${id}`
    this.setState({
      //... -->pulls out all the values of the array and puts it in a new one
      //AKA cloning the array
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>
          Unchecked todo count:{" "}
          {this.state.todos.filter(todo => !todo.checked).length}
        </Text>
        <Button onPress={() => this.addTodo()} title="Add TODO"/>
        <ScrollView style={styles.fill}>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}