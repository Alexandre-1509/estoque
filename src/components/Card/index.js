import React from "react";
import { Card, Texto } from "./styles";

export function CardItem({ data }) {
  return (
    <Card>
      <Texto>{data.name}</Texto>
    </Card>
  );
}
