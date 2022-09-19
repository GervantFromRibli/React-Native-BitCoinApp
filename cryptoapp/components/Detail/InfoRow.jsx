import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';

export default function InfoRow({name, info, isLink = false}) {

 const handlePress = async(href) => {
  if (href !== NaN && href !== ''){
   await Linking.openURL(href)
  }
 }

  return (
   <View style={styles.container}>
    <Text style={[styles.text, styles.name]}>{name}:</Text>
    {isLink ? <TouchableOpacity onPress={async() => {await handlePress(info)}} style={styles.info}>
     <Text style={styles.text}>{String(info).replace(NaN, 'No data')}</Text>
    </TouchableOpacity> : 
    <Text style={[styles.text, styles.info]}>{String(info).replace(NaN, 'No data')}</Text>}
  </View>
  );
}

const styles = StyleSheet.create({
 container: {
    backgroundColor: 'transparent',
    width: '100%',
    flexDirection: 'row',
    margin: 5,
    marginBottom: 10
  },
  text: {
   color: 'black',
   fontFamily: 'Futura-Medium',
  },
  name: {
   textAlign: 'left',
   width: '40%',
   fontSize: 22,
   lineHeight: 22,
   marginRight: 8
  },
  info: {
   textAlign: 'left',
   width: '60%',
   fontSize: 16,
   lineHeight: 22,
   position: 'relative',
   textAlignVertical: 'center',
   flexShrink: 1,
   paddingRight: 5
  },
});