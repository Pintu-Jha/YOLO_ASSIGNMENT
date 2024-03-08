import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import { Dimensions, Image, StyleSheet, View, } from 'react-native';
import * as Screens from '../screens';
import navigationStrings from './navigationString';
import ImagePath from '../Utility/ImagePath';
import { spacing } from '../styles/spacing';
import TextComp from '../components/TextComp';
import colors from '../styles/colors';

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (

    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={navigationStrings.PAY}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: {
          backgroundColor: '#0D0D0D',
          height: spacing.HEIGHT_105,
          // borderColor: 'red',
          borderColor: colors.transparent
        },
        tabBarShowLabel: false,
      }}

    >
      <BottomTab.Screen
        name={navigationStrings.HOME}
        component={Screens.Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <View
                  style={{
                    width: focused ? spacing.WIDTH_60 : spacing.WIDTH_40,
                    height: focused ? spacing.WIDTH_60 : spacing.WIDTH_40,
                    borderWidth: 1,
                    borderBottomWidth: 0,
                    borderColor: focused ? '#fff' : 'gray',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: spacing.RADIUS_90
                  }}>
                  <Image
                    style={{
                      width: focused ? spacing.WIDTH_28 : spacing.WIDTH_20,
                      height: focused ? spacing.HEIGHT_28 : spacing.HEIGHT_20,
                      // borderRadius: focused ? spacing.RADIUS_4 : null,
                      tintColor:'#757575'
                    }}
                    source={ImagePath.IC_HOME}
                  />
                </View>
                <TextComp
                  text="home"
                  style={{ color: focused ? '#fff' : 'gray' }}
                />
              </>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.PAY}
        component={Screens.YoloPay}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <View
                  style={{
                    width: focused ? spacing.WIDTH_56 : spacing.WIDTH_36,
                    height: focused ? spacing.WIDTH_56 : spacing.WIDTH_36,
                    borderWidth: 1,
                    borderColor: focused ? '#fff' : '#565756',
                    borderBottomWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: spacing.RADIUS_90,
                    marginTop: -spacing.MARGIN_40
                  }}>
                  <Image
                    style={{
                      width: focused ? spacing.WIDTH_26 : spacing.WIDTH_20,
                      height: focused ? spacing.HEIGHT_28 : spacing.HEIGHT_20,
                      borderRadius: focused ? spacing.RADIUS_4 : null,
                    }}
                    source={ImagePath.IC_SCANNER}
                  />
                </View>
                <TextComp
                  text="yolo pay"
                  style={{ color: focused ? '#fff' : 'gray' }}
                />
              </>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.SETTING}
        component={Screens.Gimie}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <View
                  style={{
                    width: focused ? spacing.WIDTH_60 : spacing.WIDTH_40,
                    height: focused ? spacing.WIDTH_60 : spacing.WIDTH_40,
                    borderWidth: 1,
                    borderBottomWidth: 0,
                    borderColor: focused ? '#fff' : 'gray',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: spacing.RADIUS_90
                  }}>
                  <Image
                    style={{
                      width: focused ? spacing.WIDTH_40 : spacing.WIDTH_24,
                      height: focused ? spacing.WIDTH_40 : spacing.WIDTH_24,
                    }}
                    source={ImagePath.IC_SETTING}
                  />
                </View>
                <TextComp
                  text="ginie"
                  style={{ color: focused ? '#fff' : 'gray' }}
                />
              </>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  customBottomtabsStyle: {
    //height: moderateScale(60)
    backgroundColor: 'red',
    // height
  },
  BottomTabContainer: {
    backgroundColor: 'black'
  },
  BottomTabContainer_contentContainer: {
    height: spacing.HEIGHT_60

  },
});

export default TabRoutes;
