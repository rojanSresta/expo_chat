import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useSearchParams } from "expo-router/build/hooks";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ChatScreen = () => {
  const searchParams = useSearchParams();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.topSection}>
        <ThemedView style={styles.navFirstPart}>
          <TouchableOpacity>
            <Text style={styles.backBtn}>&larr;</Text>
          </TouchableOpacity>
          <Text style={styles.name}>{searchParams.get("username")}</Text>
        </ThemedView>
        <ThemedView style={styles.calls}>
          <Text style={styles.icons}>C</Text>
          <Text style={styles.icons}>V</Text>
          <Text style={styles.icons}>I</Text>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.chatSection}>
      <ThemedText>Chats will come here</ThemedText>
      </ThemedView>
      <ThemedView style={styles.typeSection}>
      <ThemedText>Typing, voice and file sending will come here</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  topSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 5
    // position: 'absolute'
  },
  navFirstPart:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backBtn: {
    fontSize: 29,
    color: "white",
    fontWeight: "bold",
  },
  name: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginTop: 8,
    marginLeft: 8,
  },
  calls:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  icons: {
    color: 'white',
    marginHorizontal: 5,
    fontSize: 17
  }
});
