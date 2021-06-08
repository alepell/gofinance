import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as Style from "./styles";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface Props extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
  isActive: boolean;
}

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <Style.Container {...rest} isActive={isActive} type={type}>
      <Style.Icon name={icons[type]} type={type} />
      <Style.Title>{title}</Style.Title>
    </Style.Container>
  );
}
