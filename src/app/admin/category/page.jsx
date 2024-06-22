"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function page() {
  const { register, handleSubmit } = useForm();

  const [categories, setCategories] = useState([]);

  const load = async () => {
    const res = await fetch("/api/category");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(async (data) => {
            const res = await fetch("/api/category", {
              method: "POST",
              body: JSON.stringify(data),
            });
            console.log(res);
            load();
          })}
        >
          <input
            type="text"
            {...register("name", { required: "campo requerido" })}
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <div>
        {categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    </div>
  );
}

export default page;
