import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Welcome Back!
      </Text>

      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          display: "flex",
          gap: 10,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Text
          style={{
            fontWeight: "semibold",
          }}
        >
          Email:
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 6,
            borderColor: "grey",
          }}
          placeholder="Input your Email"
        />

        <Text
          style={{
            fontWeight: "semibold",
          }}
        >
          Password:
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 6,
            borderColor: "grey",
          }}
          placeholder="Input your Password"
        />

        <Button title="Login" color="#000000ff" />
      </View>
    </View>
  );
}
