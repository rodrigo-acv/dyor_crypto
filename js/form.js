/*
╔══════════════════════════════════════════════════════════════╗
║  js/form.js                                                  ║
║  Toda a lógica do formulário de análise DYOR.                ║
║  Depende de: config.js, main.js                              ║
╚══════════════════════════════════════════════════════════════╝
*/

/*
  ── IMPLEMENTAÇÃO FUTURA ──────────────────────────────────

  Aqui ficarão as funções do formulário de 6 abas:

  switchTab(tabIndex)
    → Troca o painel ativo (tp0 a tp5)
    → Atualiza a classe .active nas abas

  calcProgress()
    → Calcula quantos campos foram preenchidos
    → Atualiza a barra de progresso (#progFill)

  calcScore()
    → Soma os pontos de todos os campos preenchidos
    → Atualiza o score ring animado (#scoreArc, #scoreNum)
    → Categorias: Fundamentos, Tokenomics, Equipe, Mercado, Riscos

  saveResearch()
    → Serializa todo o formulário em JSON
    → Salva no localStorage do navegador
    → Chama renderSaved() para atualizar a lista

  loadResearch(id)
    → Carrega uma pesquisa salva e preenche o formulário

  deleteResearch(id)
    → Remove uma pesquisa salva do localStorage
*/
