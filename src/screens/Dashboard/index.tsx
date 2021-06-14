import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransactions() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const dateFormatted = new Date(item.date);

        const date = new Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(dateFormatted);

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );

    setData(transactionsFormatted);
  }

  useEffect(() => {
    loadTransactions();
  }, [data]);

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
          <Style.LogoutButton onPress={() => {}}>
            <Style.Icon name="power" />
          </Style.LogoutButton>
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
