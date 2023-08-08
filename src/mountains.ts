import Mountain from "./models/Mountain";

// mountains meets the contract of the Array Type of Mountain[]
const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (array: Mountain[]): string => {
  if (array.length) {
    return array.reduce((pv, cv) => (cv.height > pv.height ? cv : pv)).name;
  } else {
    return "";
  }
};

console.log(findNameOfTallestMountain(mountains));
