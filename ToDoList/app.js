// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const app = () => {
//   return (
//     <View>
//       <Text>app</Text>
//     </View>
//   )
// }

// export default app

// const styles = StyleSheet.create({})
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

const Greeting = props => {
  return (
    <View style={styles.center}>
      <Text style={{ color: props.color || 'black' }}>Hello {props.name}!</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, { top: 50 }]}>
      <Greeting name="Rexxar" color="blue" />
      <Greeting name="Jaina" color="green" />
      <Greeting name="Valeera" color="red" />
    </View>
  );
};

export default LotsOfGreetings;
