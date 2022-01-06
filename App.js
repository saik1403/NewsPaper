import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, Header } from 'react-native';
import Headlines from './components/Headlines';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Article from './components/Article';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ backgroundColor: 'Green' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Headlines">
          <Stack.Screen name="Headlines" component={Headlines} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
          />
          <Stack.Screen name="Article" component={Article}  options={{
          headerTitle: props => 'Article',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: "yellow"
  }
});
