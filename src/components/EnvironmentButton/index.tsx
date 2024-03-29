import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styles from './styles';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}
const EnvirommentButton: React.FC<EnviromentButtonProps> = ({
  title,
  active = false,
  ...rest
}) => {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}
    >
      <Text style={[styles.buttonText, active && styles.buttonTextActive]}>
        {title}
      </Text>
    </RectButton>
  );
};

export default EnvirommentButton;
