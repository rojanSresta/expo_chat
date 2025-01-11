import React, { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useSearchParams } from "expo-router/build/hooks";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import contactData from "@/Data.json";

const ChatScreen = () => {
  const [message, setMessage] = useState<string>("");
  const searchParams = useSearchParams();

  // get method always returns a string | null value
  const contactId = searchParams.get("id");

  if (!contactId) {
    throw new Error("ID is null");
  }

  const messageRecord = contactData.contacts[parseInt(contactId) - 1].messages;

  const handleMessageSent = () => {
    contactData.contacts[parseInt(contactId)-1].messages.push({
      "send": true,
      "msg": message
    })
    setMessage("");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.topSection}>
        <ThemedView style={styles.navFirstPart}>
          <TouchableOpacity>
            <Text style={styles.backBtn}>&larr;</Text>
          </TouchableOpacity>
          <Image
            source={{
              uri:
                contactData.contacts[parseInt(contactId) - 1].profilePic ??
                "https://randomuser.me/api/portraits/women/44.jpg",
            }}
            style={styles.profilePic}
          />
          <Text style={styles.name}>
            {searchParams.get("contactName")?.split(" ")[0]}
          </Text>
        </ThemedView>
        <ThemedView style={styles.calls}>
          <Text style={styles.icons}>C</Text>
          <Text style={styles.icons}>V</Text>
          <Text style={styles.icons}>I</Text>
        </ThemedView>
      </ThemedView>

      <ScrollView style={styles.chatSection}>
        {messageRecord.map((message, index) =>
          message.send ? (
            <ThemedView key={index} style={styles.msgBoxSend}>
              <ThemedText style={styles.sendMsgText}>{message.msg}</ThemedText>
            </ThemedView>
          ) : (
            <ThemedView key={index} style={styles.msgBoxRecieve}>
              <ThemedText style={styles.receiveMsgText}>
                {message.msg}
              </ThemedText>
            </ThemedView>
          )
        )}
      </ScrollView>

      <ThemedView style={styles.typeSection}>
        <TextInput
          placeholder="Message"
          placeholderTextColor={"white"}
          onChangeText={(newMsg) => setMessage(newMsg)}
          defaultValue={message}
          style={styles.typeBox}
        />
        <TouchableOpacity onPress={handleMessageSent}>
          <Image
            style={styles.sendIcon}
            source={require("@/assets/images/send.png")}
          />
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
    marginLeft: 10,
  },
  chatSection: {
    height: "auto",
    padding: 5,
    paddingTop: 10,
    backgroundColor: "#202129",
  },
  typeSection: {
    height: "12%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 35,
    paddingHorizontal: 5,
    marginVertical: 15,
  },
  typeBox: {
    color: "white",
    fontSize: 15,
    backgroundColor: "gray",
    width: "88%",
    borderRadius: 50,
    paddingHorizontal: 15,
    height: 40,
  },
  sendIcon: {
    width: 30,
    height: 30,
  },
  msgBoxSend: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6", 
    padding: 10, 
    borderRadius: 10, 
    maxWidth: '75%',
    marginBottom: 8,
  },
  sendMsgText: {
    fontSize: 16,
    color: "#000",
  },
  msgBoxRecieve: {
    alignSelf: "flex-start", 
    backgroundColor: "#FFFFFF", 
    padding: 10, 
    borderRadius: 10, 
    maxWidth: "75%", 
    marginBottom: 8, 
    borderWidth: 1, 
    borderColor: "#E0E0E0", 
  },
  receiveMsgText: {
    fontSize: 16, 
    color: "#000", 
  },
});
