document.addEventListener("DOMContentLoaded", function () {
  const containerProductList = document.getElementById("productsList");
  const addProductButton = document.getElementById("addProductButton");

  // Función para mostrar mensajes de error
  function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  // Función para ocultar mensajes de error
  function hideError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }

  addProductButton.addEventListener("click", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const productName = document.getElementById("productName").value;
    const productQuantity = document.getElementById("productQuantity").value;
    const productPrice = document.getElementById("productPrice").value;

    // Validación de campos y mensajes de error
    if (productName.trim() === "") {
      showError("productName", "Por favor, complete el campo 'Nombre'.");
      return;
    } else {
      hideError("productName");
    }

    if (productQuantity.trim() === "") {
      showError("productQuantity", "Por favor, complete el campo 'Cantidad'.");
      return;
    } else {
      hideError("productQuantity");
    }

    if (productPrice.trim() === "") {
      showError("productPrice", "Por favor, complete el campo 'Precio'.");
      return;
    } else {
      hideError("productPrice");
    }

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
