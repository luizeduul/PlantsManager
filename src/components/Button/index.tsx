import React, { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import styles from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color: string;
  children?: ReactNode;
}

const Button = ({ children, color, title, ...rest }: ButtonProps) => {
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
