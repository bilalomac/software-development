console.log("Merhaba JavaScript!");
let isim = "Bilal";
let yas = 16;

if (yas >= 18) {
    console.log("Reşitsin.");
} else {
    console.log("Reşit değilsin.");
}

console.log(isim);
console.log(yas);

isim = "Ahmet";

console.log(isim);

let ogrenciMi = true;
let puan = 75;
let soyad = "Omaç";

console.log(ogrenciMi);
console.log(puan);
console.log(soyad);

console.log(typeof isim);
console.log(typeof puan);
console.log(typeof ogrenciMi);
console.log(typeof soyad);

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log("10" + 5);

console.log(10>5);
console.log(10<5);
console.log(10 === 10);
console.log(10 === "10");

if (puan >= 90) {
    console.log("çok iyi");
} else if (puan >= 70) {
    console.log("iyi");
} else if (puan >=  50) {
    console.log("geçtin");
} else {
    console.log("kaldın");
}

let yasTest = 24;
console.log(yasTest >= 18 && yasTest <= 30);    
console.log(yasTest < 18 || yasTest > 20);
console.log(!(yasTest >= 18));

function selamla(isim) {
    console.log("Merhaba " + isim);
}
selamla("Bilal");

function topla(a, b) {
    return a + b;
}

let sonuc = topla(10, 5);
console.log(sonuc);
let ikikat = sonuc * 2; 
console.log(ikikat);

function kareA1(sayi) {
    return sayi * sayi;
}

let kare2 = kareA1(7);
console.log(kare2);

function indirimliFiyat(fiyat, indirim) {
    let indirimMiktari = fiyat * indirim / 100;

    return fiyat - indirimMiktari
}

sonuc = indirimliFiyat(100, 20);

console.log(sonuc);

let meyveler = ["elma", "muz", "çilek"];
console.log(meyveler[0]);
console.log(meyveler[1]);
console.log(meyveler[2]); 

meyveler.push("portakal");
console.log(meyveler);
meyveler.pop();
console.log(meyveler);

console.log(meyveler.length);
console.log(meyveler[meyveler.length -1]);

meyveler[1] = "ananas";
console.log(meyveler);

for(let i = 0; i<5; i++) {
    console.log(i);
}

for (let i = 0; i < meyveler.length; i++) {
    console.log(meyveler[i]);
}               

for (let meyve of meyveler) {
    console.log(meyve);
}

let kisi = {
    isim: "Bilal",
    yas: 24,
    ogrenci: true,

};

console.log(kisi);

console.log(kisi.isim);
console.log(kisi.yas);
console.log(kisi.ogrenci);

kisi.yas = 25;

console.log(kisi.yas);

kisi.sehir = "Bamberg";

console.log(kisi.sehir);

delete kisi.sehir;

console.log(kisi);

let baslik = document.getElementById("main-title");

console.log(baslik);
baslik.textContent = "JavaScript ile değiştirdim";

let buton = document.getElementById("degistir");

buton.addEventListener("click", function() {
    baslik.textContent = "Başlık değiştii!";
});

buton.addEventListener("click", function() {
    baslik.textContent = "Başlık değişti!";
    baslik.classList.add("highlight");
});

let isimInput = document.getElementById("isimInput");
let selamlaButon = document.getElementById("selamlaButon");

selamlaButon.addEventListener("click", function() {
    if (isimInput.value === "") {
        selamMesaji.textContent = "Lütfen adını yaz!";
    } else {
        selamMesaji.textContent = "Merhaba " + isimInput.value;
        isimInput.value = "";
    }
});

console.log(isimInput.value);

let selamMesaji = document.getElementById("selamMesaji");


let sayac = 1;

while (sayac < 11) {
    console.log(sayac);
    sayac++;
}

let sayac2 = 1;

while (sayac2 <= 10) {
    console.log(sayac2);

    if (sayac2 === 5) {
        break;
    }

    sayac2++;
}

let sayac3 = 0;

while (sayac3 < 10) {
    sayac3++;

    if (sayac3 === 5); {
        continue;
    }
    console.log(sayac3);
}

console.log("TEST BAŞI");

let sayac4 = 0;

while (sayac4 < 10) {
    sayac4++;

    if (sayac4 === 5) {
        continue;
    }

    console.log(sayac4);
}

console.log("TEST SONU");

let sayac5 = 10;

do {
    console.log(sayac5);
    sayac5++;
} while (sayac5 < 5);

meyveler.forEach(function(meyve) {
    console.log("Meyve: " + meyve);
}); 

meyveler.forEach(function(meyve, index) {
    console.log(index + ": " + meyve);
});


let sayilar = [1, 2, 3, 4, 5, 6];

let kare = sayilar.map(function(sayi) {
    return sayi * sayi;
});
console.log(kare);

let buyukSayilar = sayilar.filter(function(sayi) {
    return sayi > 3;
});

console.log(buyukSayilar);

let ciftSayilar = sayilar.filter(function(sayi) {
    return sayi %2 === 0;
});
console.log(ciftSayilar);
 
let bulunanSayi = sayilar.find(function(sayi) {
    return sayi >3;
});

console.log(bulunanSayi);

console.log(meyveler.includes("elma"));
console.log(meyveler.includes("muz"));

let sonucSome = sayilar.some(function(sayi) {
    return sayi > 5;
});

console.log(sonucSome);

let sonucEvery = sayilar.every(function(sayi) {
    return sayi > 0;
});

console.log(sonucEvery);

let toplam = sayilar.reduce(function(toplam, sayi) {
    return toplam + sayi;
}, 0);

console.log(toplam);

let sayilar2  = [5, 2, 8, 1, 4];

sayilar2.sort();

console.log(sayilar2);

let sayilar3 = [30, 12, 9, 4];

sayilar3.sort();

console.log(sayilar3);

sayilar3.sort(function(a, b) {
    return a - b;
});

console.log(sayilar3); 

sayilar3.sort(function(a, b) {
    return b - a;
});
console.log(sayilar3);

let sayilar4 = [1, 2, 3, 4, 5];

sayilar4.reverse();
console.log(sayilar4);

let meyveler2 = ["elma", "çilek", "ananas"];
let meyveMetni = meyveler2.join(", ");
console.log(meyveMetni);

let sayilar5 = [1, 2, 3, 4, 5];

let parca = sayilar5.slice(1, 4);
console.log(parca);

let gun = "Pazar";

switch (gun) {
    case "Pazartesi":
        console.log("Haftanın ilk günü");
        break;

        case "Cuma":
            console.log("Haftasonu yaklaşıyor");
            break;

        default:
            console.log("başka bir gün");
}

let rol = "user";

switch (rol) {
    case "admin":
        console.log("Tüm yetkilere sahipsin");
        break;

    case "user":
        console.log("Standart kullanıcı.");
        break;

    case "guest":
        console.log("Misafir kullanıcı");
        break;

    default:
        console.log("Bilinmeyen rol");

}

let kareAl2 = (sayi) => {
    return sayi * sayi;
};

console.log(kareAl2(5));

let kareAl3 = (sayi) => sayi * sayi;
console.log(kareAl3(5));

let topla2 = (sayi1, sayi2) => sayi1 + sayi2;

console.log(topla2(10, 5));

let pozitifMi = (sayi) => sayi > 0;

console.log(pozitifMi(5));
console.log(pozitifMi(-3));

let yetiskinMi = (yas) => {
    if (yas >= 18) {
        return "Yetişkin";
    } else {
        return "Yetişkin değil";
    }
};

console.log(yetiskinMi(24));
console.log(yetiskinMi(16));

let gectiMi = (not) => {
    if (not >= 50) {
        return "Geçti";
    }
    else {
        return "Kaldı";
    }
};

console.log(gectiMi(70));
console.log(gectiMi(43));

let indirimliFiyat2 = (fiyat, indirim) => {
    return fiyat - (fiyat * indirim / 100);
};
console.log(indirimliFiyat2(200, 20));

let indirimliFiyat3 = (fiyat, indirim) => fiyat - (fiyat * indirim / 100);

console.log(indirimliFiyat(300, 13));

let kdvHesapla = (fiyat, kdv) => fiyat + (fiyat * kdv / 100);

console.log(kdvHesapla(150, 19));

let kareAl4 = (sayi) => sayi * sayi;
let kupAl = sayi => kareAl4(sayi) * sayi;

console.log(kupAl(3));

let hesapla = (sayi, islem) => islem(sayi);

let ikiyleCarp = (sayi) => sayi * 2;

console.log(hesapla(5, ikiyleCarp));

let hesapla2 = (sayi, islem) => islem(sayi);
let ucleCarp = (sayi) => sayi * 3;
console.log(hesapla2(7, ucleCarp));

let islemYap = (sayi1, sayi2, islem) => islem(sayi1, sayi2);

let topla3 = (sayi1, sayi2) => sayi1 + sayi2;
console.log(islemYap(5, 4, topla3));

let topla4 = (a, b) => a + b;  
let carp4 = (a, b) => a * b;

let islemYap2 = (sayi1, sayi2, islem) => islem(sayi1, sayi2);

console.log(islemYap2(4, 8, topla4));
console.log(islemYap2(8, 4, carp4));

let hesapla3 = (sayi1, sayi2, islem) => {
    return islem(sayi1, sayi2);
};

let cikar5 = (a, b) => a - b;

console.log(hesapla3(10, 4, cikar5));

let bol5 = (a, b) => a / b;
console.log(hesapla3(50, 10, bol5));

let sayilarZ = [1, 2, 3, 4, 5];
let ikiyleCarp2 = (sayi) => sayi * 2;
let yeniSayilar = sayilarZ.map(ikiyleCarp2);
console.log(yeniSayilar);

let ucleCarp2 = (sayi) => sayi * 3;
let yeniSayilar2 = sayilarZ.map(ucleCarp2);
console.log(yeniSayilar2);

let sayilar6 = [1, 2, 3, 4, 5, 6, 7, 8];
let ciftMi = (sayi) => sayi % 2 === 0;
let ciftSayilar2 = sayilar6.filter(ciftMi);
console.log(ciftSayilar2);

let sayilar7 = [21, 83, 93, 40, 73, 63, 6.45, 45];
let ellidenBuyuk = (sayi) => sayi > 50;
let buyukSayilar2 = sayilar7.filter(ellidenBuyuk);
console.log(buyukSayilar2);

let sayilar8 = [1, 2, 3, 4, 5, 6];
let ciftSayilar3 = sayilar8.filter((sayi) => sayi %2 === 0);
let kareler2 = ciftSayilar3.map((sayi) => sayi * sayi);
console.log(kareler2);

let sayilar9 = [1, 2, ,3 , 4, 5, 6, 7];

let kareler3 = sayilar9
    .filter((sayi) => sayi % 2 === 0)
    .map((sayi) => sayi * sayi);

console.log(kareler3);

let sayilar10 = [2, 5, 13, 9, 35, 11];

let sonuc10 = sayilar10
    .filter((sayi) => sayi >10)
    .map((sayi) => sayi * 2);
console.log(sonuc10);

let sayilar11 = [10, 20, 30, 40];
let toplam11 = sayilar11.reduce((toplam, sayi)       => {
    return toplam + sayi;
}, 0);

console.log(toplam11);

let sayilar12 = [10, 20, 30, 40, 50];
let toplam12 = sayilar12.reduce((toplam, sayi) => {
    return toplam + sayi;
}, 0);

let ortalama12 = toplam12 / sayilar12.length;

console.log(ortalama12);

let sayilar13 = [12, 45, 34, 93];

let enBuyuk13 = sayilar13.reduce((enBuyuk, sayi) => {
    if (sayi > enBuyuk) {
        return sayi;
    } else {
        return enBuyuk;
    }
}, sayilar13[0]);

console.log(enBuyuk13);

let sayilar14 = [23, 8, 45, 12, 3, 19];

let enKucuk14 = sayilar14.reduce((enKucuk, sayi) => {
    if (sayi < enKucuk) {
        return sayi;
    } else {    
        return enKucuk;
    }   
}, sayilar14[0]);

console.log(enKucuk14); 

let sayilar15 = [4, 7, 12, 18, 25, 30];

let ilkBuyuk = sayilar15.find((sayi) => sayi > 10);

console.log(ilkBuyuk);

let kullanicilar2 = [
    { isim: "Ahmet", yas:22 },
    { isim: "Mehmet", yas:25 },
    { isim: "Ayşe", yas: 19}
];

let bulunduKullanici2 = kullanicilar2.find((kullanici) => kullanici.yas > 23);
console.log(bulunduKullanici2);








let kullanicilar4 = [
    { isim: "Ali", yas: 17 },
    { isim: "Veli", yas: 20 },
    { isim: "Hasan", yas: 22 }
];

let arananKullanici = kullanicilar4.find(
    (kullanici) => kullanici.yas > 30
);

if (arananKullanici === undefined) {
    console.log("kullanıcı bulunamadı");
} else {
    console.log("Kullanıcı bulundu: ", arananKullanici);
}

let kullanicilar5 = [
    { isim: "Ali", yas: 17 },
    { isim: "Veli", yas: 20 },
    { isim: "Hasan", yas: 16 }
];

let yetiskinVarMi = kullanicilar5.some(
    (kullanici) => kullanici.yas >= 18
);

console.log(yetiskinVarMi);

let kullanicilar6 = [
    { isim: "Ali", yas: 21 },
    { isim: "Veli", yas: 25 },
    { isim: "Hasan", yas: 19 }
];

let herkesYetiskinMi = kullanicilar6.every(
    (kullanici) => kullanici.yas >= 18
);

console.log(herkesYetiskinMi);