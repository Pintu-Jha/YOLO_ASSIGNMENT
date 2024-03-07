import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { spacing } from '../styles/spacing'
import { faker } from '@faker-js/faker'
import ImagePath from '../Utility/ImagePath'
import TextComp from './TextComp'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient'



const CardComp = () => {
    const image = faker.image.url()
    const spin = useSharedValue(0);
    const [freezeText, setFreezeText] = useState(false)

    const frontAnimatedStyle = useAnimatedStyle(() => {
        const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
        return {
            transform: [
                {
                    rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
                },
            ],
        };
    });
    const backAnimatedStyle = useAnimatedStyle(() => {
        const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
        return {
            transform: [
                {
                    rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
                },
            ],
        };
    });
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Animated.View style={[{
                width: spacing.WIDTH_156,
                height: spacing.HEIGHT_275,
                marginTop: spacing.MARGIN_24,
                position: 'absolute',
                top: 1
            }, frontAnimatedStyle]}>
                <FastImage source={{ uri: image }}
                    style={{
                        width: spacing.WIDTH_156,
                        height: spacing.HEIGHT_275,
                        borderRadius: spacing.RADIUS_12,
                        resizeMode: "cover"
                    }} />
            </Animated.View>
            <Animated.View style={[{
                width: spacing.WIDTH_156,
                height: spacing.HEIGHT_275,
                marginTop: spacing.MARGIN_24,
                backfaceVisibility: 'hidden',
            }, backAnimatedStyle]}>
                <Image source={ImagePath.IMG_FREZZ}
                    style={{
                        width: spacing.WIDTH_156,
                        height: spacing.HEIGHT_280,
                        borderRadius: spacing.RADIUS_12,
                        resizeMode: "cover",
                    }} />
            </Animated.View>

            <View style={{
                flexDirection: "column",
                marginLeft: spacing.MARGIN_16
            }}>
                <TouchableOpacity
                    style={{
                        width: spacing.WIDTH_50,
                        height: spacing.HEIGHT_50,
                        borderRadius: spacing.HEIGHT_50 / 2,
                        borderWidth: .3,
                        borderColor: freezeText ? '#A90808' : '#FFFFFF',
                        justifyContent: "center",
                    }}
                    onPress={() => {
                        spin.value = spin.value ? 0 : 1
                        setFreezeText(!freezeText)
                    }}>
                    <Image source={ImagePath.IC_SNOW_FREZZE} style={{ alignSelf: "center", tintColor: freezeText ? '#A90808' : '#fff' }} />
                </TouchableOpacity>
                <TextComp text={freezeText ? "unfreeze" : "freeze"} style={{ marginTop: spacing.MARGIN_12, alignSelf: "center", color: freezeText ? '#A90808' : '#fff', }} />
            </View>
        </View>
    )
}

export default CardComp

const styles = StyleSheet.create({
    freezeBox: {
        width: spacing.WIDTH_156,
        height: spacing.HEIGHT_280,
        backgroundColor: 'blue',
    }
})