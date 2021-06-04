import React from "react";

import * as Style from "./styles";

export function HighlightCard() {
  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>Entrada</Style.Title>
        <Style.Icon name="arrow-up-circle" />
      </Style.Header>

      <Style.Footer>
        <Style.Amount>R$ 17.400,00</Style.Amount>
        <Style.LastTransaction>
          Última entrada dia 18 de abril
        </Style.LastTransaction>
      </Style.Footer>
    </Style.Container>
  );
}
