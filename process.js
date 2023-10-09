document.addEventListener("DOMContentLoaded", function () {
  const containerProductList = document.getElementById("productsList");
  const addProductButton = document.getElementById("addProductButton");

  addProductButton.addEventListener("click", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const productName = document.getElementById("productName").value;
    const productQuantity = document.getElementById("productQuantity").value;
    const productPrice = document.getElementById("productPrice").value;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
          <td>${productName}</td>
          <td>${productQuantity}</td>
          <td>${productPrice}</td>
          <td><button class="btn btn-danger">Eliminar</button></td>
        `;

    containerProductList.appendChild(newRow);

    // Limpiar los campos después de agregar un producto
    document.getElementById("productName").value = "";
    document.getElementById("productQuantity").value = "";
    document.getElementById("productPrice").value = "";
  });
});
