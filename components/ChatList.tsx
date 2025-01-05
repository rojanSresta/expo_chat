import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import userData from "../Data.json";

const ChatList = () => {
  return (
    <>
      <FlatList
        data={userData.users}
        keyExtractor={user=>user.id.toString()}
        renderItem={({ item }) => (
          // add a onPress over here where when the user presses this section it should be redirected to another chat screen
          <TouchableOpacity> 
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
              </TouchableOpacity>
        )}
      />
    </>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
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
    marginTop: 8,
    color: "gray",
  },
});
