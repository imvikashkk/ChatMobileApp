import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import Loading from "../components/Icons/Loading/Loading";
import { ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const signUp = () => {
  const [isShowPass, setShowPass] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name: "", email: "", password: "" } });
  const onSubmit = (data) => console.warn(data);
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}  
    style={{flex:1}}
    keyboardVerticalOffset={13}   
    >
      <ScrollView 
        style={{flex:1}}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View className="relative">
          {/* Contents */}
          <View className="gap-8 pt-[8vh]">
            <StatusBar style="dark" />

            {/*Image */}
            <View className="items-center">
              <Image
                style={{ height: hp(25) }}
                resizeMode="contain"
                source={require("../assets/images/register.png")}
              />
            </View>

            {/* Content */}
            <View className="gap-9">
              <Text
                style={{ fontSize: hp(4) }}
                className="font-bold tracking-wider text-center text-neutral-800">
                Sign Up
              </Text>

              {/* Form */}
              <View className="mx-4">
                
                {/* Name */}
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
                      message: "Invalid name",
                    },
                    minLength: {
                      value: 4,
                      message: "Name must be at least 4 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name must be at most 20 characters",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <View className="flex-row gap-4 px-4 py-3 bg-neutral-100 items-center  rounded-xl mb-4">
                        <MaterialIcons
                          name="person"
                          size={hp(4)}
                          color="gray"
                        />
                        <TextInput
                          style={{ fontSize: hp(2.5) }}
                          className="flex-1 font-semibold text-neutral-700"
                          placeholder="Enter your name"
                          placeholderTextColor={"gray"}
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                      </View>
                    </>
                  )}
                  name="name"
                />
                {errors.name && (
                  <Text className="text-red-800 mb-4 text-xl -mt-4">
                    *{errors.name.message}
                  </Text>
                )}

                {/* Email Input */}
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <View className="mb-4 flex-row gap-4 px-4 py-3 bg-neutral-100 items-center  rounded-xl">
                        <Octicons name="mail" size={hp(4)} color={"gray"} />
                        <TextInput
                          style={{ fontSize: hp(2.5) }}
                          className="flex-1 font-semibold text-neutral-700"
                          placeholder="Enter your email"
                          placeholderTextColor={"gray"}
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                      </View>
                    </>
                  )}
                  name="email"
                />
                {errors.email && (
                  <Text className="text-red-800 mb-4 text-xl -mt-4">
                    *{errors.email.message}
                  </Text>
                )}

                {/* Password Input */}
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 8,
                      message: "Invalid Password",
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <View className="flex-row gap-4 mb-4 px-4 py-3 bg-neutral-100 items-center  rounded-xl">
                        <Octicons
                          name={!isShowPass ? "lock" : "unlock"}
                          size={hp(4)}
                          color={"gray"}
                          onPress={() => setShowPass(!isShowPass)}
                        />
                        <TextInput
                          style={{ fontSize: hp(2.5) }}
                          className="flex-1 ml-2 font-semibold text-neutral-700"
                          placeholder="Enter your password"
                          placeholderTextColor={"gray"}
                          secureTextEntry={!isShowPass}
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                      </View>
                    </>
                  )}
                  name="password"
                />
                {errors.password && (
                  <Text className="text-red-800 mb-4 text-xl -mt-4">
                    *{errors.password.message}
                  </Text>
                )}

                {/* Button */}
                <TouchableOpacity onPress={handleSubmit(onSubmit)} style={{marginBottom:16}}>
                  <View className="bg-indigo-500 justify-center items-center p-3 rounded-xl">
                    <Text
                      style={{ fontSize: hp(2.9) }}
                      className="text-white font-bold tracking-wider ">
                      Sign Up
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Navigate to signIn */}
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    marginBottom:16,
                  }}>
                  <Text
                    style={{ fontSize: hp(2.2) }}
                    className="font-semibold text-neutral-500">
                    Already have an account?
                  </Text>
                  <TouchableOpacity onPress={() => router.replace("signIn")}>
                    <Text
                      style={{ fontSize: hp(2.2) }}
                      className="font-semibold text-indigo-500">
                      {" "}
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
            
          </View>

          {/* Loader */}
          {isLoading && (
            <View className="absolute h-screen top-0 w-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
              <Loading size={205}></Loading>
            </View>
          )}

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default signUp;
