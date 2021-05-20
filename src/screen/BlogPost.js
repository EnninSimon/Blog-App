import React from 'react'
import { SafeAreaView, FlatList, TouchableOpacity, Touchable } from "react-native"
import Post from '../component/Post'
import Image1 from '../../assets/blogOne.jpg'
import Image2 from '../../assets/blogTwo.jpg'
import Image3 from '../../assets/blogThree.jpg'
import Image4 from '../../assets/blogFour.jpg'



export default function BlogPost({ navigation }) {
    const blog = [
        { imgUrl: Image1, reporter: 'Harry Lois', time: '9', headline: "Supermicro: We Put Two 10nm Ice Lake Xeon LGA4189 Sockets on an ATX Motherboard" },
        { imgUrl: Image2, reporter: 'Phynx Aura', time: '5', headline: 'Your company is scaling fast. This is how you can grow at the same rapid pace' },
        { imgUrl: Image3, reporter: 'Derick Konn', time: '3', headline: '‘Privacy by design’: Google to give people more power over their personal data' },
        { imgUrl: Image4, reporter: 'Ann Yille', time: '14', headline: 'How to Shop For a Classic Car' }
    ];




    return (
        <SafeAreaView>

            <FlatList
                data={blog}
                renderItem={({ item }) => {
                    return (
                    <TouchableOpacity onPress={() => { navigation.navigate('Movie Review', { newAuthor: item.reporter, newTime: item.time, newTitle: item.headline, newPhoto: item.imgUrl }) }}>
                        <Post
                        author={item.reporter}
                        duration={item.time}
                        photo={item.imgUrl}
                        title={item.headline}
                    />
                    </TouchableOpacity>)
                }}
                keyExtractor={(item) => item.time}
            />
        </SafeAreaView>
    )
}

