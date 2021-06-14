import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import * as Style from "./styles";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface Props extends RectButtonProps {
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
    <Style.Container isActive={isActive} type={type}>
      <Style.Button {...rest}>
        <Style.Icon name={icons[type]} type={type} />
        <Style.Title>{title}</Style.Title>
      </Style.Button>
    </Style.Container>
  );
}
