import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface Errors {
    email?: string,
    password?: string
}

interface LoginProps {
    setLogin: (loginStatus: boolean) => void; //accept set login function as props
}

const LoginScreen = ({setLogin}: LoginProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

    useEffect(()=>{
        validateForm();
    }, [email, password]);

    const validateForm = ()=>{
        let errors: Errors= {}
        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }

        if (!password) {
            errors.password = 'Password is required.';
        }

        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }

  const handleLogin = ()=>{
    if(isFormValid){
        const loginData = {
            mail: email,
            pass: password
        }
        setLogin(true);
        console.log(loginData);
    }else{
        console.log('Incorrect log in credentials.')
    }

  }

  const handleShowPassword =()=>{
    console.log(showPassword);
    setShowPassword(!showPassword);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.header}>
            Log in
          </ThemedText>
          <ThemedView>
            <TextInput
              textContentType="emailAddress"
              style={styles.input}
              placeholder="Enter e-mail"
              placeholderTextColor={"white"}
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
              autoCapitalize="none"
            />
            <TextInput
              textContentType="emailAddress"
              style={styles.input}
              placeholder="Enter password"
              secureTextEntry={showPassword?true:false}
              placeholderTextColor={"white"}
              onChangeText={(newText) => setPassword(newText)}
              defaultValue={password}
            />
            <TouchableOpacity onPress={handleShowPassword} style={styles.show}>
                <ThemedText style={{
                    color: 'white',
                }}>X</ThemedText>
            </TouchableOpacity>
            <Button onPress={handleLogin} title="Log in"/>
          </ThemedView>

          {Object.values(errors).map((error, index)=>(
            <ThemedText style={styles.error} key={index}>{error}</ThemedText>
          ))}

        </ThemedView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  header: {
    textAlign: "center",
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "white",
    width: 300,
    fontSize: 16,
    paddingHorizontal: 5,
    marginVertical: 15,
  },
  show:{
    position: 'absolute',
    right: 10,
    top: 95
  },
  error:{
    color: 'red',
    fontSize: 18
  }
});
