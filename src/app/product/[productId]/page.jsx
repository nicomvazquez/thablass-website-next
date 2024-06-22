import React from "react";

async function loadingPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const post = await res.json();

  console.log(post);
  return post;
}

async function page({ params }) {
  const post = await loadingPost(params.productId);

  return (
    <section>
      <div>
        <h1>{post.title}</h1>
        <img src={post.url} alt={post.title} />
      </div>
    </section>
  );
}

export default page;
