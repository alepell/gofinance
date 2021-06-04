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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </Style.HightlightCards>
    </Style.Container>
  );
}
