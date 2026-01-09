// Pequeno efeito de "boot retrô"
document.addEventListener("DOMContentLoaded", () => {
  console.log("Sistema carregado com sucesso.");
});


fetch("data/artes.json")
  .then(response => response.json())
  .then(artes => {
    const galeria = document.getElementById("galeria");

    artes.forEach(arte => {
      const item = document.createElement("div");
      item.className = "thumb";

      item.innerHTML = `
        <img src="${arte.thumb}" alt="${arte.titulo}">
        <span>${arte.titulo}</span>
      `;

      item.onclick = () => abrirImagem(arte.full);
      galeria.appendChild(item);
    });
  });

function abrirImagem(src) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `<img src="${src}">`;
  modal.onclick = () => modal.remove();
  document.body.appendChild(modal);
}


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("crtToggle");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("crt-on");

    const ativo = document.body.classList.contains("crt-on");
    btn.textContent = ativo ? "CRT: ON" : "CRT: OFF";

    document.getElementById("crt-overlay").style.display =
      ativo ? "block" : "none";
  });
});
