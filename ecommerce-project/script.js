const products = [
  { id: 1, name: "Smartphone", price: 15000, category: "electronics", image: "https://via.placeholder.com/200" },
  { id: 2, name: "Laptop", price: 55000, category: "electronics", image: "https://via.placeholder.com/200" },
  { id: 3, name: "T-Shirt", price: 799, category: "clothing", image: "https://via.placeholder.com/200" },
  { id: 4, name: "Jeans", price: 1999, category: "clothing", image: "https://via.placeholder.com/200" },
  { id: 5, name: "Watch", price: 2999, category: "accessories", image: "https://via.placeholder.com/200" },
  { id: 6, name: "Sunglasses", price: 1299, category: "accessories", image: "https://via.placeholder.com/200" }
];

let currentCategory = "all";

function displayProducts(list) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  if (list.length === 0) {
    productList.innerHTML = "<p>No products found</p>";
    return;
  }

  list.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
    `;
    div.onclick = () => {
      alert(`Product: ${product.name}\nPrice: ₹${product.price}`);
    };
    productList.appendChild(div);
  });
}

function filterByCategory(category) {
  currentCategory = category;
  applyFilters();
}

function applyFilters() {
  const min = parseInt(document.getElementById("minPrice").value) || 0;
  const max = parseInt(document.getElementById("maxPrice").value) || Infinity;

  let filtered = products.filter(p => p.price >= min && p.price <= max);

  if (currentCategory !== "all") {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  displayProducts(filtered);
}

displayProducts(products);
