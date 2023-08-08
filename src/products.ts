import Product from "./models/Product";

const products: Product[] = [
  { name: "apple", price: 4 },
  { name: "chocolate", price: 2 },
  { name: "string cheese", price: 0.5 },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  if (array.length) {
    return array.reduce((pv, cv) => pv + cv.price, 0) / array.length;
  } else {
    return 0;
  }
};
