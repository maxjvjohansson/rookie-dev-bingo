"use client";

import { Img, Wrapper } from "./styles";

export function Avatar({
  name,
  imageUrl,
  size = 36,
  onClick,
}: {
  name: string;
  imageUrl?: string | null;
  size?: number;
  onClick?: () => void;
}) {
  const firstNameInitial: string = name?.charAt(0)?.toUpperCase() ?? "?";

  return (
    <Wrapper size={size} onClick={onClick}>
      {imageUrl ? <Img src={imageUrl} alt={name} /> : firstNameInitial}
    </Wrapper>
  );
}
