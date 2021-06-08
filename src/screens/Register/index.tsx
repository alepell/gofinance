import React, { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { Modal } from "react-native";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import * as Style from "./styles";
import { CategorySelect } from "../CategorySelect";

export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategory() {
    setCategoryModalOpen(true);
  }
  function handleCloseSelectCategory() {
    setCategoryModalOpen(false);
  }

  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>Cadastro</Style.Title>
      </Style.Header>

      <Style.Form>
        <Style.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <Style.TransactionTypes>
            <TransactionTypeButton
              title="Entrada"
              type="up"
              onPress={() => handleTransactionTypeSelect("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              title="Saída"
              type="down"
              onPress={() => handleTransactionTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </Style.TransactionTypes>
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategory}
          />
        </Style.Fields>
        <Button title="Enviar" />
      </Style.Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </Style.Container>
  );
}
