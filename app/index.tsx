import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Form Data Diri</Text>

      <Text>Nama</Text>
      <TextInput
        placeholder="Masukkan nama anda"
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          borderRadius: 10,
        }}
      />

      <Text>Kelas</Text>
      <TextInput
        placeholder="Masukkan kelas anda"
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          borderRadius: 10,
        }}
      />

      <Text>Domisili</Text>
      <TextInput
        placeholder="Masukkan domisili anda"
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          borderRadius: 10,
        }}
      />
    </View>
  );
}
