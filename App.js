import { PermissionsAndroid } from 'react-native';
import { StatusBar } from "expo-status-bar";
import * as Contacts from 'expo-contacts';
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


export default class App extends React.Component {
  constructor(props) {
    super(props);

    const items = [
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
    ];

    this.state = {
      items: items,
    }
  }

  componentDidMount() {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.EMAILS],
        }
        );

        if (data.length > 0) {
          this.setState({ items: data });
        }
      }
    })();
  }

  add() {
    
  }

  delete() {

  }

  render() {
    const {items } = this.state;
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
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 10,
  },
  header: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
