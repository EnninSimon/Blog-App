import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';








export default function Post({ author, duration, photo, title }) {


    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.background}>
                <Image
                    style={styles.image}
                    source={photo} />

                <View style={styles.PostDetail}>
                    <Text numberOfLines={4} style={styles.headLine}>
                        {title}
                    </Text>
                    <View style={styles.reporterDescription}>
                        <Image
                            style={styles.profile}
                            source={photo} />
                        <View style={styles.changeView}>
                            <Text numberOfLines={1}>{author}</Text>
                            <Text numberOfLines={1} style={styles.reporterMin}>
                            <FontAwesome5 name="book-reader" size={14} color="#bfc1c2" /> {duration}min
                            </Text>
                        </View>
                    </View>

                </View>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginVertical: 5,
        display: 'flex',
    },
    background: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderRadius: 10
    },
    image: {
        height: 180,
        borderRadius: 10,
        flex: 1
    },
    PostDetail: {
        textAlign: 'justify',
        marginHorizontal: 8,
        flex: 1
    },
    headLine: {
        fontSize: 23,
        fontWeight: 'bold',
        flex: 1,
    },
    reporterDescription: {
        flexDirection: 'row',
        display: 'flex',
    },
    profile: {
        height: 25,
        width: 25,
        borderRadius: 15,
        marginRight: 5,
        marginBottom: 5,
    },
    reporterMin: {
        color: '#bfc1c2',
        marginLeft: 5
    },
    repoterNameAndTime: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1
    },
    changeView: {
        display: 'flex',
        flexDirection: 'row',
    }
});