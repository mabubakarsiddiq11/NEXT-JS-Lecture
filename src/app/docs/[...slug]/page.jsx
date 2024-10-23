import React from "react";

function page({ params }) {
  return (
    <div>
      { params.slug.length === 2 ? (
        <h1 className="text-4xl text-center font-bold">
          docs page {params.slug[0]} than nested {params.slug[1]}
        </h1>
      ) : params.slug.length === 1 ? (
        <h1 className="text-4xl text-center font-bold">
          docs page {params.slug[0]}
        </h1>
      ) : null }
    </div>
  );
}

export default page;
