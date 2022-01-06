import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Article from './Article';
import apiData from '../apidata';

const Headlines = ({ navigation }) => {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=64d08af62bba4e2687452664ddc62afb';
    const [APIData, setAPIData] = React.useState(apiData.articles);
    //  useEffect(() => {
    //      fetch(url).then(res => {
    //          return res.json();
    //      })
    //          .then(data => {
    //              console.log(data.articles);
    //              setAPIData(data.articles);
    //              showdata(data.articles);
    //          })
    //          .catch(err => {
    //          })
    //  }, [url]);
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 25, borderColor: 'orange', paddingBottom: 5, borderWidth: 5, backgroundColor: 'red' }}>News paper</Text>
            <View >
                {APIData.map((articles, index) => {
                    return (
                        <TouchableOpacity
                            style={{ borderWidth: 1, borderColor: 'grey', padding: 5, marginVertical: 5, flex: 1, flexDirection: 'row', elevation: 2 }}
                            onPress={() => { navigation.navigate('Article', articles); }}
                            key={index}
                        >
                            <Image
                                style={
                                    { width: 90, height: 90, marginRight: 2 }
                                }
                                source={{
                                    uri: articles.urlToImage,
                                }}
                            />
                            <Text style={{ marginHorizontal: 4 }}>{articles.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        paddingHorizontal: 10
    }
});
export default Headlines;