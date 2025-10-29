import { FlatList, Text, View } from "react-native";

export default function Latihan3() {
  return (
    <View>
      <Text>Latihan 3</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem name={item.name} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

type ProductItemProps = { name: string };

const ProductItem = ({ name }: ProductItemProps) => (
  <View
    style={{
      margin: 10,
      padding: 15,
      backgroundColor: "blue",
      alignItems: "center",
      borderRadius: 15,
    }}
  >
    <Text style={{ fontSize: 16, color: "white" }}>{name}</Text>
  </View>
);

const products = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
  {
    id: 4,
    name: "Product 4",
  },
  {
    id: 5,
    name: "Product 5",
  },
  {
    id: 6,
    name: "Product 6",
  },
  {
    id: 7,
    name: "Product 7",
  },
  {
    id: 8,
    name: "Product 8",
  },
  {
    id: 9,
    name: "Product 9",
  },
  {
    id: 10,
    name: "Product 10",
  },
  {
    id: 11,
    name: "Product 11",
  },
  {
    id: 12,
    name: "Product 12",
  },
];
