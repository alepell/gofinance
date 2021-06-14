import React from "react";
import { TextInputProps } from "react-native";
import { Input } from "../Input";
import { Control, Controller } from "react-hook-form";
import * as Style from "./styles";

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export function InputForm({ control, name, error, ...rest }: Props) {
  return (
    <Style.Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input {...rest} onChangeText={onChange} value={value} />
        )}
      ></Controller>
      {error && <Style.Error>{error}</Style.Error>}
    </Style.Container>
  );
}
