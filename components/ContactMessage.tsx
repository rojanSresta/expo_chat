import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import userData from "../Data.json";

const ContactMessage = () => {
  return (
    <>
      <FlatList
        data={userData.users}
        keyExtractor={user=>user.id.toString()}
        renderItem={({ item }) => (
          <ThemedView style={styles.container}>
            <Image
              style={styles.profilePic}
              source={{uri: item.profilePic}}
            />
            <ThemedView>
              <ThemedText style={styles.userName}>{item.username}</ThemedText>
              <ThemedText style={styles.lastMsg}>{item.lastMessage}</ThemedText>
            </ThemedView>
          </ThemedView>
        )}
      />
    </>
  );
};

export default ContactMessage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: "flex",
    flexDirection: "row",
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
  },
  lastMsg: {
    marginTop: 5,
    color: "gray",
  },
});
