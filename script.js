function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") //substitui a class do html entre light ou nada

  //pega a tag
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem profile-light
    img.setAttribute("src", "./assets.avatar-light.png") //função para adicionar ou modificar um atributo
    img.setAttribute("alt", "Foto de perfil em modo claro.")
  } else {
    //se não, manter imagem normal
    img.setAttribute("src", "./assets.avatar.png")
    img.setAttribute("alt", "Foto de perfil em modo escuro.")
  }
}
