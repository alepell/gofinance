import React from "react";

import * as Style from "./styles";

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  return (
    <Style.Container>
      <Style.Title>{data.title}</Style.Title>
      <Style.Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Style.Amount>
      <Style.Footer>
        <Style.Category>
          <Style.Icon name={data.category.icon} />
          <Style.CategoryName>{data.category.name}</Style.CategoryName>
        </Style.Category>
        <Style.Date>{data.date}</Style.Date>
      </Style.Footer>
    </Style.Container>
  );
}
