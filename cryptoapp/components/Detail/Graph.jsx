import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LineChart, XAxis, Grid, YAxis } from 'react-native-svg-charts';

import { axiosAPI } from '../../services/axios';

export default function Graph({id}) {
 const [showData, setShowData] = useState([])
 const [isDisplay, setIsDisplay] = useState(false)

 const getData = async () => {
  let data = await axiosAPI.getHistory(id)
  setShowData(data)
  setIsDisplay(true)
 }

 useEffect(() => {
  getData()
 }, [])

 const getChartData = () => {
  return showData.map((elem, _) => parseFloat(parseFloat(elem.priceUsd).toFixed(4)))
 }

 const getXData = () => {
  return showData.map((_, index) => index)
 }

  if (isDisplay){
   return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <YAxis
            data={getChartData()}
            contentInset={{ top: 10, bottom: 10 }}
            svg={{
                fill: 'grey',
                fontSize: 10,
            }}
            style={styles.y}
            numberOfTicks={20}
            formatLabel={(value) => `${parseFloat(value.toFixed(4))}$`}
        />
      <LineChart 
        data={getChartData()}
        style={styles.chart}
        contentInset={{ top: 10, bottom: 10 }}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        numberOfTicks={20}
      >
        <Grid />
      </LineChart>
      </View>
      <XAxis
          style={styles.x}
          data={getXData()}
          formatLabel={(elem, _) => new Date(showData[elem].time).getMonth() + "." + new Date(showData[elem].time).getDate()}
          contentInset={{ left: 10, right: 10, bottom: 10 }}
          svg={{ fontSize: 10, fill: 'gray' }}
      />
   </View>
   );
  }
  else {
   return <></>
  }
}

const styles = StyleSheet.create({
 container: {
    backgroundColor: 'white',
    width: '90%',
    marginTop: -10,
    flexDirection:'column',
    borderBottomLeftRadius: 7.5
  },
  chart: {
   width: '75%',
   height: 400,
   marginBottom: 80,
   marginLeft: 16,
   flexShrink: 2
  },
  y: {
    height: 400,
    marginBottom: 5,
    marginLeft: 7.5
  },
  x: {
    position: 'absolute',
    marginTop: 410,
    width: '80%',
    color: 'black',
    marginLeft: 50,
    textAlign: 'center',
    opacity: 1,
    flexShrink: 1
  }
});