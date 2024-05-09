import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';




export default function HomePage() {
  const [isModalVisible, setIsModalVisible] =useState(false);
  return (
    <SafeAreaView style={styles.safeContainer}>

   
    <View style={styles.container}>
      <Text style={styles.Title}>Hello, Name!</Text>
      <Text style={styles.subTitle}>Create Reminders Just For You.</Text>
    </View>

    <View style={styles.dateContainer} >
      <Text style={styles.dateText}>May 09, 2024</Text>
      <Text style={styles.dateText}>Thursday</Text>
    </View>

    <View style={styles.TodayRemCon} >
        <View style={{alignItems: 'flex-end'}}>
          <Image source={require('../assets/images/todays_reminder.png')} 
            style={styles.todayRemPic}/>
        </View>
      <Text style={styles.todayRemTitle}>Today's</Text>
      <Text style={styles.todayRemTitle}>Reminder</Text>
      <Text style={styles.todayRemsubTitle}>8:00 - 9:00</Text>
      <Text style={styles.todayRemDesc}>Quiz for Intro To AI at ILearn U</Text>
    </View>

    <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View style={{width: 60, height: 60, backgroundColor: '#EDBBFA', borderRadius:10, justifyContent: 'center', alignItems: 'center'}}>
        <FontAwesome5 name="check" size={26} color="#fff" />

        <Modal visible={isModalVisible} 
              onRequestClose={() => setIsModalVisible(false)}
              transparent={true}
              animationType='slide'
             >
          <View style={styles.modalContainer}>
          <View style={styles.CompRemModal}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#3D405B'}}>COMPLETED REMINDERS</Text>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <MaterialIcons name="keyboard-arrow-down" size={25} color= '#3D405B'/>
            </TouchableOpacity>
          </View>
          </View>
        </Modal>
        </View>
        <Text style={styles.remTitle}>COMPLETED</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View style={{width: 60, height: 60, backgroundColor: '#B4D2FF', borderRadius:10, justifyContent: 'center', alignItems: 'center'}}>
        <FontAwesome5 name="clock" size={26} color="#fff" />
        <Modal visible={isModalVisible} 
              onRequestClose={() => setIsModalVisible(false)}
              transparent={true}
              animationType='slide'
             >
          <View style={styles.modalContainer}>
          <View style={styles.CompRemModal}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#3D405B'}}>UPCOMING REMINDERS</Text>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <MaterialIcons name="keyboard-arrow-down" size={25} color= '#3D405B'/>
            </TouchableOpacity>
          </View>
          </View>
        </Modal>
        </View>
        <Text style={styles.remTitle}>UPCOMING</Text>
      </TouchableOpacity>      
    </View>

    <View style={styles.belleCon}>
      <Image source={require('../assets/images/belle_blob.png')} style={styles.belleBlob}/>
      <Image source={require('../assets/images/belle.png')} style={styles.bellePic}/>
    </View>

    <View style={{alignItems: 'flex-end', marginRight: 20}}>
    <Text style={styles.belleTitle}>TRY ASKING BELLE</Text>
    <Text style={styles.bellSubtitle}>She can assist you in creating remiders for you</Text>
    </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeContainer:{
    flex:1,
  },
  container:{
    padding:30,
  },
  Title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#3D405B',
  },
  subTitle:{
    fontSize: 13,
    color: '#545454',
  },
  dateContainer:{
    height: 70,
    width: '50%' ,
    backgroundColor:'#B7B8FF',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 30,
    justifyContent: 'center',
  },
  dateText:{
    color: '#3D405B',
    fontSize: 24,
    fontWeight:'bold',  
    marginTop:-5,  
  },
  TodayRemCon:{
    margin: 20,
    marginTop: 30,
    padding:10,
    height:150,
    borderRadius: 20,
    backgroundColor: '#FFF690',
    flexDirection: 'column',
  },
  todayRemTitle:{
    fontWeight:'bold',
    fontSize: 28,
    color: '#C999D6',
    top: -285,
    right:-10,
    marginTop:-5,
  },
  todayRemPic:{
    top:-135,
    right:-70,
    width:290,
    height:290,
    alignContent: 'flex-end',    
  },
  todayRemsubTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#112C41',
    top: -280,
    right:-10,
  },
  todayRemDesc:{
    fontSize:16,
    color: '#3D405B',
    fontWeight: '500',
    top: -270,
    right:-10,
  },
  remTitle:{
    fontSize: 13,
    color: '#3D405B',
    fontWeight: 'bold',
    left: -2,
    marginTop: 2,
    alignItems: 'center',
  },
  belleCon:{
  flexDirection: 'column',
  marginTop:15,
  },
  belleBlob:{
    width: 150,
    height: 140,
    marginTop: 15,
  },
  bellePic:{
    width:130,
    height: 140,
    top: -170,
  },
  belleTitle:{
    top: -250,
    fontSize: 24,
    color: '#3D405B',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
  },
  bellSubtitle:{
    top: -250,
    fontSize: 16,
    color: '#908D8D',
    textAlign: 'right',
    width:200,
  },

  modalContainer:{
    flex:1,
    justifyContent:'flex-end',
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  CompRemModal:{
    height: '70%',
    width:'100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:20,
  },
})