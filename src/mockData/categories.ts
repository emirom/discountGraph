export default [
  {
    id: 1,
    name: "Cat-1",
    discount: 10,
    parentId: 0,
    categoryIds: [2],
    graphDiscount: undefined,
  },
  {
    id: 2,
    name: "Cat-2",
    discount: 1,
    parentId: 1,
    categoryIds: [],
    graphDiscount: undefined,
  },
];

export interface ICategory {
  id: Number;
  name: String;
  parentId: Number;
  discount: Number | undefined;
  graphDiscount: Number | undefined;
  categoryIds: Number[];
}
