import { useEffect, useState } from "react";
import styled from "styled-components";

export default function componentName() {
  const [fetchType, setFetchType] = useState("posts");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    function accessJSONApi() {
      fetch(`https://jsonplaceholder.typicode.com/${fetchType}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
    accessJSONApi();
  }, [fetchType]);
  return (
    <>
      <Container>
        <h1>Posts</h1>
        <div>
          <button onClick={() => setFetchType("posts")}>Posts</button>
          <button onClick={() => setFetchType("comments")}>Comments</button>
        </div>
        <div>{JSON.stringify(data)}</div>
      </Container>
    </>
  );
}

const Container = styled.section``;
