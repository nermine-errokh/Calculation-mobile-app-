import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => {
    const parsedNum1 = parseFloat(num1) || 0;
    const parsedNum2 = parseFloat(num2) || 0;

    switch (operation) {
      case "add":
        setResult(parsedNum1 + parsedNum2);
        break;
      case "subtract":
        setResult(parsedNum1 - parsedNum2);
        break;
      case "multiply":
        setResult(parsedNum1 * parsedNum2);
        break;
      case "divide":
        setResult(parsedNum1 / parsedNum2);
        break;
      default:
        break;
    }
  };

  const resetInputs = () => {
    setNum1("");
    setNum2("");
  };

  const resetResult = () => {
    setResult(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simplest Working Calculator</Text>
      <View style={styles.calculatorContainer}>
        <Text style={styles.resultText}>Result: {result}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter number 1"
          value={num1}
          onChangeText={(text) => setNum1(text)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter number 2"
          value={num2}
          onChangeText={(text) => setNum2(text)}
        />
        <View style={styles.buttonRow}>
          <Button title="Add" onPress={() => handleOperation("add")} />
          <Button title="Subtract" onPress={() => handleOperation("subtract")} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="Multiply" onPress={() => handleOperation("multiply")} />
          <Button title="Divide" onPress={() => handleOperation("divide")} />
        </View>
        <Button title="Reset Inputs" onPress={resetInputs} />
        <Button title="Reset Result" onPress={resetResult} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calculatorContainer: {
    width: "80%",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default App;
