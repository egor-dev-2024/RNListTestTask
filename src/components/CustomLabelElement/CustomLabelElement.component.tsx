import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {styles} from './CustomLabelElement.styles';

interface CustomLabelElementComponentProps {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const CustomLabelElementComponent = ({
  title,
  containerStyle,
  textStyle,
}: CustomLabelElementComponentProps) => {
  return (
    <View style={[styles.itemContainer, containerStyle]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </View>
  );
};
