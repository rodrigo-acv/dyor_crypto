/*
╔══════════════════════════════════════════════════════════════╗
║  js/main.js                                                  ║
║  Controlador principal — deve ser carregado por ÚLTIMO.      ║
║  Orquestra todos os outros arquivos JS.                      ║
║  Escopo atual: apenas interações da página inicial.          ║
╚══════════════════════════════════════════════════════════════╝
*/

/* ── ESPERA O HTML CARREGAR COMPLETAMENTE ─────────────────────
   DOMContentLoaded dispara quando o HTML está pronto,
   antes das imagens e outros recursos terminarem de baixar.
   É mais rápido que window.onload.                            */
document.addEventListener('DOMContentLoaded', () => {


  /* ── CHIPS RÁPIDOS ──────────────────────────────────────────
     Ao clicar num chip (BTC, ETH, SOL...),
     preenche o campo de busca com o ID da moeda.
     A busca real na API será implementada no próximo passo.   */

  /* querySelectorAll retorna TODOS os elementos com a classe .chip */
  const chips = document.querySelectorAll('.chip');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {

      /* data-id é o atributo que colocamos no HTML
         Ex: <div class="chip" data-id="bitcoin">BTC</div>
         chip.dataset.id retorna "bitcoin"                     */
      const coinId = chip.dataset.id;

      /* Preenche o campo de busca com o ID da moeda */
      const input = document.getElementById('cryptoInput');
      if (input) {
        input.value = coinId;
        input.focus(); /* coloca o cursor no campo */
      }

    });
  });


  /* ── BOTÃO ANALISAR ─────────────────────────────────────────
     Por enquanto: só valida se o campo está vazio.
     No próximo passo: vai chamar a função da api.js           */
  const btnSearch = document.getElementById('btnSearch');

  if (btnSearch) {
    btnSearch.addEventListener('click', () => {

      const input  = document.getElementById('cryptoInput');
      const coinId = input ? input.value.trim().toLowerCase() : '';

      if (!coinId) {
        /* Campo vazio: destaca visualmente o input */
        input.focus();
        input.style.borderColor = 'rgba(244,63,94,0.6)';
        setTimeout(() => { input.style.borderColor = ''; }, 1500);
        return;
      }

      /*
        ── PRÓXIMO PASSO ────────────────────────────────────
        Aqui vai entrar a chamada:
        await fetchCoinData(coinId);   ← definida em api.js
        Que vai buscar os dados e renderizar os cards.
      */
      console.log('Buscar moeda:', coinId); /* temporário — só para testar */

    });
  }


  /* ── ENTER NO CAMPO DE BUSCA ────────────────────────────────
     Pressionar Enter tem o mesmo efeito que clicar no botão   */
  const input = document.getElementById('cryptoInput');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        btnSearch?.click(); /* chama o mesmo click do botão */
      }
    });
  }


}); /* fim do DOMContentLoaded */


/*
  ── IMPLEMENTAÇÕES FUTURAS ────────────────────────────────

  showToast(icon, message)
    → Exibe a notificação flutuante no canto da tela

  renderTokenBar(data)
    → Preenche o bloco de identidade do token

  renderMetrics(data)
    → Gera os cards de métricas (MarketCap, FDV etc.)

  renderMcapBar(data)
    → Calcula e preenche a barra de progresso

  renderContracts(data)
    → Gera as linhas da tabela de contratos

  renderSaved()
    → Lista as pesquisas salvas no localStorage
*/
