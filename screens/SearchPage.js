import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import CompletedReminder from '../components/CompletedReminder'
import UpcomingReminder from '../components/UpcomingReminder'

export default function SearchPage() {
  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <SearchBar />
    </View>
    <ScrollView style={{ maxHeight: 490}} >
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
  container:{
    padding:20,
    
  },
  safeContainer:{
    flex: 1,
  },
  seacrhRemCon:{
    marginLeft:20,
    marginRight:20,
  },
})