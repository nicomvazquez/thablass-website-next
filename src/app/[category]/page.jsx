import React from "react";
import { prisma } from "@/libs/prisma";

import ProductCard from "@/components/ProductCard";

async function loadingPosts(category) {
  const res = await prisma.product.findMany({
    where: {
      categorie: category,
    },
  });
  return res;
}

async function page({ params }) {
  const posts = await loadingPosts(params.category);
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
