import { PermissionsAndroid } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Contacts from "expo-contacts";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";

import Tabs from "./components/Tabs";
import TabContent from "./components/TabContent";

import { TABS } from './constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      calls: [],
      clients: [],
      activeTab: TABS.CLIENT,
      tabs: [
        {
          title: "Clients",
          type: TABS.CLIENT,
        },
        {
          title: "Contacts",
          type: TABS.CONTACT,
        },
        {
          title: "Calls",
          type: TABS.CALL,
        },
      ],
    };

    this.activateTab = this.activateTab.bind(this);
  }

  componentDidMount() {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.EMAILS],
        });

        if (data.length > 0) {
          this.setState({ contacts: data });
        }
      }
    })();
  }

  activateTab(tabTitle) {
    const { tabs } = this.state;
    const updatedTabs = tabs.map((tab) => {
      tab.isActive = tab.title === tabTitle;
      return tab;
    });

    const activeTab = updatedTabs.filter((tab) => tab.title === tabTitle)[0];

    this.setState({ tabs: updatedTabs, activeTab: activeTab.type });
  }

  add() {}

  delete() {}

  render() {
    const { clients, calls, contacts, activeTab, tabs } = this.state;

    return (
      <View style={styles.mainWrapper}>
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <Text style={styles.logo}>Anotate</Text>
            <Button title="Search" />
          </View>
          <Tabs
            tabs={tabs}
            activateTab={this.activateTab}
            activeTab={activeTab}
          />
        </View>
        <TabContent
          activeTab={activeTab}
          clients={clients}
          calls={calls}
          contacts={contacts}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 10,
  },
  headerWrapper: {
    backgroundColor: "blue",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  logo: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
