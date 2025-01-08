import React, { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useSearchParams } from "expo-router/build/hooks";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme } from "react-native";
import data from "@/Data.json"
import { IconSymbol } from "@/components/ui/IconSymbol";
import { loadPartialConfig } from "@babel/core";

const ChatScreen = () => {
  const [message, setMessage] = useState<string>('');
  const colorScheme = useColorScheme();
    
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  const handleMessageSent = ()=>{
    console.log("message sent");
    
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.topSection}>
        <ThemedView style={styles.navFirstPart}>
          <TouchableOpacity>
            <Text style={styles.backBtn}>&larr;</Text>
          </TouchableOpacity>
          <Image
            source={{
              uri: data.users.find(user=>user.id.toString() === userId)
                ?.profilePic || 'https://as1.ftcdn.net/v2/jpg/02/99/15/90/1000_F_299159013_99C8UfXfWP6wJJD5C2szwH4pw9pfS8PR.jpg',
            }}
            style={styles.profilePic}
          />
          <Text style={styles.name}>
            {searchParams.get("username")?.split(' ')[0]}
          </Text>
        </ThemedView>
        <ThemedView style={styles.calls}>
          <Text style={styles.icons}>C</Text>
          <Text style={styles.icons}>V</Text>
          <Text style={styles.icons}>I</Text>
        </ThemedView>
      </ThemedView>
      <ScrollView style={styles.chatSection}>
        <ThemedText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora  itaque! Illo aspernatur maxime impedit molestiae!</ThemedText>
      </ScrollView>
      <ThemedView style={styles.typeSection}>
        <TextInput placeholder="Message"
        placeholderTextColor={'white'}
        onChangeText={(newMsg)=>setMessage(newMsg)}
        defaultValue={message}
        style={styles.typeBox}/>
        <TouchableOpacity onPress={handleMessageSent}>
          <IconSymbol size={28} name="paperplane.fill" color={colorScheme ?? 'light'}/>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    height: "100%",
  },
  topSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    height: "10%",
  },
  navFirstPart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backBtn: {
    fontSize: 29,
    color: "white",
    fontWeight: "bold",
  },
  name: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    marginTop: 8,
    marginLeft: 8,
  },
  calls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icons: {
    color: "white",
    marginHorizontal: 5,
    fontSize: 17,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 10
  },
  chatSection: {
    height: "80%",
    backgroundColor: "red",
  },
  typeSection: {
    height: "10%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  typeBox:{
    color: 'white',
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    fontSize: 15
  }
});
