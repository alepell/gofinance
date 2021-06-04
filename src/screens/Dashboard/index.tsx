import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import * as Style from "./styles";
export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 16.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "18/04/2021",
    },
    {
      id: "2",
      type: "negative",
      title: "Just Burguer",
      amount: "R$ 86,00",
      category: { name: "Alimentação", icon: "coffee" },
      date: "10/04/2021",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel Apartamento",
      amount: "R$ 1200,00",
      category: { name: "Casa", icon: "shopping-bag" },
      date: "10/04/2021",
    },
  ];

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

      <Style.Transactions>
        <Style.Title>Listagem</Style.Title>
        <Style.TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Style.Transactions>
    </Style.Container>
  );
}
