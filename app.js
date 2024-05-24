
  window.onload = function() {
    // Sakrij sve opise
    var opisi = document.querySelectorAll('.opis p');
    opisi.forEach(function(opis) {
      opis.style.display = 'none';
    });
    // Prikazi prvi opis
    var prviOpis = document.getElementById('djelatnost1');
    prviOpis.style.display = 'block';
  };
  
  // Funkcija koja prikazuje odgovarajući opis kad se klikne na link
  function prikaziOpis(djelatnostId, event) {
    event.preventDefault(); // Zaustavi podrazumijevano ponašanje linka
    // Sakrij sve opise
    var opisi = document.querySelectorAll('.opis p');
    opisi.forEach(function(opis) {
      opis.style.display = 'none';
    });
    // Prikazi odabrani opis
    var odabraniOpis = document.getElementById(djelatnostId);
    odabraniOpis.style.display = 'block';
  }


