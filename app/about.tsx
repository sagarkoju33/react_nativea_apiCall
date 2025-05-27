import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function UserDetailScreen() {
  const { user } = useLocalSearchParams();
  const router = useRouter();

  const parsedUser = user ? JSON.parse(user as string) : null;

  if (!parsedUser) return <Text>Loading...</Text>;
  //   console.log("Parsed User:", parsedUser);
  return (
    <View style={styles.container}>
      <Image source={{ uri: parsedUser.avatar }} style={styles.avatar} />
      <Text style={styles.name}>
        {parsedUser.first_name} {parsedUser.last_name}
      </Text>

      <Button
        title="replace with"
        onPress={() => router.push("/detail")}
      ></Button>

      <Text style={styles.email}>{parsedUser.email}</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    </View>
  );
}
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  avatar: {
    width: "100%",
    height: screenWidth,
    borderRadius: 100,
    marginBottom: 20,
    margin: 20,
    padding: 20,
  },
  name: { fontSize: 24, fontWeight: "bold" },
  email: { fontSize: 16, color: "#666", marginTop: 8 },
});
