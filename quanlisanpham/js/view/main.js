let store = new Store
function main() {
    let product = new Product(1,'bánh', 3 , 1000)
    store.add(product);
    let productInStore = store.findAll()
    for (let i = 0; i < productInStore.length; i++) {
        console.log(productInStore[i]);

    }

}
main()
let productInStore = store.findAll()
function showAll() {
    let str = ``;
    for (let i = 0; i < productInStore.length; i++) {
        str += `<tr>
            <td>${productInStore[i]._id}</td>
            <td>${productInStore[i]._name}</td>
            <td>${productInStore[i]._quality}</td>
            <td>${productInStore[i]._price}</td>
            <td><button>edit</button></td>
            <td><button onclick = "remove(${i})">remove</button></td>
        </tr>`

    }
    document.getElementById('products').innerHTML = str;

}
showAll()

function showFormAdd() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let quality = document.getElementById('quality');
    let price = document.getElementById('price');
    let newProduct = new Product(id, name, quality, price);
    store.add(newProduct);
    console.log(store);
    alert("Add Success");
    showAll();
    document.getElementById('form-add').innerHTML = '';
}
function remove(index) {
    let isConfirm = confirm('Bạn có muốn xóa không ?')
    if (isConfirm) {
        store.remove(index)
        showAll();
    }
}
function showFormEdit(index) {
    document.getElementById('form-add').innerHTML = `
    <center>
        <h1>Edit</h1>
        <table border="0.5" style="border: 2px solid>
            <tr>
                <td>ID:</td>
                <td><input type="number" value="${productInStore[index]._id}" id="id2"></td>
            </tr>
            <tr>
                <td>Name:</td>
                <td><input type="text" value="${productInStore[index]._name}" id="name2"></td>
            </tr>
            <tr>
                <td>Quantity:</td>
                <td><input type="number" value="${productInStore[index]._quality}" id="quantity2"></td>
            </tr>
            <tr>
                <td>Price:</td>
                <td><input type="number" value="${productInStore[index]._price}" id="price2"></td>
            </tr>
            <tr>
                <td colspan="2"><button onclick="edit(${index})">Save</button></td>
            </tr>
        </table>
    </center>
    `
}

function edit(index) {
    let id = +document.getElementById('id2').value;
    let name = document.getElementById('name2').value;
    let quality = +document.getElementById('quality2').value;
    let price = +document.getElementById('price2').value;
    let editProduct = new Product(id, name, quality, price);
    productInStore[index].id = id;
    productInStore[index].name = name;
    productInStore[index].quantity = quality;
    productInStore[index].price = price;
    showAll()
    document.getElementById('form-add').innerHTML = ''
}


