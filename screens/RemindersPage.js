import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DropdownComponent from '../components/DropdownComponent'
import CompletedReminder from '../components/CompletedReminder'
import UpcomingReminder from '../components/UpcomingReminder'

export default function RemindersPage() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>May 24, 202</Text>
      <Text style={styles.dateText} > | </Text>
      <Text style={styles.dateText}>Friday</Text>
    </View>

    <View style={{marginLeft: 20,marginRight: 20, flexDirection: 'row', alignItems: 'center'}}>
      <Text style={styles.remTitle}>MY REMINDERS</Text>
      <View ><DropdownComponent/></View>
    </View>

    <ScrollView style={{ maxHeight: 490,}} >
      <View style={styles.seacrhRemCon}>
      <CompletedReminder/>
      <UpcomingReminder/>
      <CompletedReminder/>
      <UpcomingReminder/>
      <CompletedReminder/>
      <UpcomingReminder/>
      </View>
    </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  dateContainer:{
    marginLeft:20,
    marginRight:20,
    marginTop: -10,
    height: 40,
    borderRadius:20,
    backgroundColor: '#B7B8FF',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  dateText:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#3D405B'
  },
  remTitle: {
    fontWeight: 'bold', 
    fontSize: 19, 
    color: '#3D405B', 
    marginRight: 35, 
    marginBottom: -21,
    marginTop: -14,
  },
  seacrhRemCon:{
    marginLeft:20,
    marginRight:20,
  },
})