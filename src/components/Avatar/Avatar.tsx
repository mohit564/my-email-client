import React from "react";

type AvatarProps = {
  name: string;
};

function Avatar({ name }: AvatarProps) {
  return (
    <section className="avatar">
      <h1>{name?.charAt(0).toUpperCase()}</h1>
    </section>
  );
}

export default Avatar;
