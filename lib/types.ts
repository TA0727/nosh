export type MenuCategory = "和風" | "洋風" | "スパイス" | "高たんぱく" | "低糖質";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  kcal: number;
  proteinG: number;
  carbsG: number;
  price: number; // JPY
  image: string; // emoji placeholder
  tags: string[];
};

export type Plan = {
  mealsPerWeek: 6 | 8 | 10;
  deliveryCycle: "毎週" | "隔週";
};
