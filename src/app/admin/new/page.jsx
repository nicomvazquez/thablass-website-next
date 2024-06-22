"use client";

import React from "react";
import { useForm } from "react-hook-form";

function page() {
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
          formdata.append("nombre", data.nombre);
          formdata.append("description", data.description);
          formdata.append("price", data.price);
          formdata.append("img", data.img[0]);
          formdata.append("stock", data.stock);
          formdata.append("categorie", data.categorie);

          const res = await fetch("/api/products", {
            method: "POST",
            body: formdata,
          });
        })}
        className="flex flex-col bg-slate-600 p-10 gap-5"
      >
        <input
          type="text"
          {...register("nombre", { required: "campo obligatorio" })}
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

        <input
          type="text"
          {...register("categorie", { required: "campo obligatorio" })}
        />

        <input type="submit" />
      </form>
    </section>
  );
}

export default page;
