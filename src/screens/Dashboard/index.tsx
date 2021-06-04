import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

import * as Style from "./styles";

export function Dashboard() {
  return (
    <Style.Container>
      <Style.Header>
        <Style.UserWrapper>
          <Style.UserInfo>
            <Style.Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/39893609?v=4",
              }}
            />

            <Style.User>
              <Style.UserGreeting>Olá</Style.UserGreeting>
              <Style.UserName>Alexandre</Style.UserName>
            </Style.User>
          </Style.UserInfo>
          <Style.Icon name="power" />
        </Style.UserWrapper>
      </Style.Header>

      <Style.HightlightCards>
        <HighlightCard
          type="up"
          title="Entrada"
          amount="R$ 17.000,00"
          lastTransaction="Ultima em 18 de abril"
        />
        <HighlightCard
          type="down"
          title="Saída"
          amount="R$ 10.000,00"
          lastTransaction="Ultima em 19 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 7.000,00"
          lastTransaction="Ultima em 19 de abril"
        />
      </Style.HightlightCards>
    </Style.Container>
  );
}
