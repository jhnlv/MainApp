import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from './screens/HomePage'
import RemindersPage from './screens/RemindersPage'
import BellePage from './screens/BellePage'
import AboutUsPage from './screens/AboutUsPage'
import ProfilePage from './screens/ProfilePage'
import SearchPage from './screens/SearchPage'
import { Ionicons, Entypo } from '@expo/vector-icons';
import React from "react";
import { useFonts } from "expo-font";



const Tab = createBottomTabNavigator()

export default function tabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle:{
          position:'absolute',
          bottom: 20,
          left: 20,
          right:20,
          elevation: 1,
          borderRadius: 25,
          height: 60,
          backgroundColor:'#B7B8FF',

        }
      }}>
        <Tab.Screen name="HOME" component={HomePage} 
        options={{
          headerShown:false,
          tabBarIcon: ({focused}) => (
            <Entypo name="home" color={focused ? '#3D405B' : '#fff'} size={25}/>
          )
        }}/>

        <Tab.Screen name="SEARCH" component={SearchPage}  
        options={{
          headerTitleStyle:{ fontSize: 27, color: '#3D405B', fontWeight: 'bold'},
          headerTitleAlign: 'center',
          tabBarIcon: ({focused}) => (
            <Ionicons name="search"  color={focused ? '#3D405B' : '#fff'} size={30}/>
          )
        }}/>
       
        <Tab.Screen name="BELLE" component={BellePage}  
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo name="circle-with-plus"  color={focused ? '#3D405B' : '#B7B8FF'} size={60} 
              style={{top:-20, backgroundColor:'#fff', borderRadius:100, alignItems:'center'}}/>
          )
        }}/>

        <Tab.Screen name="REMINDERS" component={RemindersPage}  
        options={{
          headerTitleStyle:{ fontSize: 27, color: '#C999D6', fontWeight: 'bold'},
          headerTitleAlign: 'center',
          tabBarIcon: ({focused}) => (
            <Entypo name="bell"  color={focused ? '#3D405B' : '#fff'} size={25}/>
          )
        }}/>

        <Tab.Screen name="PROFILE" component={ProfilePage} 
        options={{
          headerTitleStyle:{ fontSize: 27, color: '#C999D6', fontWeight: 'bold'},
          headerTitleAlign: 'center',
          tabBarIcon: ({focused}) => (
            <Ionicons name="person"  color={focused ? '#3D405B' : '#fff'} size={25}/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


