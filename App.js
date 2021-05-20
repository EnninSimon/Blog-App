import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BlogPost from './src/screen/BlogPost';
import DetailedPost from './src/screen/DetailedPost';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          options={{
            title: 'Discover',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
              color: '#00ffff'
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity>
                <Foundation name="thumbnails" size={30} color="black" style={{ marginLeft: 15, color: '#00ffff' }} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Feather name="search" size={30} color="black" style={{ marginRight: 15, color: '#00ffff' }} />
              </TouchableOpacity>
            ),
            headerStyle: {
              height: 125
            }
          }}
          name='Home'
          component={BlogPost} />
        <Stack.Screen
          options={{
            title: '',
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <Feather name="headphones" size={30} color="black" style={{ marginRight: 15, color: '#00ffff' }} />
                <Feather name="heart" size={30} color="black" style={{ marginRight: 15, color: '#00ffff' }} />
                <AntDesign name="sharealt" size={30} color="black" style={{ marginRight: 5, color: '#00ffff' }} />
              </View>
            ),
            headerStyle: {
              height: 125
            }
          }}
          name='Movie Review' component={DetailedPost} />

      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


