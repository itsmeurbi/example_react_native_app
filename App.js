import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Form, Item, Input, Header, Left, Button, Icon, Right, Body, Content, Title } from 'native-base';
import  Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

async function loadFont (callback){
  await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });
  callback()
}


export default function App() {
  let [loading, setLoading] = useState(true)

  useEffect(()=>{
    loadFont(()=>{
      console.log('LoadingFonts')
      setLoading(false)
    });
  })


  if(!loading){
    console.log('rendering ')
    return(
      <View>
        <Header style={styles.header} >
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.font}>Main page</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome user</Text>
          <Image source={require('./assets/memegram_logo.png')} style={styles.logo}/>
          <Content style={styles.content}>
            <Form style={styles.form}>
              <Item style={styles.input}>
                <Input placeholder="Username" />
              </Item>
              <Item last style={styles.input}>
                <Input placeholder="Password" secureTextEntry={true}/>
              </Item>
              <Button bordered success rounded>
                <Text>Get inside</Text>
              </Button>
            </Form>
          </Content>
        </View>
      </View>
    );
  }else{
    console.log('elseee')
    return(
      <Text>Carganding...</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 90,
    width: 90,
  },
  header: {
    marginTop: 24,
    width: '100%',
    height: 42,
    backgroundColor: '#6EA4FA',
  },
  input: {
    width: 300,
    margin: 10,
  },
  form: {
    marginTop: 16,
    height: '100%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  content: {
    height: '100%',

  }
});
