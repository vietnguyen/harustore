export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

export const productsAPI =
  'https://shopping-app-62f0a.firebaseio.com/products.json';
// export const productsAPI = "http://localhost:8001/api/products";
