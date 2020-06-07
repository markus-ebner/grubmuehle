import React from "react";

export const MainHeading = ({ title, url }) => {
  return (
    <section
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h1
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #0088D4, -0.5rem 0 0 #0088D4",
          backgroundColor: "#0088D4",
          color: "white",
          padding: "1rem",
        }}
      >
        {title}
      </h1>
    </section>
  );
};
