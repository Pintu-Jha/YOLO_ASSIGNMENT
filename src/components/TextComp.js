import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { textScale } from '../styles/responsiveStyles';

const TextComp = ({text = '', style = {}, children, ...props}) => {
  return (
    <Text
      style={{
        ...styles.textStyle,
        ...style,
      }}
      {...props}
      >
      {text}
      {children}
    </Text>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  textStyle: {
    color: "#FFFFFF",
    fontSize: textScale(12),
  },
});
