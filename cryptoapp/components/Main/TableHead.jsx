import { StyleSheet, Text, View } from 'react-native';

export default function TableHead({_}) {

  return (
   <View style={styles.header}>
    <Text style={[styles.text, styles.name]}>Name and symbol</Text>
    <Text style={[styles.text, styles.price]}>Price and changes</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 7.5,
    marginBottom: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
   color: 'black',
   fontFamily: 'Futura-Medium',
  },
  name: {
   textAlign: 'left',
   width: '40%',
  },
  price: {
   textAlign: 'right',
   width: '60%'
  },
});