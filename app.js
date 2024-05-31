
  window.onload = function() {
    
    var opisi = document.querySelectorAll('.opis p');
    opisi.forEach(function(opis) {
      opis.style.display = 'none';
    });
   
    var prviOpis = document.getElementById('djelatnost1');
    prviOpis.style.display = 'block';
  };
  
  function prikaziOpis(djelatnostId, event) {
    event.preventDefault(); 
    
    var opisi = document.querySelectorAll('.opis p');
    opisi.forEach(function(opis) {
      opis.style.display = 'none';
    });
    
    var odabraniOpis = document.getElementById(djelatnostId);
    odabraniOpis.style.display = 'block';
  }


