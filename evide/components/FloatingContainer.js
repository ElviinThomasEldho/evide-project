import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import ProfileIcon from "./ProfileIcon.js";
// import { useTranslation } from 'react-i18next';
const Drawer = createDrawerNavigator();

const FloatingContainer = ({ navigation, children }) => {
  // const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.menuButtonContainer}>
        {/* Custom button with three lines */}
        <ProfileIcon
          onPress={() => navigation.toggleDrawer()} // Example onPress function
          imageSource={require("../assets/profile.png")} // Example image source
        />
      </View>

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 25,
    padding: "10%",
    position: "absolute",
    height: 200
  },
  textInput: {
    color: "black",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    width: "90%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#2675EC", // Set border color to #2675EC
    fontWeight: "600",
    borderWidth: 1.25,
    marginLeft: "10%",
    paddingLeft: "10%",
  },
  firstTextInput: {
    marginTop: "10%",
  },
  menuButtonContainer: {
    position: "absolute",
    top: "50%",
    left: "2%",
    padding: 10,
  },
  menuButton: {
    width: "200%",
    height: "100%",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "black",
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});

export default FloatingContainer;
