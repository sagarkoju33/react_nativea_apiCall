// AppBar.js
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const AppBar = ({
  title,
  onBackPress,
}: {
  title?: string;
  onBackPress?: (event: GestureResponderEvent) => void;
}) => {
  return (
    <View style={styles.container}>
      {onBackPress ? (
        <TouchableOpacity onPress={onBackPress} style={styles.icon}>
          <Ionicons name="arrow-back" color="red" size={30} />
        </TouchableOpacity>
      ) : (
        <View style={styles.icon} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: "#6200EE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  icon: {
    width: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppBar;
