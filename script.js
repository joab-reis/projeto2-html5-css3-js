
function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = window.document.getElementById("txtano")
  let res = window.document.getElementById("res")
  if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert("[ERRO] verifique os dados e tente novamente!")
  } else {
        let fsex = window.document.getElementsByName("radsex")
        let idade = ano - Number(fano.value)
        let genero = ""
        let img = window.document.createElement("img") //createElement e usado pra criar uma tag assim como em html.
        img.setAttribute("id", "img") //setattribute e usado pra dar um id ou class a tag criada antes.
        if (fsex[0].checked) {
            genero = "masculino"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "mcriança.png")
            } else if (idade < 21) {
                img.setAttribute("src", "mjovem.png")
            } else if (idade < 50) {
                img.setAttribute("src", "madulto.png")
            } else {
                img.setAttribute("src", "midoso.png")
            }
        } else if (fsex[1].checked) {
            genero = "feminino"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "fcriança.png")
            } else if (idade < 21) {
                img.setAttribute("src", "fjovem.png")
            } else if (idade < 50) {
                img.setAttribute("src", "fadulto.png")
            } else {
                img.setAttribute("src", "fidoso.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `genero ${genero} com idade de ${idade} anos!`
        res.appendChild(img) //endChild e usado pra adicionar algum elemento apos o conteudo ja existente.
  }

}