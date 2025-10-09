import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useRouter().query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError("Error loading product.");
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <button
        onClick={() => window.history.back()}
        className="text-blue-600 mb-4"
      >
        ← Back
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-full md:w-1/2 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-1">Category: {product.category}</p>
          <p className="text-lg font-semibold mb-4">Price: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}