import {
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {styles} from './CustomButton.styles';

interface CustomButtonComponentProps {
  buttonText: string;
  handleClick: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const CustomButtonComponent = ({
  buttonText,
  handleClick,
  buttonStyle,
  textStyle,
}: CustomButtonComponentProps) => {
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={[styles.container, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtonComponent;
