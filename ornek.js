let girdi = document.getElementById("girdi")
let buton1 = document.getElementById("buton1")
let liste = document.getElementById("liste")
let tatliKediSesi = document.getElementById("tatliKediSesi")
let kizginKediSesi = document.getElementById("kizginKediSesi")
let tarih = document.getElementById("tarih")
let saat = document.getElementById("saat")

buton1.addEventListener("click", () => {
    let girdiDegeri = girdi.value
    let ogeEkle = document.createElement("p")
    if (girdiDegeri !== "") {
        // Öğe oluşturma
        ogeEkle.innerHTML = girdiDegeri
        liste.appendChild(ogeEkle)
        girdi.value = ""
        ogeEkle.style.borderRadius = "15px"
        // Tamamlama Butonu Oluşturma
        let tamamlamaButonu = document.createElement("button")
        tamamlamaButonu.innerHTML = "✔"
        tamamlamaButonu.classList.toggle("tamamlamaButonu")
        ogeEkle.appendChild(tamamlamaButonu)
        tamamlamaButonu.addEventListener("click", () => {
            ogeEkle.classList.toggle("ogeEkle")
            tatliKediSesi.play()
        })
        // Silme Butonu Oluşturma
        let silmeButonu = document.createElement("button")
        ogeEkle.appendChild(silmeButonu)
        silmeButonu.innerHTML = "X"
        silmeButonu.classList.add("silmeButonu")
        silmeButonu.addEventListener("click", () => {
            kizginKediSesi.play()
            ogeEkle.remove()
        })
    }
    // Tarih Saat İşlemleri
    let tarihDegeri = tarih.value
    if (tarihDegeri !== "") {
        let tarihEkle = document.createElement("p")
        ogeEkle.appendChild(tarihEkle)
        tarihEkle.classList.add("tarihDegeri")
        tarihEkle.innerHTML = tarih.value
        tarih.value = ""
    }
    let saatDegeri = saat.value
    if (saatDegeri !== "") {
        let saatEkle = document.createElement("p")
        ogeEkle.appendChild(saatEkle)
        saatEkle.classList.add("saatEkle")
        saatEkle.innerHTML = saat.value
        saat.value = ""
    }
})
