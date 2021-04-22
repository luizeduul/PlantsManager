import React from "react";
import { View } from "react-native";
import LotieView from "lottie-react-native";

import loadAnimation from "../../assets/load.json";

import styles from "./styles";

const Load: React.FC = () => {
  return (
    <View style={styles.container}>
      <LotieView
        style={styles.animation}
        source={loadAnimation}
        autoPlay
        loop
      />
    </View>
  );
};

export default Load;
