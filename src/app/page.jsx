import React from "react";

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
        <div>
          {posts.map((i) => (
            <div>
              <img src={i.url} alt={i.title} />
              <p>{i.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default page;
