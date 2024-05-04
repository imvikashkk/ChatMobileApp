import {View, ActivityIndicator} from "react-native"
import React from "react"

export default function Page(){
    return (
        <View className="flex-1 bg-red-200 pt-20">
            <ActivityIndicator size={"large"} color={"gray"} />
        </View>
    )
}
