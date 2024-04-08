import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import axios from "axios";
import React from "react";
import Item from "./Item";

const ListItems = () => {
  const [posts, setPosts] = useState(null);

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
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <Item
          title={item.title}
          userName={item.userId.name}
          tags={item.tags}
          reactions={item.reactions}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListItems;
