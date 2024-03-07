import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WapperContainer from '../../components/WrapperContainer'
import { Path, Svg } from 'react-native-svg';
import { spacing } from '../../styles/spacing';
import colors from '../../styles/colors';

const GinieScreen = () => {
  const SemiEllipse = ({ width, height }) => {
    return (
      <Svg
        height="5%"
        width="100%"
        preserveAspectRatio="none"
        style={{ backgroundColor: colors.transparent }}
      >
        <Path 
          d={`M 0 ${spacing.HEIGHT_16} C 0 ${spacing.HEIGHT_16} ${spacing.FULL_WIDTH / 2} -2 ${spacing.FULL_WIDTH} ${spacing.HEIGHT_16} C ${spacing.FULL_WIDTH / 2} ${spacing.HEIGHT_4} 0 ${spacing.HEIGHT_16} 0 ${spacing.HEIGHT_16}`}
          fill="#fff"
        />
      </Svg>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.blackColor }} >
    <WapperContainer>
      <Text>GinieScreen</Text>
    </WapperContainer>
    <SemiEllipse />
   </View>
  )
}

export default GinieScreen

const styles = StyleSheet.create({})