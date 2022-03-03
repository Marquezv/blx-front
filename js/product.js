const url = 'https://blx-app.herokuapp.com'
document.addEventListener('DOMContentLoaded', function(){
    const token = sessionStorage.getItem('Authorization')
    const product_id = sessionStorage.getItem('product_id')
    const user_id = sessionStorage.getItem('user_id')

    axios.get(`${url}/products/${product_id}`)
    .then(response => {
        const product = response.data

        const banner = document.getElementById('banner-text')
        const divCards = document.getElementById('div-product')

        const text = `<h4>Nome da Loja: ${product.user.name}</h4>`
        const card = 
                `<div class="col">
                <div class="card">
                <img src="./img/gato.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 >${product.name}</h5>
                    <p class="card-text">
                      <p>${product.details}</p>
                      <label>R$ ${product.price}</label>
                    </p>
                    <div class="card-footer">
                      <button class="btn"> Adicionar ao Carrinho </button>
                    </div>
                </div>
                </div>
                </div>`

                
        banner.innerHTML = text
        divCards.innerHTML = card


    })
    loadListProducts(user_id)
    
})

function loadListProducts(user_id){

  axios.get(`${url}/products/store/${user_id}`)
  .then(response => {
    console.log(response)
    const list = document.getElementById("list-products")
    const products = response.data
    console.log(products.id)
   
    list.innerHTML = '';

        products.forEach(products => {
            const productsList = 
            `<div class="col">
            <div class="card">
            <img src="./img/gato.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 >${products.name}</h5>
                <p class="card-text">
                  <label>R$ ${products.price}</label>
                </p>
                <div class="card-footer">
                <button class="btn" > Veja Mais </button>
                </div>
            </div>
            </div>
            </div>`
            
            
        
            const item = document.createElement('li')
            item.innerHTML = productsList;
        
            list.appendChild(item)

        });
  })

}

// Compradores vendo 

// Dono vendo


