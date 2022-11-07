import React, { useCallback, useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { GiftedChat } from 'react-native-gifted-chat';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ChatScreen = () => {
  const { setOptions } = useNavigation();
  const [messages, setMessages] = useState([]);
  const signOutNow = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    return null;
  }
  useEffect(() => {
    setOptions({
      title: 'Chat',
      headerStyle: { backgroundColor: '#fff' },
      headerTitleStyle: { color: 'black' },
      headerTintColor: 'black',
      headerLeft: () => (
        <View style={{ marginRight: 8 }}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png' }}
            style={{ width: 25, height: 25, borderRadius: 50 }} />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity style={{
          marginRight: 10
        }}
          onPress={signOutNow}
        >
          <Text>logout</Text>
        </TouchableOpacity>
      )
    })
  }, [setOptions]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('chats')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messagesFirestore = querySnapshot
          .docChanges()
          .map(({ doc }) => {
            const message = doc.data();
            return { ...message, createdAt: message.createdAt.toDate() };
          })
        console.log('====================================');
        console.log(messagesFirestore);
        console.log('====================================');
        setMessages(currentValue => {
          return [...messagesFirestore, ...currentValue]
        });
      }
      );
    console.log("messages");
    return () => unsubscribe();
  }, []);

  const onSend = useCallback((messages = []) => {
    const { _id, createdAt, text, user } = messages[0]
    console.log(messages[0])
    firestore()
      .collection('chats')
      .add({ _id, createdAt, text, user })
    // setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [messages]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={messages => onSend(messages)}
          user={{
            _id: auth()?.currentUser?.email,
            name: auth()?.currentUser?.displayName,
            avatar: auth()?.currentUser?.photoURL
          }}
          alwaysShowSend={true}
          messagesContainerStyle={{ backgroundColor: '#fff' }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ChatScreen;