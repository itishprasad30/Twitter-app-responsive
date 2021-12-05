import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
  return (
    <div className="text-white flex-grow border-l border-r  border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className="flex sm:justify-between items-center py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700 ">
        <h3 className="text-lg sm:text-xl font-semibold">Home</h3>
        <div className="hoverAnimation  h-9 w-9 flex items-center xl:p-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      <Input />
      <div className="pb-72">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
