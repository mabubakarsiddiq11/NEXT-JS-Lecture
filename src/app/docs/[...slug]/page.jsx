import React from "react";
import { notFound } from "next/navigation";

function page({ params }) {
  return (
    <div>
      { params.slug.length === 2 ? (
        <h1 className="text-4xl text-center font-bold">
          docs Nested page ({params.slug[0]}) than another nested ({params.slug[1]})
        </h1>
      ) : params.slug.length === 1 ? (
        <h1 className="text-4xl text-center font-bold">
          docs Nested page ({params.slug[0]})
        </h1>
      ) : notFound() }
    </div>
  );
}

export default page;
