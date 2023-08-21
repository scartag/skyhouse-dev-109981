import { FlatList } from "react-native";
import { View } from "react-native";
import { Slider } from "react-native-elements";
import { Pressable } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = ({
  route
}) => {
  const {} = route.params || {};
  return <SafeAreaView style={styles.safeArea}>
        <Pressable><ScrollView contentContainerStyle={{
        backgroundColor: '#f0f0f1',
        padding: 10,
        position: 'relative',
        flex: 1
      }} style={styles.HUTLZwPr}></ScrollView></Pressable>
    <Slider style={styles.YjbDObRr} thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><Slider style={styles.uWTEvvnJ} thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><FlatList style={styles.nVIitlpi} renderItem={({
      item
    }) => <View style={styles.sZHMYkXi}></View>} ItemSeparatorComponent={() => <View style={styles.AooSCjSS} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  HUTLZwPr: {
    width: 356,
    height: 164
  },
  YjbDObRr: {
    width: 150,
    height: 40
  },
  uWTEvvnJ: {
    width: 150,
    height: 40
  },
  nVIitlpi: {
    position: "absolute",
    width: 100,
    height: 150
  },
  sZHMYkXi: {
    width: 155,
    height: 51,
    backgroundColor: "#FFFFFF",
    position: "relative",
    left: 106,
    top: 224
  },
  AooSCjSS: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled2;