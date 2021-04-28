import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ color, title, ...rest }) => {
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.container, { backgroundColor: color }]}
    >
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
