import { StyleSheet, Text, View, ScrollView, StatusBar, Platform } from 'react-native';
import { useState, useEffect } from 'react';

import ListElem from '../components/Main/ListElem';
import TableHead from '../components/Main/TableHead';
import { axiosAPI } from '../services/axios';

export default function MainScreen({navigation}) {

 const [data, setData] = useState([])

 const getData = async () => {
  let data = await axiosAPI.getAssets(20)
  setData(data.sort((a, b) => parseInt(a.rank) > parseInt(b.rank)))
 }

 useEffect(() => {
  getData()
 }, [])

 const setResult = data.map((elem) => {
  return (<ListElem navigation={navigation} crypto={elem} key={elem.id}/>)
 })

  return (
    <View style={styles.background}>
     <ScrollView contentContainerStyle={styles.scroll}>
     <Text style={styles.H1}>CryptoApp</Text>
     <TableHead />
     {data ? setResult : <></>}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 10
  },
  scroll: {
   alignItems: 'center',
   flexDirection: 'column',
  },
  H1: {
   color: 'white',
   fontSize: 36,
   marginBottom: 30,
   fontFamily: 'Futura-Medium'
  },
});