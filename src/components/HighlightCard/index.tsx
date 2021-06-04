import React from "react";

import * as Style from "./styles";

interface Props {
  type: "up" | "down" | "total";
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function HighlightCard({ type, title, amount, lastTransaction }: Props) {
  return (
    <Style.Container type={type}>
      <Style.Header>
        <Style.Title type={type}>{title}</Style.Title>
        <Style.Icon name={icon[type]} type={type} />
      </Style.Header>

      <Style.Footer>
        <Style.Amount type={type}>{amount}</Style.Amount>
        <Style.LastTransaction type={type}>
          {lastTransaction}
        </Style.LastTransaction>
      </Style.Footer>
    </Style.Container>
  );
}
