import {
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import userData from "../Data.json";
import { useRouter } from "expo-router";

const ChatList = () => {
  const router = useRouter();

  const renderItem = ({ item }: { item: any }) => {

    const navigateToChatScreen =()=>{
      router.push({
        pathname: '/chat',
        params: {
          id: item.id,
          username: item.username,
        },
      });
    };

    return (
      <TouchableOpacity
        onPress={navigateToChatScreen}
      >
        <ThemedView style={styles.container}>
          <Image style={styles.profilePic} source={{ uri: item.profilePic }} />
          <ThemedView>
            <ThemedText style={styles.userName}>{item.username}</ThemedText>
            <ThemedText style={styles.lastMsg}>{item.lastMessage}</ThemedText>
          </ThemedView>
        </ThemedView>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList
        data={userData.users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={renderItem}
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
