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
    <section>
      <div className="flex justify-between flex-wrap">
        {posts.map((i) => (
          <ProductCard props={i} />
        ))}
      </div>
    </section>
  );
}

export default page;
