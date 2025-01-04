import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ContactMessage from '@/components/ContactMessage';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.heading}>Chats</ThemedText>
        <Image style={styles.searchImg} source={require('@/assets/images/search.png')}/>
      </ThemedView>
      <ThemedView>
        <ContactMessage />
        {/* make a profile section where we grab the data from the database and for now make a json file which acts as a databse and we can use it show profile picture, name of the user and then the last message sent */}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 40
  },
  header:{
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  searchImg:{
    width: 30,
    height: 30
  }
});
