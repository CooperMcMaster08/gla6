const productList = document.getElementById("product-list")
const search =  document.getElementById("product-search");
let items = []
displayAll()
if(items.length > 0){
  for (i =1; i <= 100;i++){
    displayItem(items[i])
  }
}
async function printItem(id) {
  const response = await fetch("./products.json");
  if (!response.ok) {
    throw new Error(`Could not load products: ${response.status}`);
  }
  // Stops here if the JSON file could not be loaded.

  const products = await response.json();
  const formattedId = String(id).padStart(3, "0");
  const item = products.find(product => product.id === formattedId);

  if (!item) {
    throw new Error(`No product found with ID ${formattedId}`);
  }
  items.push(item)
}
  // Stops here if the requested ID is not in the JSON.
 function displayItem(item){

  
  console.log(item)
  let newItem = document.createElement("tr")
  let product = document.createElement("td")
  let category = document.createElement("td")
  let price = document.createElement("td")
  let stock =document.createElement("td")
  let unit = document.createElement("td")
  let image = document.createElement("img") 
  let buy = document.createElement("button")
 
    
  image.src = item.image
  product.innerHTML = item.name
  category.innerHTML = item.category
  price.innerHTML = item.price
  stock.innerHTML = item.stock
  buy.innerHTML = "Add to Cart"
  unit.innerHTML = item.unit
  product.appendChild(buy)
  newItem.appendChild(product)
  newItem.appendChild(category)
newItem.appendChild(price)
newItem.appendChild(stock)
newItem.appendChild(unit)
newItem.appendChild(image)
productList.appendChild(newItem)
  }




// This function loads the JSON, finds the product, and prints its ID.
function displayAll(){

  for (let i = 1; i <= 100 ;i++){
    
    try {
    printItem(i)
    }
    catch{
      (error => console.error(error));
    }
  }
}
// This call looks for item 2; its stored ID is "002".

