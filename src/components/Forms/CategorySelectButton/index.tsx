import React from "react";
import * as Style from "./styles";

interface Props {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: Props) {
  return (
    <Style.Container onPress={onPress}>
      <Style.Category>{title}</Style.Category>
      <Style.Icon name="chevron-down" />
    </Style.Container>
  );
}
