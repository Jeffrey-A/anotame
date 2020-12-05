import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";

import ListItem from "./ListItem";

function ContactsTab(props) {
  const data = props.data;
  const isContactsTabActive = props.activeTab === "contacts";

  if (data.length && isContactsTabActive) {
    return (<FlatList
      data={data}
      renderItem={({ item }) => <ListItem item={item} />}
    />);
  }
}

export default ContactsTab;
