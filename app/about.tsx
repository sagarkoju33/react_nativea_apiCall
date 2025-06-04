import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Alert,
  Button,
  Dimensions,
  Image,
  Share,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
} from "react-native";

export default function UserDetailScreen() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this user: ${parsedUser.first_name} ${parsedUser.last_name} - ${parsedUser.email}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log("Shared with activity type:", result.activityType);
        } else {
          // shared
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log("Share dismissed");
      }
    } catch (error: any) {
      Alert.alert("Error", "Failed to share the content.");
      console.error("Share error:", error);
    }
  };

  const { user } = useLocalSearchParams();
  const router = useRouter();

  const parsedUser = user ? JSON.parse(user as string) : null;
  const colorScheme = useColorScheme();
  // const { width, height } = useWindowDimensions();
  const { height, width, scale, fontScale } = useWindowDimensions();
  if (!parsedUser) return <Text>Loading...</Text>;
  //   console.log("Parsed User:", parsedUser);
  return (
    <View style={styles.container}>
      <Image source={{ uri: parsedUser.avatar }} style={styles.avatar} />
      <Text style={styles.name}>
        {parsedUser.first_name} {parsedUser.last_name}
      </Text>
      <Text>useColorScheme(): {colorScheme}</Text>
      <Text style={styles.container}>Window Dimension Data</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
      <Text>Font scale: {fontScale}</Text>
      <Text>Pixel ratio: {scale}</Text>
      <Button onPress={onShare} title="Share" />
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
