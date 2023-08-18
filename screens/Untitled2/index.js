import { Pressable } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <Pressable><ScrollView contentContainerStyle={{
        backgroundColor: '#f0f0f1',
        padding: 10,
        position: 'relative',
        flex: 1
      }} style={styles.HUTLZwPr}></ScrollView></Pressable>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  HUTLZwPr: {
    width: 356,
    height: 164
  }
});
export default Untitled2;