import React from "react";

import ContactsTab from "./Contacts";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activateTab, tabs, activeTab } = this.props;

    return (
      <View style={styles.container}>
        {tabs.map((tab) => (
          <Text
            style={[styles.tabTitle, activeTab === tab.type ? styles.active : ""]}
            key={tab.title}
            onPress = {() => activateTab(tab.title)}
          >
            {tab.title}
          </Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabTitle: {
    textTransform: "uppercase",
  },
  active: {
    textDecorationLine: "underline",
  },
});

export default Tabs;
