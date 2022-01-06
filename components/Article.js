import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

const Article = ({ route, navigation }) => {
  const data = route.params;
  return (

    <View>
      <ScrollView>
      <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 6, margin: 3, marginVertical: 20, borderColor: 'red', borderWidth: 1, backgroundColor: '#FFD580' }}>{data.title}</Text>
      <View style={{ borderWidth: 1, borderColor: 'grey', backgroundColor: '#FFFDD9', flex: 1, flexDirection: 'column' }}>
        <Image
          style={
            { margin: 5, height: 250, padding: 10, flex: 1, flexDirection: 'row-reverse' }
          }
          source={{
            uri: data.urlToImage,
          }}
        />
        <Text style={{ fontWeight: 'normal', padding: 5, margin: 3, marginHorizontal: 7 }}>{data.description}</Text>
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} style={{ marginTop: 15 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});
export default Article;
