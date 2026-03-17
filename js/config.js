/*
╔══════════════════════════════════════════════════════════════╗
║  js/config.js                                                ║
║  Configurações globais do projeto.                           ║
║  Este arquivo deve ser o PRIMEIRO a ser carregado.           ║
║  Todos os outros arquivos JS podem usar estas constantes.    ║
╚══════════════════════════════════════════════════════════════╝
*/

/* ── URLs das APIs externas ─────────────────────────────────
   BASE_COINGECKO : endereço base da API do CoinGecko (gratuita)
   BASE_DEFILLAMA : endereço base da API do DeFiLlama (gratuita)
   Exemplo de uso: `${CONFIG.BASE_COINGECKO}/coins/bitcoin`    */
const CONFIG = {
  BASE_COINGECKO:  'https://api.coingecko.com/api/v3',
  BASE_DEFILLAMA:  'https://api.llama.fi',

  /* Faixas do MarketCap em bilhões de dólares
     Usadas na barra de progresso e nos gráficos             */
  MCAP_STAGES: [
    { label: '🔮 Gema',      min: 0,    max: 0.15  },
    { label: '🌱 Pequena',   min: 0.15, max: 1     },
    { label: '⚡ Média',     min: 1,    max: 8     },
    { label: '🚀 BlueChip',  min: 8,    max: 60    },
    { label: '🏦 BigPlayer', min: 60,   max: Infinity },
  ],
};

/*
  ── PRÓXIMO PASSO ─────────────────────────────────────────
  Quando formos implementar as APIs:
  1. Adicionar chave de API aqui (se necessário)
  2. Adicionar mais configurações conforme o projeto crescer
*/
