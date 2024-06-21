import React from "react";

import ProductCard from '@/components/ProductCard'

async function loadingPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
  const data = await res.json();
  const posts = data.slice(0, 15);

  await new Promise(resolve => setTimeout(resolve, 2000))

  console.log(data);
  return posts;
}

async function page() {
  const posts = await loadingPosts();
  return (
    <main>
      <section>
        <div className="flex justify-between flex-wrap">
          {posts.map((i) => (
            <ProductCard props={i} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default page;
