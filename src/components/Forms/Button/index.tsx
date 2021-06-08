import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as Style from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Style.Container {...rest}>
      <Style.Title>{title}</Style.Title>
    </Style.Container>
  );
}
