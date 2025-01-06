import React from 'react'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useSearchParams } from 'expo-router/build/hooks';

const ChatScreen = () => {
  //to know which id has been pressed in chatList screen
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const username = searchParams.get('username');
  
  return (
    <ThemedView>
        <ThemedText>This is chat screen</ThemedText>
        <ThemedText>Name: {username}</ThemedText>
    </ThemedView>
  )
}

export default ChatScreen;