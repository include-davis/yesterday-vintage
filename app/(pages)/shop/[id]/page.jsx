import { productsFallbackData } from "../../../_data/productsFallback";
import ItemClient from "./ItemClient";

async function getProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/content/products?_published=true`,
      { next: { tags: ["cms"] } }
    );
    const data = await res.json();
    if (!data.ok || !data.body) throw new Error(data.error);
    if (data.body.length === 0) return [];
    return data.body.map((card) => ({
      id: card._id,
      imageUrl: card.image[0].src,
      name: card.name,
      price: card.price,
      options: card.options || null,
      category: card.category,
      description: card.description,
    }));
  } catch (e) {
    console.error(`Failed to fetch products: ${e.message}`);
    return productsFallbackData;
  }
}

export default async function ItemPage({ params }) {
  const { id } = await params;
  const products = await getProducts();
  const product = products.find((p) => p.id === id) || null;
  return <ItemClient product={product} />;
}
