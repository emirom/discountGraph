export default [
  {
    id: 0,
    name: "Product-1",
    discount: 2,
    graphDiscount: 0,
    categoryId: 2,
  },
];

export interface IProduct {
  id: Number;
  name: String;
  discount: Number;
  graphDiscount: Number;
  categoryId: Number;
}
