import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
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
  
  const signIn = () => {
    const [isShowPass, setShowPass] = React.useState(false);
    const [isLoading, setLoading] = React.useState(false);
    const router = useRouter();
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({ defaultValues: { email: "", password: "" } });
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
          <View className="relative pb-4">
            {/* Contents */}
            <View className="gap-10 pt-[8vh]">
              <StatusBar style="dark" />
  
              {/*Image */}
              <View className="items-center">
                <Image
                  style={{ height: hp(25) }}
                  resizeMode="contain"
                  source={require("../assets/images/login.png")}
                />
              </View>
  
              {/* Content */}
              <View className="gap-10">
                <Text
                  style={{ fontSize: hp(4) }}
                  className="font-bold tracking-wider text-center text-neutral-800">
                  Forgot Password
                </Text>
  
                {/* Form */}
                <View className="gap-8 mx-4">
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
                        <View className="flex-row gap-4 px-4 py-3 bg-neutral-100 items-center  rounded-xl">
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
                    <Text className="text-red-800 text-xl -mt-4">
                      *{errors.email.message}
                    </Text>
                  )}
  

  
                  {/* Button */}
                  <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                    <View className="bg-indigo-500 justify-center items-center p-3 rounded-xl">
                      <Text
                        style={{ fontSize: hp(2.2) }}
                        className="text-white font-bold tracking-wider ">
                         Send Reset Link
                      </Text>
                    </View>
                  </TouchableOpacity>
  
                  {/* Navigate to signup */}
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      marginVertical: hp(-0.1),
                    }}>
                    <Text
                      style={{ fontSize: hp(2.2) }}
                      className="font-semibold text-neutral-500">
                      Back to 
                    </Text>
                    <TouchableOpacity onPress={() => router.replace("signUp")}>
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

          </View>
  
        </ScrollView>

        {/* Loader */}
        {isLoading && (
              <View className="absolute h-screen top-0 w-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
                <Loading size={205}></Loading>
              </View>
            )}
      </KeyboardAvoidingView>
    );
  };
  
  export default signIn;
  