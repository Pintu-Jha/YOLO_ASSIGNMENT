import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WapperContainer = ({style={}, children}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View
        style={{
          ...styles.container,
          ...style,
        }}>
        {children}
      </View>
    </SafeAreaView>
    //
  );
};

export default WapperContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
});
