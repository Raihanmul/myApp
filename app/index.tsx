import { Note, notes } from "@/data/notesData";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NoteItem = ({ item }: { item: Note }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/detail/${item.id}`)}
    >
      <Image style={{ width: 80, height: 80 }} source={item.image} />
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc}>{item.description}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("@/assets/images/notes-logo.png")}
        />
        <Text style={styles.kodeinText}>
          Kodein <Text style={styles.notesText}>Notes</Text>
        </Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 10, flexGrow: 1 }}
          ListEmptyComponent={() => <EmptyData />}
        />
      </View>

      <TouchableOpacity style={styles.fab} onPress={() => router.push("/add")}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const EmptyData = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("@/assets/images/empty.png")}
      />
      <Text style={styles.emptyTitle}>Add your first note</Text>
      <Text style={styles.emptyDesc}>
        Save your thoughts, tasks or inspirations
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 10,
  },
  kodeinText: {
    fontSize: 20,
    fontWeight: 700,
    color: "black",
  },
  notesText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FF5B13",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  fab: {
    position: "absolute",
    bottom: 40,
    right: 20,
    backgroundColor: "#FF5B13",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },

  card: {
    flexDirection: "row",
    gap: 4,
    padding: 6,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
  },

  cardContainer: {
    flex: 1,
    padding: 8,
    gap: 4,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardDesc: { fontSize: 16 },
  cardDate: { fontSize: 14 },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  emptyDesc: {
    fontSize: 16,
    color: "gray",
  },
});
