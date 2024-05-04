import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

const Loading = ({ size, type }) => {
  return (
    <View >
      <LottieView style={{width:size, height:size}} source={require("./Animation.json")} autoPlay loop />
    </View>
  );
};

export default Loading;
