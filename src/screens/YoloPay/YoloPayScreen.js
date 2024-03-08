import { StyleSheet, View,  } from 'react-native';
import React from 'react';
import WapperContainer from '../../components/WrapperContainer';
import TextComp from '../../components/TextComp';
import { spacing } from '../../styles/spacing';
import { textScale } from '../../styles/responsiveStyles';
import BottomComp from '../../components/BottomComp';
import CardComp from '../../components/CardComp';
import { Path, Svg } from 'react-native-svg';
import colors from '../../styles/colors';

const SemiEllipse = ({ width, height }) => {
  return (

    <Svg
      height="5%"
      width="100%"
      preserveAspectRatio="none"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <Path
        d={`M 0 ${spacing.HEIGHT_16} C 0 ${spacing.HEIGHT_16} ${spacing.FULL_WIDTH / 2} -2 ${spacing.FULL_WIDTH} ${spacing.HEIGHT_16} C ${spacing.FULL_WIDTH / 2} ${spacing.HEIGHT_4} 0 ${spacing.HEIGHT_16} 0 ${spacing.HEIGHT_16}`}
        fill="#fff"
      />
    </Svg>

  );
};

const YoloPayScreen = () => {

  return (
    <View style={{ flex: 1, backgroundColor: colors.blackColor }} >
      <WapperContainer>
        <View
          style={{
            marginHorizontal: spacing.MARGIN_20,
            marginVertical: spacing.MARGIN_30,
          }}>
          <TextComp
            text="select payment mode"
            style={{
              color: '#ffffff',
              fontSize: textScale(24),
              fontWeight: 600,
            }}
          />
          <TextComp
            text="choose your preferred payment method to make payment."
            style={{
              color: '#c5c6c7',
              fontSize: textScale(16),
              fontWeight: 400,
              marginTop: spacing.MARGIN_16
            }}
          />
          <View style={{ flexDirection: "row", }}>
            <BottomComp text='pay' style={{}} />
            <BottomComp text='card'
              style={{ marginLeft: spacing.MARGIN_12, borderColor: '#A90808', }}
              textStyle={{ color: '#A90808' }}
              colors={['#000', '#A9080800']}
            />
          </View>

          <View style={{ marginVertical: spacing.MARGIN_50}}>
            <TextComp text='your digital debit card' style={{ color: '#a9aaab', fontWeight: 400, }} />
            <CardComp />
          </View>
        </View>
      </WapperContainer>
      <SemiEllipse />
    </View>
  );
};


export default YoloPayScreen;

const styles = StyleSheet.create({});
