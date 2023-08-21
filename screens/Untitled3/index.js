import { TextInput } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{}} style={styles.wTZpYPlG}><RadioGroup style={styles.dGDdIpXD} radioButtons={[{
        id: "1",
        label: "Option 1",
        value: "option1"
      }, {
        id: "2",
        label: "Option 2",
        value: "option2"
      }]} layout="column"></RadioGroup><TextInput style={styles.GKkxhQfY}></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  wTZpYPlG: {
    width: 356,
    height: 636
  },
  dGDdIpXD: {
    width: 120,
    height: 70
  },
  GKkxhQfY: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled3;