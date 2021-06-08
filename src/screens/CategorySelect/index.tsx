import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "../../components/Forms/Button";
import { categories } from "../../utils/categories";

import * as Style from "./styles";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  closeSelectCategory,
  setCategory,
}: Props) {
  function handleCategorySelect(item: Category) {
    setCategory(item);
  }
  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>Categoria</Style.Title>
      </Style.Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Style.Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Style.Icon name={item.icon} />
            <Style.Name>{item.name}</Style.Name>
          </Style.Category>
        )}
        ItemSeparatorComponent={() => <Style.Separator />}
      />

      <Style.Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Style.Footer>
    </Style.Container>
  );
}
