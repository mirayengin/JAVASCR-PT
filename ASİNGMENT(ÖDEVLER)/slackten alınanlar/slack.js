    let sayi1 = document.getElementById('sayi1');
    let sayi2 = document.getElementById('sayi2');
    let topla = document.getElementById('topla');
    let sonuc = document.getElementById('sonuc');
    let cikarma = document.getElementById('cikarma');
    let bolme = document.getElementById('bolme');
    let carpma = document.getElementById('carpma');
    let textsnc = document.getElementById('textsnc');
   
   
    topla.addEventListener('click', function () {
        let topla1 = sayi1.value;
        let topla2 = sayi2.value;
        let x = textsnc;
   
        x = Number(topla1) + Number(topla2);
       textsnc.innerHTML = x;
   
    });
   
    cikarma.addEventListener('click', function () {
        let topla1 = sayi1.value;
        let topla2 = sayi2.value;
        let x = sonuc;
   
       x = Number(topla1) - Number(topla2);
   
        textsnc.innerHTML = x;
   
    });
   
   
    bolme.addEventListener('click', function () {
       let topla1 = sayi1.value;
       let topla2 = sayi2.value;
      let x = sonuc;
   
       x = Number(topla1) / Number(topla2);
   
       textsnc.innerHTML = x;
   
    });
   
   carpma.addEventListener('click', function () {
       let topla1 = sayi1.value;
       let topla2 = sayi2.value;
       let x = sonuc;
   
       x = Number(topla1) * Number(topla2);
   
       textsnc.innerHTML = x;
   
   });
   
   
   
   // Hw1------------------------------------------------------------------------
    let sayi4 = +prompt('sayi gir pls lutfen');
   
    let sayi5 = +prompt('sayi gir lutfen gene');
   
    let op = prompt('islem turu');
    let sonuc = 0;
   
    if (op === '+') {
        sonuc = sayi4 + sayi5;
        console.log(`sonuc = ${sonuc}`);
    }
    if (op === '-') {
        sonuc = sayi4 - sayi5;
        console.log(`sonuc = ${sonuc}`);
    }
    if (op === '/') {
        sonuc = sayi4 / sayi5;
        console.log(`sonuc = ${sonuc}`);
    }
    if (op === '*') {
        sonuc = sayi4 * sayi5;
        console.log(`sonuc = ${sonuc}`);
    };
   //------------------------------------------------------------------------
   
   
   // Hw2------------------------------------------------------------------------
    let gun = prompt('Gunu giriniz');
   
    switch (gun) {
   
       case 'pazartesi':
           console.log('InClass');
   
           break;
   
      case 'sali':
           console.log('InClass');
           break;
    case 'carsamba':
            console.log('InClass');
   
           break;
       case 'persembe':
           console.log('InClass');
   
            break;
       case 'cuma':
            console.log('Teamwork');
   
           break;
   
        case 'cumartesi':
           console.log('InClass + Workshop');
   
            break;
   
        case 'pazar':
            console.log('Self-Study');
   
           break;
        default :
       console.log('Yanlis girdiniz')
       break;
   
       }
   //------------------------------------------------------------------------
   
   
   // Hw3--------------------------------------------------------------------
   
    let asgari = 6741;
   
    let maas = +prompt('Maasiniz');
   
   if (maas >= asgari) {
        let sonuc = maas * 1.1;
   
       console.log(`yeteri kadar aliyon sen sukur et ${sonuc.toFixed(2)}`);
   
    } else {
   
       sonuc = maas * 1.5;
        alert(`al gardas sana zam harca ${sonuc.toFixed(2)}`);
    }
   
   
   // Hw4    maas >= asgariUcret ? (maas = maas + maas * 0.1) : (maas = maas + maas * 0.5);--------------------------------------------------------------------
   
   
    let maas = +prompt('maasiniz');
    let gider = +prompt('gider');
    let asgari = 6741;
   
     maas >= asgari + gider ? console.log('Hadi kaptin krediyi') : console.log('eve git hocam sen');