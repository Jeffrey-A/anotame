import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import ContactsWrapper from "react-native-contacts-wrapper";
import ListItem from "./components/ListItem";

export default function App(props) {
  const [items, setItem] = useState([
    {
      name: "John Due 1",
      date: "02/27/2020",
      time: "10:00 pm",
    },
    {
      name: "John Due 2",
      date: "02/27/2020",
      time: "10:00 pm",
    },
    {
      name: "John Due 3",
      date: "02/27/2020",
      time: "10:00 pm",
    },
  ]);
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.header}>
        <Text style={styles.logo}>Anotate</Text>
        <Button title="Add" />
      </View>

      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 10,
    paddingTop: 20,
  },
  header: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
