import { View, ImageBackground, StyleSheet } from "react-native";

function Avatar({ size, imageUri }) {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: Math.ceil(size / 2) },
      ]}
    >
      <ImageBackground
        source={{ uri: imageUri }}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Avatar;
