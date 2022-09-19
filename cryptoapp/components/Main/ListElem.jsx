import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import Changes from './Changes';

export default function ListElem({navigation, crypto}) {
	const handlePress = () => {
		navigation.navigate('Detail', {elemId: crypto.id})
	}

  return (
    <TouchableWithoutFeedback style={styles.touchable} onPress={handlePress}>
			<View style={styles.component}>
      <View style={styles.name}>
				<Text style={styles.text}>{crypto.name}</Text>
     		<Text style={styles.text}>{crypto.symbol}</Text>
			</View>
     <View style={styles.price}>
      	<Text style={styles.text}>{parseFloat(crypto.priceUsd).toFixed(7)}{' \u0024'}</Text>
				<Text style={styles.text}><Changes changes={crypto.changePercent24Hr} /></Text>
     </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopColor: 'black',
    borderTopWidth: 1,
    padding: 7.5,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -10,
    paddingBottom: 17.5
  },
  component: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopColor: 'black',
    borderTopWidth: 1,
    padding: 7.5,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -10,
    paddingBottom: 17.5
  },
  text: {
   color: 'black',
   fontFamily: 'Futura-Medium',
	 flex: 1
  },
  name: {
   textAlign: 'left',
   width: '40%',
  },
  symbol:{
   width: '16%',
   textAlign: 'center'
  },
	price: {
		width: '60%',
		alignItems: 'flex-end'
	}
});