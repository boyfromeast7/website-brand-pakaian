//sambutan//
alert('Selamat datang di Gator Clouth!')

// Efek header dan navigasi//
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("scroll", function() {
        const parallax = document.querySelector(".parallax");
        let scrollPosition = window.scrollY;
        parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
    });
});

//Untuk Navigasi//
document.querySelector('.burger').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }else {
        sidebar.classList.add('active');
    }
});

// Dummy data for best seller products with image URLs
const bestSellerProducts = [
  { id: 1, name: 'T Shirt Black Mamba', price: 29.99, imageUrl: 'assets/gambar/Black Mamba T Shirt.jpeg' },
  { id: 2, name: 'BlackHole Hoodie', price: 39.99, imageUrl: 'assets/gambar/Hoodie anjay.jpeg' },
  { id: 3, name: 'White LMAO', price: 49.99, imageUrl: 'assets/gambar/T shirt white LMAO 2.jpeg' },
  // Add more products as needed
];

document.addEventListener('DOMContentLoaded', function() {
  const unggulanContainer = document.getElementById('unggulan');

  bestSellerProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'bestSellerProduct';
    productElement.innerHTML = `
      <img class="productImage" src="${product.imageUrl}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    unggulanContainer.appendChild(productElement);
  });
});
