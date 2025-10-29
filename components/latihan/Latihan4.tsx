import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Latihan4() {
  return (
    <View>
      <Text>Latihan 4</Text>

      <Button title="Press here" onPress={() => alert("Hello")} />

      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          margin: 20,
          padding: 10,
          alignItems: "center",
        }}
      >
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
}
