import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />
      <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
      <p className="text-gray-600 mb-1">Category: {product.category}</p>
      <p className="font-bold mb-2">Price: ${product.price}</p>
      <Link href={`/products/${product.id}`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View Details
        </button>
      </Link>
    </div>
  );
}