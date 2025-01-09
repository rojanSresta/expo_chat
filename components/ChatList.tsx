import {
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import contactData from "../Data.json";
import { useRouter } from "expo-router";

interface Message{
  send: boolean;
  msg: string;
}

interface ContactPropType{
  id: number;
  contactName: string;
  profilePic: string;
  lastMessage: string;
  messages: Message[];
}

const ChatList = () => {
  const router = useRouter();

  const renderItem = ({ item }: {item: ContactPropType}) => {

    const navigateToChatScreen = () => {
      router.push(`/chat?id=${item.id}&contactName=${encodeURIComponent(item.contactName)}`);
    };

    return (
      <TouchableOpacity
        onPress={navigateToChatScreen}
      >
        <ThemedView style={styles.container}>
          <Image style={styles.profilePic} source={{ uri: item.profilePic }} />
          <ThemedView>
            <ThemedText style={styles.contactName}>{item.contactName}</ThemedText>
            <ThemedText style={styles.lastMsg}>{item.lastMessage}</ThemedText>
          </ThemedView>
        </ThemedView>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList
        data={contactData.contacts}
        keyExtractor={(contact) => contact.id.toString()}
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
  contactName: {
    fontSize: 18,
  },
  lastMsg: {
    marginTop: 8,
    color: "gray",
  },
});
