import { Image, StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { spacing } from '../styles/spacing'
import ImagePath from '../Utility/ImagePath'
import TextComp from './TextComp'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { faker } from '@faker-js/faker'
import { textScale } from '../styles/responsiveStyles'


const CardComp = () => {
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
    const hide = () => {
        console.log('hii')
    }
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Animated.View style={[{
                width: spacing.WIDTH_160,
                height: spacing.HEIGHT_275,
                marginTop: spacing.MARGIN_24,
                position: 'absolute',
                top: 1,
                
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: spacing.RADIUS_20,
                paddingVertical: spacing.PADDING_8,
            }, frontAnimatedStyle]}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: "center", paddingHorizontal: spacing.PADDING_16 }}>
                    <Image source={ImagePath.IMG_LOGO} />
                    <Image source={ImagePath.IMG_BANK_NAME} />
                </View>
                <View style={{ flexDirection: "row", marginTop: spacing.MARGIN_50, justifyContent: 'space-around' }}>
                    <View>
                        <TextComp text={String(faker.number.int()).slice(0, 4)} style={{ fontSize: textScale(13), marginLeft: spacing.MARGIN_8, marginBottom: -20 }} />
                        <Image source={ImagePath.IMG_DESIGN_FOR_NUMBER} style={{ tintColor: '#fff', marginBottom: -5 }} />
                        <TextComp text={String(faker.number.int()).slice(0, 4)} style={{ fontSize: textScale(13), marginLeft: spacing.MARGIN_8, marginTop: -10, }} />
                        <Image source={ImagePath.IMG_DESIGN_FOR_NUMBER} style={{ marginTop: -18, tintColor: '#fff', marginBottom: -10 }} />
                        <TextComp text={String(faker.number.int()).slice(0, 4)} style={{ fontSize: textScale(13), marginLeft: spacing.MARGIN_8, marginTop: -10, }} />
                        <Image source={ImagePath.IMG_DESIGN_FOR_NUMBER} style={{ marginTop: -15, tintColor: '#fff', marginBottom: -5 }} />
                        <TextComp text={String(faker.number.int()).slice(0, 4)} style={{ fontSize: textScale(13), marginLeft: spacing.MARGIN_8, marginTop: -10, }} />
                    </View>
                    <View style={{}}>
                        <TextComp text='expiry' style={{ fontSize: textScale(12), fontWeight: 400, opacity: 0.5, color: '#FFFFFF' }} />
                        <TextComp
                            text={`${faker.date.recent().getDate()}`}
                            style={{
                                fontSize: textScale(16),
                                color: '#fff',
                                fontWeight: 400,

                            }}
                        >
                            <Text style={{ fontSize: textScale(22) }}>/</Text>
                            {`${faker.date.recent().getMonth()}`}
                        </TextComp>
                        <TextComp text='cvv' style={{ fontSize: textScale(10), fontWeight: 400, opacity: 0.5, color: '#FFFFFF', marginTop: spacing.MARGIN_10 }} />
                        <View style={{ flexDirection: "row", marginTop: spacing.MARGIN_2, justifyContent: "space-around", alignItems: "center", width: spacing.WIDTH_70, height: spacing.HEIGHT_30 }}>
                            <View>
                                <Image source={ImagePath.IMG_SECURE} />
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Image source={ImagePath.IMG_HIDE_EYE} style={{}} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ flexDirection: 'row' ,paddingHorizontal:spacing.PADDING_16,marginTop:spacing.MARGIN_4}}>
                    <Image source={ImagePath.IMG_COPY} />
                    <TextComp text='copy details' style={{ color: '#A90808', fontSize: textScale(12), fontWeight: 500 ,marginLeft:spacing.MARGIN_4}} />
                </View>
                <View>
                    <Image source={ImagePath.IMG_PAYMET_METHOD} style={{alignSelf:"flex-end",marginTop:spacing.MARGIN_20,marginRight:spacing.MARGIN_4}}/>
                </View>

            </Animated.View>
            <Animated.View style={[{
                  width: spacing.WIDTH_160,
                height: spacing.HEIGHT_275,
                marginTop: spacing.MARGIN_24,
                backfaceVisibility: 'hidden',
            }, backAnimatedStyle]}>
                <Image source={ImagePath.IMG_FREZZ}
                    style={{
                        width: spacing.WIDTH_160,
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
                        height: spacing.WIDTH_50,
                        borderRadius: spacing.RADIUS_90,
                        borderWidth: .3,
                        borderColor: freezeText ? '#A90808' : '#FFFFFF',
                        justifyContent: "center",
                    }}
                    onPress={() => {
                        spin.value = spin.value ? 0 : 1,
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
})