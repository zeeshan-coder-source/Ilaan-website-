// Custom hook for products filtering, sorting, and state management
import { useState, useEffect, useMemo } from 'react';
import { getProducts } from '../services/api';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter & Sorting States
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [ledType, setLedType] = useState("all");
  const [priceRange, setPriceRange] = useState("all"); // 'all', 'under50', '50to120', 'above130'
  const [popularTag, setPopularTag] = useState("all");
  const [sort, setSort] = useState("recommended");

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
        setError(err.message || "Something went wrong while loading products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Compute filtered & sorted products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Search Filter
    if (search.trim() !== "") {
      const query = search.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      );
    }

    // 2. Category Filter
    if (category !== "all") {
      result = result.filter(p => p.category === category);
    }

    // 3. LED Type Filter
    if (ledType !== "all") {
      result = result.filter(p => p.ledType === ledType);
    }

    // 4. Price Range Filter
    if (priceRange !== "all") {
      if (priceRange === "under50") {
        result = result.filter(p => p.price <= 50.00);
      } else if (priceRange === "50to100") {
        result = result.filter(p => p.price > 50.00 && p.price <= 100.00);
      } else if (priceRange === "above100") {
        result = result.filter(p => p.price > 100.00);
      }
    }

    // 5. Popular Tags Filter (matches tag to name/category/ledType/description)
    if (popularTag !== "all") {
      const tagLower = popularTag.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(tagLower) ||
        p.category.toLowerCase().includes(tagLower) ||
        p.ledType.toLowerCase().includes(tagLower) ||
        p.description.toLowerCase().includes(tagLower)
      );
    }

    // 6. Sorting
    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // "recommended" -> keep featured items first, then by id
      result.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.id - b.id;
      });
    }

    return result;
  }, [products, search, category, ledType, priceRange, popularTag, sort]);

  // Reset all filters
  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setLedType("all");
    setPriceRange("all");
    setPopularTag("all");
    setSort("recommended");
  };

  return {
    products: filteredProducts,
    allProducts: products,
    loading,
    error,
    search,
    setSearch,
    category,
    setCategory,
    ledType,
    setLedType,
    priceRange,
    setPriceRange,
    popularTag,
    setPopularTag,
    sort,
    setSort,
    resetFilters
  };
};
