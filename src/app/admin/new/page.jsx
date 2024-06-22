"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function page() {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/category");
      const data = await res.json();
      console.log(data);
      setCategorys(data);
    };
    load();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section>
      <h1>add new peoduct</h1>

      <form
        onSubmit={handleSubmit(async (data) => {
          const formdata = new FormData();
          formdata.append("name", data.name);
          formdata.append("description", data.description);
          formdata.append("price", data.price);
          formdata.append("img", data.img[0]);
          formdata.append("stock", data.stock);
          formdata.append("category", data.category);

          const res = await fetch("/api/products", {
            method: "POST",
            body: formdata,
          });
        })}
        className="flex flex-col bg-slate-600 p-10 gap-5"
      >
        <input
          type="text"
          {...register("name", { required: "campo obligatorio" })}
        />

        <input
          type="text"
          {...register("description", { required: "campo obligatorio" })}
        />
        <input
          type="number"
          {...register("price", { required: "campo obligatorio" })}
        />

        <input
          type="file"
          {...register("img", { required: "campo obligatorio" })}
        />

        <input
          type="number"
          {...register("stock", { required: "campo obligatorio" })}
        />

        <select
          type="text"
          {...register("category", { required: "campo obligatorio" })}
        >
          {categorys.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <input type="submit" />
      </form>
    </section>
  );
}

export default page;
