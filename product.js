function addProduct(event) {
  event.preventDefault();

  const productId = document.getElementById("productId").value;
  const productName = document.getElementById("productName").value;
  const description = document.getElementById("description").value;
  const quantity = document.getElementById("quantity").value;
  const minStock = document.getElementById("minStock").value;
  const price = document.getElementById("price").value;
  const iva = document.querySelector('input[name="gridRadios"]:checked').value;

  // Crear un objeto con los datos a enviar en la solicitud POST
  const productData = {
    productname: productName,
    descripcion: description,
    quantity: parseInt(quantity),
    minstock: parseInt(minStock),
    price: parseFloat(price),
    iva: parseInt(iva),
  };

  // Realizar la solicitud POST utilizando fetch
  fetch("https://654ccfce77200d6ba8597796.mockapi.io/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Producto agregado con éxito.");
        // Puedes agregar aquí cualquier lógica adicional después de agregar el producto.
        resetForm();
      } else {
        console.error("Error al agregar el producto.");
      }
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
}

function resetForm() {
  document.getElementById("productName").value = "";
  document.getElementById("description").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("minStock").value = "";
  document.getElementById("price").value = "";
  document.getElementById("gridRadios3").checked = true;
}

document.getElementById("saveButton").addEventListener("click", addProduct);
