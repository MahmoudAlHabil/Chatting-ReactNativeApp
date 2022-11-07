import React from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';

const Button = (props) => {
    const {
        icon,
        wrapperStyle,
        textStyle,
        iconWrapperStyle,
        onPress,
        disabled,
        ...rest
    } = props;
    return (
        <TouchableOpacity
            {...rest}
            onPress={onPress}
            style={[styles.container, wrapperStyle]}>
            <View style={{ flexDirection: 'row' }}>
                {disabled ? (
                    <ActivityIndicator size='small' color='#fff' />
                ) : <View>
                    <Text style={[styles.text, textStyle]}>{props.title}</Text>
                    {icon &&
                        <View style={[styles.iconWrapper, iconWrapperStyle]}>
                            {icon()}
                        </View>
                    }</View>}
            </View>
        </TouchableOpacity>
    )
}

export default Button

