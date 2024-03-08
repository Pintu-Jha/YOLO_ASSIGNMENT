import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { textScale } from '../styles/responsiveStyles';
import { spacing } from '../styles/spacing';
import LinearGradient from 'react-native-linear-gradient';

const BottomComp = ({
  text = '',
  style = {},
  textStyle = {},
  onPress = () => { },
  colors = ['#0D0D0D', '#FFFFFF00'],
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ ...styles.gradientBorder, ...style }}>
      <TouchableOpacity style={{ ...styles.container, }}>
        <Text style={{ ...styles.textStyle, ...textStyle }}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default BottomComp;

const styles = StyleSheet.create({
  gradientBorder: {
    width: spacing.WIDTH_105,
    height: spacing.HEIGHT_48,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: spacing.RADIUS_24,
    paddingHorizontal: spacing.PADDING_16,
    borderColor: '#fff',
    borderWidth: 1,
    overflow: 'hidden',
    borderBottomWidth: 0,
    marginTop: spacing.MARGIN_16,
  },
  textStyle: {
    color: '#ffffff',
    fontSize: textScale(18),
  },
});
