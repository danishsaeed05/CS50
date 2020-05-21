import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import vibrate from './utils/vibrate'

export default class App extends React.Component {
  constructor() {
    super()
    /* Default values according to WikiPedia/Assignment Guidelines*/
    this.workTime = 25 * 60
    this.breakTime = 5 * 60

    this.state = {
      timeFor: this.workTime,
      title: "Work Time",
      counting: false,
    }
  }

  componentDidMount() {
    this.timer()
  }

  componentDidUpdate() {
    this.update()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  /* Timer starts here */
  timer = () => {
    this.interval = setInterval(() => {
      this.setState({
        timeFor: this.state.timeFor - 1,
        counting: true,
      })
    }, 1000)
  }

  /* Update it as it hits past 0 */
  update = () => {
    if (this.state.timeFor < 0) {
      vibrate()
      clearInterval(this.interval)
      if (this.state.title === "Work Time") {
        this.setState({
          title: "Break Time",
          counting: true,
          timeFor: this.breakTime,
        })
      } else {
        this.setState({
          title: "Work Time",
          counting: true,
          timeFor: this.workTime,
        })
      }
      this.timer()
    }
  }

  /* Reset button */
  reset = () => {
    clearInterval(this.interval)
    this.state.title === "Work Time" ?
      this.setState({
        timeFor: this.workTime,
        counting: false,
      })
      :
      this.setState({
        timeFor: this.breakTime,
        counting: false,
      })
  }

  /* Pause Timer */
  pause = () => {
    this.setState({ counting: false });
    clearInterval(this.interval);
  };

  /* User Work Time Input Data */
  workUserInput = (time, unitType) => {
    this.sec
    this.min
    this.totalTime
    clearInterval(this.interval)
    console.log(time)
    unitType === "min" ?
      this.min = parseInt(time) * 60
      :
      this.sec = parseInt(time)

    this.totalTime = (this.min || 0) + (this.sec || 0)
    this.workTime = this.totalTime

    /* Prevents interruption while countdown is in Break Time and modification are being
    made to Work Time */
    this.state.title !== "Break Time" ?
      this.setState({ timeFor: this.workTime, counting: false })
      :
      this.setState({ counting: false })
  }

  /* User Break Time Input Data */
  breakUserInput = (time, unitType) => {
    this.sec
    this.min
    this.totalTime
    clearInterval(this.interval)
    console.log(time)
    unitType === "min" ?
      this.min = parseInt(time) * 60
      :
      this.sec = parseInt(time)

    this.totalTime = (this.min || 0) + (this.sec || 0)
    this.breakTime = this.totalTime

    /* Prevents interruption while countdown is in Work Time and modification are being
    made to Break Time */
    this.state.title !== "Work Time"?
      this.setState({timeFor: this.breakTime,counting: false})
    :
      this.setState({counting: false})
  }


  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.titleText}>Pomodoro Timer</Text>
        <Text style={styles.breakTime}>{this.state.title}</Text>

        <Text>{this.state.timeFor / 60 < 10 ? "0" : ""}{Math.floor(this.state.timeFor / 60)} : {this.state.timeFor % 60 <= 9 ? "0" : ""}{this.state.timeFor % 60}</Text>
        <Button title="Reset" onPress={this.reset} />

        {this.state.counting
          ? <Button title="Pause" onPress={this.pause} />
          : <Button title="Start" onPress={this.timer} />
        }

        <Text style={styles.inputFieldsTitle}>Input Work Time</Text>
        <TextInput
          style={styles.textInputBox}
          onChangeText={numMin => this.workUserInput(numMin, "min")}
          placeholder="Enter minutes"
          placeholderTextColor="gray"
          keyboardType='numeric'
        />
        <TextInput
          style={styles.textInputBox}
          onChangeText={numSec => this.workUserInput(numSec, "sec")}
          placeholder="Enter seconds"
          placeholderTextColor="gray"
          keyboardType='numeric'
        />

        <Text style={styles.inputFieldsTitle}>Input Break Time</Text>
        <TextInput
          style={styles.textInputBox}
          onChangeText={numMin => this.breakUserInput(numMin, "min")}
          placeholder="Enter minutes"
          placeholderTextColor="gray"
          keyboardType='numeric'
        />
        <TextInput
          style={styles.textInputBox}
          onChangeText={numSec => this.breakUserInput(numSec, "sec")}
          placeholder="Enter seconds"
          placeholderTextColor="gray"
          keyboardType='numeric'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    borderColor: 'black',
    borderRadius: 10,
    overflow: "hidden",
  },
  breakTime: {
    marginBottom: 40,
    fontSize: 20,
    color: "green",
  },
  inputFieldsTitle: {
    paddingTop: 8,
  },
  titleText: {
    marginTop: 5,
    color: 'red',
    fontSize: 40,
    textAlignVertical: 'top',
    paddingBottom: 60,
    alignContent: "center",
    fontWeight: 'bold',
  },
});
