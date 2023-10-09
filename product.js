function generateUniqueId() {
    let counter = parseInt(localStorage.getItem('counter')) || 1;
    const uniqueId = counter++;
    localStorage.setItem('counter', counter);
    document.getElementById('productId').value = uniqueId;
}

function addProduct(event) {
    event.preventDefault();

    generateUniqueId();

    const productId = document.getElementById('productId').value;
    const productName = document.getElementById('productName').value;
    const description = document.getElementById('description').value;
    const quantity = document.getElementById('quantity').value;
    const minStock = document.getElementById('minStock').value;
    const price = document.getElementById('price').value;
    const iva = document.querySelector('input[name="gridRadios"]:checked').value;

    console.log({
        productId,
        productName,
        description,
        quantity,
        minStock,
        price,
        iva
    });

    resetForm();
}

function resetForm() {
    document.getElementById('productName').value = '';
    document.getElementById('description').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('minStock').value = '';
    document.getElementById('price').value = '';
    document.getElementById('gridRadios3').checked = true;
}

document.getElementById('saveButton').addEventListener('click', addProduct);
