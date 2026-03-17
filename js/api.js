/*
╔══════════════════════════════════════════════════════════════╗
║  js/api.js                                                   ║
║  Responsável por TODAS as chamadas às APIs externas.         ║
║  Depende de: config.js (deve ser carregado antes)            ║
╚══════════════════════════════════════════════════════════════╝
*/

/*
  ── IMPLEMENTAÇÃO FUTURA ──────────────────────────────────

  Aqui ficarão as funções que buscam dados nas APIs:

  fetchCoinData(coinId)
    → Busca preço, MarketCap, FDV, supply etc.
    → Endpoint: GET /coins/{id}
    → Fonte: CoinGecko

  fetchTVL(coinId)
    → Busca o Total Value Locked do protocolo
    → Endpoint: GET /tvl/{protocol}
    → Fonte: DeFiLlama

  fetchChainTVL(chainName)
    → Busca TVL de uma blockchain inteira
    → Endpoint: GET /v2/chains
    → Fonte: DeFiLlama

  Todas as funções serão async/await e tratarão
  erros de rate limit (429), not found (404) etc.
*/
