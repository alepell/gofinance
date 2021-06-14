import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import * as Style from "./styles";

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress, ...rest }: Props) {
  return (
    <Style.Container {...rest} onPress={onPress}>
      <Style.Title>{title}</Style.Title>
    </Style.Container>
  );
}
