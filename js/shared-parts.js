// Gera o rodapé completo e o botão flutuante do WhatsApp a partir de um único lugar.
// Para mudar qualquer coisa no rodapé ou no botão de WhatsApp em TODO o site,
// edite apenas este arquivo — nenhuma página HTML precisa ser tocada.
(() => {
  function buildWhatsappButton() {
    if (document.querySelector(".whatsapp-float")) return; // evita duplicar
    const a = document.createElement("a");
    a.className = "whatsapp-float";
    a.setAttribute("data-whatsapp-link", "");
    a.href = "#";
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Falar no WhatsApp");
    a.innerHTML = `<svg viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>`;
    document.body.appendChild(a);
  }

  function buildFooter(slot) {
    slot.innerHTML = `
      <div class="site-footer-grid">
        <div class="footer-col">
          <a class="brand" href="index.html"><span class="brand-mark">B<span></span></span><span><strong>BRITO</strong><em>TEC</em></span></a>
          <p style="margin-top:14px">Assistência técnica e acessórios com tecnologia sem pausa, em São João de Meriti.</p>
          <div class="footer-social">
            <a href="#" data-instagram-link target="_blank" rel="noopener" aria-label="Instagram" hidden>
              <svg width="34" height="34" viewBox="0 0 448 512">
                <defs><linearGradient id="igGradFooter" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#feda75"/><stop offset="25%" stop-color="#fa7e1e"/><stop offset="50%" stop-color="#d62976"/><stop offset="75%" stop-color="#962fbf"/><stop offset="100%" stop-color="#4f5bd5"/></linearGradient></defs>
                <circle cx="224" cy="256" r="224" fill="url(#igGradFooter)"/>
                <path fill="#fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </a>
            <a href="#" data-facebook-link target="_blank" rel="noopener" aria-label="Facebook" hidden>
              <svg width="34" height="34" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="256" fill="#1877F2"/>
                <path fill="#fff" transform="translate(160,99) scale(0.607)" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Navegação</h4>
          <a href="index.html">Início</a>
          <a href="index.html#solucoes">Soluções</a>
          <a href="acessorios.html">Acessórios</a>
          <a href="index.html#sobre">A BritoTec</a>
        </div>
        <div class="footer-col">
          <h4>Ajuda</h4>
          <a href="faq.html">Perguntas frequentes</a>
          <a href="privacidade.html">Política de Privacidade</a>
          <a href="termos.html">Termos de Uso</a>
        </div>
        <div class="footer-col">
          <h4>Contato</h4>
          <p data-store-address>São João de Meriti — RJ</p>
          <a data-whatsapp-link href="#" target="_blank" rel="noopener">WhatsApp: <span data-whatsapp-display>(21) 99999-9999</span></a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>TECNOLOGIA SEM PAUSA • SÃO JOÃO DE MERITI</p>
        <p>© <span data-current-year></span> BritoTec</p>
      </div>`;
  }

  buildWhatsappButton();
  const slot = document.querySelector("[data-shared-footer]");
  if (slot) buildFooter(slot);
  document.querySelectorAll("[data-current-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
})();
