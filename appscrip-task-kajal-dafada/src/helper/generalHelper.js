export const sortProducts = (products, criteria) => {
  switch (criteria) {
    case "Recommended":
      return [...products].sort((a, b) => b.rating.rate - a.rating.rate);
    case "Newest first":
      return [...products].sort((a, b) => b.id - a.id);
    case "Popular":
      return [...products].sort((a, b) => b.rating.count - a.rating.count);
    case "Price : high to low":
      return [...products].sort((a, b) => b.price - a.price);
    case "Price : low to high":
      return [...products].sort((a, b) => a.price - b.price);
    default:
      return products;
  }
};
