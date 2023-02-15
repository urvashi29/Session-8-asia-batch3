import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec } from "./slices/counterSlice";
import { useGetAllPostQuery, useGetPostByIdQuery } from "./slices/postApi";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const getPostData = useGetAllPostQuery();
  console.log(getPostData.data);

  const getPost = useGetPostByIdQuery(2);
  console.log(getPost.data);

  //create custom hook
  // useEffect(() => {

  // }, []);

  const postList =
    getPostData !== undefined ? (
      getPostData.data.map((item) => {
        return <React.Fragment key={item.id}>{item.title}</React.Fragment>;
      })
    ) : (
      <p>No Post yet</p>
    );

  return (
    <>
      <button
        onClick={() => {
          dispatch(inc(2));
        }}
      >
        +
      </button>
      {count}
      <button onClick={() => dispatch(dec(1))}>-</button>

      {postList}
    </>
  );
};

export default Counter;
