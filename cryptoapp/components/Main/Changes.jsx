import { StyleSheet, Text, View } from 'react-native';

export default function Changes({changes}) {

  return (
   <View style={styles.sup}>
    {parseFloat(changes) > 0 ?
    <>
    <Text style={[styles.text, styles.positive]}>&#9650;</Text>
    <Text style={[styles.text, styles.symbol]}>{parseFloat(changes).toFixed(7)}{' \u0024'}</Text></> :
    <><Text style={[styles.text, styles.negative]}>&#x25BC;</Text>
    <Text style={[styles.text, styles.symbol]}>{parseFloat(changes).toFixed(7)}{' \u0024'}</Text></>
    }
  </View>
  );
}

const styles = StyleSheet.create({
  sup: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
   color: 'black',
   fontFamily: 'Futura-Medium',
  },
  positive: {
   justifyContent:'flex-start',
   color: 'green'
  },
  negative: {
   justifyContent:'flex-end',
   color: 'red'
  },
});