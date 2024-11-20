import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { Contributor } from "./contributors.vm";

interface Props {
  list: Contributor[];
}

export const Contributors: React.FC<Props> = ({ list }) => {
  return (
    <>
      <Text style={styles.title} accessibilityRole="header">
        Contributors:
      </Text>
      <ScrollView>
        <View style={styles.container}>
          {list.map((item) => (
            <View
              accessibilityLabel={item.login}
              accessible={true}
              accessibilityRole="image"
            >
              <Image
                key={item.id}
                style={styles.avatar}
                source={{ uri: item.avatarUrl }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
});