import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import axios from "axios";

interface Tag {
  tag: String;
}

interface PostProp {
  _id: String;
  title: String;
  body: String;
  userId: String;
  tags: Tag[];
  reactions: Number;
}

export default function App() {
  const [posts, setPosts] = useState<PostProp[]>([]);

  const getAllPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/allposts");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.screenTitle}>List of posts</Text>

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.postListItem}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <View style={styles.postFooter}>
              <View style={styles.postFooterLeft}>
                {item.tags?.map((tag) => {
                  return (
                    <Text style={styles.tagItem} key={tag}>
                      {tag}
                    </Text>
                  );
                })}
              </View>
              <View style={styles.postFooterRight}>
                <View style={styles.postReaction}>
                  <Image
                    source={require("./assets/heart.png")}
                    style={styles.likeIcon}
                  />
                  <Text style={styles.likeNumber}>{item.reactions}</Text>
                </View>
                <View style={styles.postUser}>
                  <Text style={styles.userName}>{item.userId.name}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  postListItem: {
    padding: 15,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  postFooter: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
  },
  postFooterLeft: {
    width: "55%",
    flexDirection: "row",
  },
  tagItem: {
    color: "#5352ed",
    fontSize: 14,
    marginRight: 8,
    // paddingVertical: 2,
    paddingBottom: 2,
    paddingHorizontal: 4,
    borderColor: "orange",
    borderWidth: 0.5,
    borderStyle: "dashed",
    borderRadius: 5,
  },
  postFooterRight: {
    width: "45%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 20,
  },
  postReaction: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  likeIcon: {
    width: 16,
    height: 16,
    padding: 0,
    marginTop: 2,
    marginRight: 2,
  },
  likeNumber: {
    fontSize: 14,
  },
  userName: {
    fontSize: 14,
  },
});
