import { Image, StyleSheet, Platform, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import AddContact from "@/components/AddContact";
import ChatList from "@/components/ChatList";
import React, { useState } from "react";
import LoginScreen from "../login";

export default function HomeScreen() {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <>
      {login ? (
        <>
          <ThemedView style={styles.container}>
            <ThemedView style={styles.header}>
              <ThemedText style={styles.heading}>Chats</ThemedText>
              <Image
                style={styles.searchImg}
                source={require("@/assets/images/search.png")}
              />
            </ThemedView>
          </ThemedView>
          <ScrollView>
            <ChatList />
          </ScrollView>
          <AddContact />
        </>
      ) : (
        <LoginScreen setLogin={setLogin}/>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  header: {
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  searchImg: {
    width: 30,
    height: 30,
  },
});
