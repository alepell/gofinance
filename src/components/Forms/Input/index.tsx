import React from "react";
import * as Style from "./styles";
import { TextInputProps } from "react-native";

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  return <Style.Container {...rest} />;
}
