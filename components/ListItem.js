import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default function ListItem({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{item.name}</Text>
      <Text>{item.date}</Text>
      <Text>{item.time}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#eee',
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent:'space-between'
    }
});
