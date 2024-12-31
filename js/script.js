// Sample product data
const productData = [
    { barcode: "123456", name: "Milk", section: "Dairy", aisle: "A1", rack: "R1" },
    { barcode: "234567", name: "Bread", section: "Bakery", aisle: "A2", rack: "R2" },
    { barcode: "345678", name: "Eggs", section: "Dairy", aisle: "A1", rack: "R3" },
    { barcode: "456789", name: "Apples", section: "Fruits", aisle: "A3", rack: "R1" },
];

// Populate table with all products
const tableBody = document.querySelector("#productTable");

function populateTable(data) {
    tableBody.innerHTML = ""; // Clear existing rows
    data.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${product.barcode}</td>
      <td>${product.name}</td>
      <td>${product.section}</td>
      <td>${product.aisle}</td>
      <td>${product.rack}</td>
    `;
        tableBody.appendChild(row);
    });
}

// Filter products based on search input
document.getElementById("searchInput").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    const filteredProducts = productData.filter(product =>
        product.barcode.toLowerCase().includes(searchValue) ||
        product.name.toLowerCase().includes(searchValue) ||
        product.section.toLowerCase().includes(searchValue) ||
        product.aisle.toLowerCase().includes(searchValue) ||
        product.rack.toLowerCase().includes(searchValue)
    );
    populateTable(filteredProducts);
});

// Initial population of the table
populateTable(productData);
