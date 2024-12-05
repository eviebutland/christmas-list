export interface ClothingItem {
  id: number;
  priority: "high" | "medium" | "low";
  instock: boolean;
  title: string;
  brand: string;
  colour: string;
  url: string;
}
