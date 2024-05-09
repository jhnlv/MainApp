import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function UpcomingReminder() {
  return (
    <View style={styles.compRemCon}>
    <View style={{marginBottom: 5}}>
      <Text style={styles.remTitle}>ACTIVITY IN MACHINE LEARNING  </Text>
      <Text style={styles.remDesc}>Look for three paper that is connected to the Topic and critique it accoding to the given criteria.</Text>
    </View>
    <View style={styles.footerCon}>
        <Text style={styles.Time}>11:59 PM</Text>
        <Text style={styles.Date}>May 24, 2023</Text>
        <Text style={styles.Category}>UPCOMING</Text>
    </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    compRemCon:{
        height: 110,
        padding: 10,
        marginTop: 10,
        backgroundColor: '#B4D2FF',
        borderRadius: 10,
    },
    remTitle:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3D405B',
    },
    remDesc: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff'
    },
    footerCon:{
        marginTop:5,
        borderTopWidth:2,
        borderTopColor: 'gray',
        flexDirection: 'row',

    },
    Time: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3D405B',
        marginTop: 3,
        marginRight: 10,
    },
    Date: {
        fontWeight: 'bold',
        color: '#908D8D',
        marginTop: 5,
        marginRight: 60,
    },
    Category:{
        fontWeight: 'bold',
        color: '#908D8D',
        marginTop: 5,
    },
})