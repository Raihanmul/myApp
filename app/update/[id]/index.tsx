import { notes } from "@/data/notesData";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  require("@/assets/images/image-0.png"),
  require("@/assets/images/image-1.png"),
  require("@/assets/images/image-2.png"),
  require("@/assets/images/image-3.png"),
];

export default function UpdateScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const note = notes.find((note) => note.id === Number(id));

  const [selectedImage, setSelectedImage] = useState<number>(0);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);

      const imageIndex = images.findIndex((img) => img === note.image);

      setSelectedImage(imageIndex !== -1 ? imageIndex : 0);
    }
  }, [note]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Update Note</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.inputTitle}
          placeholder="Note Title"
          selectionColor="#FF5B13"
          value={title}
        />
        <TextInput
          style={styles.inputContent}
          placeholder="Note Content"
          selectionColor="#FF5B13"
          textAlignVertical="top"
          multiline={true}
          value={description}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map((img, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.boxImage,
                selectedImage === index && styles.imageSelected,
              ]}
              onPress={() => setSelectedImage(index)}
            >
              <Image style={styles.image} source={img} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.updateButton}>
          <Text style={{ color: "white" }}>Update</Text>
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
    paddingHorizontal: 4,
  },
  appBarTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  form: {
    padding: 10,
    flex: 1,
  },
  inputTitle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  inputContent: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    padding: 15,
    marginBottom: 10,
    height: 150,
  },

  boxImage: {
    width: 100,
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    padding: 2,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  imageSelected: {
    borderColor: "#FF5B13",
    borderWidth: 2,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  updateButton: {
    padding: 10,
    backgroundColor: "#FF5B13",
    borderRadius: 10,
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
