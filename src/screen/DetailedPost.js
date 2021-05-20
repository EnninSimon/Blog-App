import React from 'react'
import { View, SafeAreaView, StyleSheet, Image, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { block } from 'react-native-reanimated';



export default function DetailedPost({ route }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

            <View style={styles.ImgContainer}>
                <Image
                    style={styles.blogImage}
                    source={route.params.newPhoto}
                />
            </View>


            <Text style={styles.Title}>{route.params.newTitle}</Text>

            <View style={styles.headtime}>
                <View style={styles.ReporterInfo}>
                    <Image
                        style={styles.Proimage}
                        source={route.params.newPhoto} />
                    <Text >{route.params.newAuthor}</Text>
                </View>
                <View style={styles.reporterTime}>
                    <FontAwesome5 name="book-reader" size={14} color="#bfc1c2" />
                    <Text style={styles.WritersMin}>{route.params.newTime}min</Text>
                </View>
            </View>
            <View style={styles.underline}>
                <Text style={styles.mainUnderline}></Text>
            </View>

            <View style={styles.PostContainer}>
                <Text style={styles.PostText}>
                    Usually, when vendors release dual-socket motherboards, this is typically done on larger form factors such as extended ATX (E-ATX)
                    and even larger ones such as SSB-EEB for server form factors.
                    Supermicro looks to buck the trend and has recently listed a pair of Intel
                    motherboards with dual LGA4189 sockets,
                    designed for Intel's latest Ice Lake 3rd Gen Xeon Scalable processors.
                    Both the Supermicro X12DPL-NT6 and X12DPL-i6 conform to the ATX form factor and have a very similar design. 
                    The key metrics include support for two Intel 3rd generation Ice Lake Xeon processors but also eight memory slots between the two, 
                    indicating that each processor runs in only quad-channel mode. This is important as some enterprise situations do not require the full memory bandwidth 
                    of eight memory channels, and thus having fewer physical 
                    channels on board helps with form factor as well as cost. That being said, this motherboard can support up 
                    to 2TB of DDR4-3200 ECC memory (1 TB per socket). 
                    Also, due to the size of the board, Supermicro recommends that only 185 W TDP processors maximum are used.
                    </Text>
            </View>

            <StatusBar style="auto" />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    ImgContainer: {
        marginVertical: 10
    },
    blogImage: {
        height: 300,
        width: '100%',
        borderRadius: 10
    },
    headtime: {
        flexDirection: 'row',
        marginTop: 10,
        flex: 2,
        marginHorizontal: 15,
        marginBottom: 10,
        marginLeft: 40
    },
    Title: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    Proimage: {
        height: 25,
        width: 25,
        borderRadius: 15,
        marginRight: '3%'
    },
    ReporterInfo: {
        flexDirection: 'row',
        marginRight: '5%',
        flex: 1
    },
    WritersMin: {
        color: '#bfc1c2',
        marginHorizontal: 6
    },
    reporterTime: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 3
    },
    PostContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    PostText: {
        fontSize: 17
    },
    underline: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainUnderline: {
        height: 4,
        width: 200,
        backgroundColor: '#00ffff',
        marginVertical: 10
    }
});