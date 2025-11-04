import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.appBar}>
        <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        <Text style={styles.appBarTitle}>Note Details</Text>
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Image
          style={{ width: "100%", height: 220 }}
          source={require("@/assets/images/image-2.png")}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Belajar Programming</Text>
          <Text style={styles.date}>Selasa, 13 Mei 2025</Text>
          <Text style={styles.description}>
            Mulailah dengan memahami dasar JavaScript seperti fungsi, array, dan
            async/await. Pelajari konsep component di React dan gunakan
            functional component serta hooks seperti useState dan useEffect.
            Bangun proyek kecil seperti to-do list untuk latihan. Gunakan
            dokumentasi resmi React dan manfaatkan React Developer Tools untuk
            debugging. Terakhir, bergabunglah dengan komunitas agar semangat
            belajar tetap terjaga.
          </Text>
        </View>
      </ScrollView>

      {/* Fixed button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonUpdate}>
          <Text style={{ color: "white" }}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDelete}>
          <Text style={{ color: "white" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 8,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  description: {
    fontSize: 14,
    textAlign: "justify",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
  },
  buttonUpdate: {
    backgroundColor: "#FF5B13",
    paddingVertical: 12,
    paddingHorizontal: 68,
    borderRadius: 10,
  },
  buttonDelete: {
    backgroundColor: "#FF3530",
    paddingVertical: 12,
    paddingHorizontal: 68,
    borderRadius: 10,
  },
});
