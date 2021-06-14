import React from "react";
import { categories } from "../../utils/categories";

import * as Style from "./styles";

export interface TransactionCardProps {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  const category = categories.filter((item) => item.key === data.category)[0];

  return (
    <Style.Container>
      <Style.Title>{data.name}</Style.Title>
      <Style.Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Style.Amount>
      <Style.Footer>
        <Style.Category>
          <Style.Icon name={category.icon} />
          <Style.CategoryName>{category.name}</Style.CategoryName>
        </Style.Category>
        <Style.Date>{data.date}</Style.Date>
      </Style.Footer>
    </Style.Container>
  );
}
