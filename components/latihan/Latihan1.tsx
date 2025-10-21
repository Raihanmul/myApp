import { Text, TextInput, View } from "react-native";

export default function Latihan1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15 }}>
        Form Data Diri
      </Text>

      <View
        style={{
          width: "100%",
          padding: 20,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <Text>Nama</Text>
        <TextInput
          placeholder="Masukkan nama anda"
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 8,
            marginVertical: 10,
          }}
        />

        <Text>Kelas</Text>
        <TextInput
          placeholder="Masukkan kelas anda"
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 8,
            marginVertical: 10,
          }}
        />

        <Text>Domisili</Text>
        <TextInput
          placeholder="Masukkan domisili anda"
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 8,
            marginVertical: 10,
          }}
        />
      </View>
    </View>
  );
}
