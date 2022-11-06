function calcTotal() {
        let cant = document.getElementById('cantInput').value;
        cant = parseInt(cant);
        let total = 0;
        total = cant * 200;
        let categoria = document.getElementById('categ').value;
        
        if(categoria == 1) {
          total = (cant * 200) * 0.20;
        }
        if(categoria == 2) {
          total = (cant * 200) * 0.50;
        }
        if(categoria == 3) {
          total = (cant * 200) * 0.85;
        }
        document.getElementById('cantTotal').innerHTML ="Total a Pagar: $" + total;
      }
      function clearForm() {
        document.getElementById('cantTotal').innerHTML = "Total a Pagar: $";
      }