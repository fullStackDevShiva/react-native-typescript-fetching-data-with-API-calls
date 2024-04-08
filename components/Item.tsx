import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface Tag {
  tag: string;
}

interface ItemProp {
  title: string;
  userName: string;
  tags: Tag[];
  reactions: number;
}

const Item: React.FC<ItemProp> = ({ title, userName, tags, reactions }) => {
  return (
    <View style={styles.postListItem}>
      <Text style={styles.postTitle}>{title}</Text>
      <View style={styles.postFooter}>
        <View style={styles.postFooterLeft}>
          {tags?.map((tag, index) => {
            return (
              <Text style={styles.tagItem} key={index}>
                {tag}
              </Text>
            );
          })}
        </View>
        <View style={styles.postFooterRight}>
          <View style={styles.postReaction}>
            <Image
              source={require("../assets/heart.png")}
              style={styles.likeIcon}
            />
            <Text style={styles.likeNumber}>{reactions}</Text>
          </View>
          <View style={styles.postUser}>
            <Text style={styles.userName}>{userName}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  itemTxt1: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  itemTxt2: {
    fontSize: 16,
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
    // marginRight: 2,
  },
  likeNumber: {
    fontSize: 14,
  },
  postUser: {
    marginLeft: 4,
  },
  userName: {
    fontSize: 14,
  },
});
