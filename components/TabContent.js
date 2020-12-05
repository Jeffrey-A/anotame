import { PermissionsAndroid } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Contacts from "expo-contacts";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";

import { TABS } from '../constants';

import ContactsTab from "./Contacts";
import ClientsTab from "./Clients";
import CallsTab from "./Calls";

export default function TabContent(props) {
    const { clients, calls, contacts, activeTab } = props;

    const tabs = {
      [TABS.CLIENT] : <ClientsTab data={clients} activeTab={activeTab} />,
      [TABS.CONTACT] : <ContactsTab data={contacts} activeTab={activeTab} />,
      [TABS.CALL] : <CallsTab data={calls} activeTab={activeTab} />,
    }

    const CurrentTabContent = tabs[activeTab];


    return CurrentTabContent;
}