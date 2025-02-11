const produtos = {
(nome: "Produto 1", preço 10.00, imagem: "" )
(nome: "Produto 2", preço 15.00, imagem: "" )
(nome: "Produto 3", preço 25.00, imagem: "" )
}

const carrinho ={}

const produtosdiv = Document.getElementByld("produtos");
const carrinhoLista = Document.getElementByld("carrinho")
const totalSpan = Document.getElementByld("total")

//função para exibir os produtos na tela 
function exibirProdutos(){ produtos.for (produtos)
    const produtosdiv = document.createElement("div");
    produtosdiv.classList.add("produto");
    produtosdiv.innerHTML =  ` 
    <img src ="${produto.imagem}" alt="${produto.nome}"></img>
      <h3>${produtos.nome}</h3>
      <buttom onclik="adicionarAocarrinho('${produto.nome}', ${produto.preço})">

    `;
    produtosdiv.appendChild(produtosdiv);
}
   function adicionarAocarrinho(nome, preço){
    carrinho.push({nome, preço})
    atualizarCarrinho();
   }
          function atualizarCarrinho(){
            carrinho.lista.innerHTML = ""
            let total = 0;
            carrinho.forEach(item =>{const itemLista = document.createElement("11");
            })
    }
        
    
