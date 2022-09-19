import { StyleSheet, Text, View, ScrollView, StatusBar, Platform } from 'react-native';
import { useState, useEffect } from 'react';

import { axiosAPI } from '../services/axios';
import InfoRow from '../components/Detail/InfoRow';
import Graph from '../components/Detail/Graph';

export default function DetailScreen({route, navigation}) {
  const {elemId} = route.params;
  const [data, setData] = useState({})

  const getData = async () => {
    let data = await axiosAPI.getAsset(elemId)
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.H1}>{data.name}</Text>
        <View style={styles.info}>
          <InfoRow name={'Name'} info={data.name}/>
          <InfoRow name={'Symbol'} info={data.symbol} />
          <InfoRow name={'Rank'} info={data.rank} />
          <InfoRow name={'Supply'} info={parseFloat(data.supply)} />
          <InfoRow name={'Max supply'} info={parseFloat(data.maxSupply)} />
          <InfoRow name={'Market capitalization'} info={parseFloat(data.marketCapUsd) + ' \u0024'} />
          <InfoRow name={'Volume for the past 24 hours'} info={parseFloat(data.volumeUsd24Hr) + ' \u0024'} />
          <InfoRow name={'Price'} info={parseFloat(data.priceUsd) + ' \u0024'} />
          <InfoRow name={'Change'} info={parseFloat(data.changePercent24Hr) + ' \u0024'} />
          <InfoRow name={'Volume weighted average price'} info={parseFloat(data.vwap24Hr) + ' \u0024'} />
          <InfoRow name={'Explorer'} info={data.explorer} isLink={true} />
        </View>
        <Graph id={elemId}/>
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
   info: {
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    borderTopLeftRadius: 7.5,
    borderTopRightRadius: 7.5
   }
});