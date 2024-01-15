let karakterSayisi = document.querySelector("#karakterSayisi")
let harf = document.querySelector("#harf")
let rakam = document.querySelector("#rakam")
let output = document.querySelector("#output")
let olustur = document.querySelector("#olustur")
let ozelKarakter = document.querySelector("#ozelKarakter")
let harfLabel = document.querySelector(".harfLabel")
let rakamLabel = document.querySelector(".rakamLabel")
let specialLabel = document.querySelector(".specialLabel")
let loading = document.querySelector(".loading")







karakterSayisi.addEventListener("input", function () {

    const regex = /^[0-9]+$/;
    
    if (!regex.test(karakterSayisi.value)) {
        
        karakterSayisi.value = karakterSayisi.value.slice(0, -1);
    }
});

olustur.addEventListener("click", function () {
    loading.style.animation="loadingAnimation 1.5s infinite"
    loading.style.display="block"
    olustur.disabled = true
    olustur.style.background = "black"
    
    if (karakterSayisi.value == "" || ((!harf.checked) && (!rakam.checked) && (!ozelKarakter.checked))) {
        output.innerHTML = `Lütfen kaç karakterli şifre oluşturmak istediğinizi giriniz ve en az 1 kutucuğu işaretleyiniz.`
        output.style.animation = "error 2s linear infinite"
        loading.style.background="red"
        olustur.disabled = false
        olustur.style.background = ""
        return;
    }
    loading.style.background=""
    
    
    output.style.animation = ""
    let harfler = "qwertyuıopğüasdfghjklşizxcvbnmöç"
    let rakamlar = "12345678901234567890"
    let ozelKarakterler = "!'^+%&/()=?_-"
    let secilenler = ""
    let password = ""
    
    if (harf.checked) {
        secilenler += harfler
    }
    if (rakam.checked) {
        secilenler += rakamlar
        
    }
    if (ozelKarakter.checked) {
        secilenler += ozelKarakterler
    }
    for (let i = 0; i < 30; i++) {
        let animation = ""
        for (let i = 0; i < Number(karakterSayisi.value); i++) {
            rstIndex = Math.floor(Math.random() * secilenler.length)
            animation += secilenler[rstIndex]
        }
        setTimeout(() => {
            output.innerHTML = `${animation}`
            output.style.color = "red"
            output.style.textShadow = "1px 1px 0 #000000"
        }, 100 * (i + 1));
        
    }
    for (let i = 0; i < Number(karakterSayisi.value); i++) {
        rstIndex = Math.floor(Math.random() * secilenler.length)
        password += secilenler[rstIndex]
    }
    if (harf.checked) {
        harfLabel.style.color = "green"
    }
    if (rakam.checked) {
        rakamLabel.style.color = "green"
        
    }
    if (ozelKarakter.checked) {
        specialLabel.style.color = "green"
    }
    setTimeout(() => {
        loading.style.animation=""
        loading.style.display=""
        harfLabel.style.color = ""
        rakamLabel.style.color = ""
        specialLabel.style.color = ""
        ozelKarakter.checked = false
        rakam.checked = false
        harf.checked = false
        karakterSayisi.value = ""
        output.innerHTML = `${password}`
        output.style.color = "#17ff00"
        olustur.disabled = false
        olustur.style.background = ""
    }, 3000);
    
})