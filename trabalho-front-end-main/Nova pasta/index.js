javascript
function toggleMenu() {
    var menuList = document.getElementById("tabela");
    menuList.style.display = (menuList.style.display === "block") ? "none" : "block";
    
    
     const tabela = document.getElementById('tabela');

     tabela.addEventListener('click', function(e) {
       const cell = e.target;
 
       
       if (cell.tagName.toLowerCase() === 'td') {
         
         const novoValor = prompt('nome do carro:');
         cell.textContent = novoValor;
       }
     });
   
}

