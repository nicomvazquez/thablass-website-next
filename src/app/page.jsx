import React from "react";
import { prisma } from "@/libs/prisma";

import ProductCard from "@/components/ProductCard";

async function loadingPosts() {
  const res = await prisma.product.findMany();
  return res;
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
