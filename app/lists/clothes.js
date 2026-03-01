export const clothes = [
    { id: "1", src: "/Yesterday-IG-Logo-10.svg", title: "NAME", price: "19.99", size: "medium", category: "shirts" },
    { id: "2", src: "/Yesterday-IG-Logo-10.svg", title: "NAME", price: "49.99", size: "large", category: "hoodies" },
    { id: "3", src: "/Yesterday-IG-Logo-10.svg", title: "NAME", price: "9.99", size: "small", category: "accessories" },
    { id: "4", src: "/Yesterday-IG-Logo-10.svg", title: "NAME", price: "24.99", size: "small", category: "shirts" },
    { id: "5", src: "/Yesterday-IG-Logo-10.svg", title: "NAME", price: "15.99", size: "x-small", category: "shirts" },
    { id: "6", src: "/Yesterday-IG-Logo-10.svg", title: "NAME", price: "59.99", size: "x-large", category: "hoodies" },
];

export function getItemById(id) {
  return clothes.find((item) => String(item.id) === String(id)) || null;
}