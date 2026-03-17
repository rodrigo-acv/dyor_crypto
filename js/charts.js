/*
╔══════════════════════════════════════════════════════════════╗
║  js/charts.js                                                ║
║  Criação e atualização dos gráficos com ApexCharts.          ║
║  Depende de: config.js, e da lib ApexCharts no <head>        ║
╚══════════════════════════════════════════════════════════════╝
*/

/*
  ── IMPLEMENTAÇÃO FUTURA ──────────────────────────────────

  Aqui ficarão as funções que desenham os gráficos:

  renderMarketCapChart(marketCap)
    → Gráfico de pizza (donut) mostrando o estágio
      (Gema / Pequena / Média / BlueChip / BigPlayer)
    → Container: <div id="chart-marketcap">

  renderSupplyChart(circulatingPct, lockedPct)
    → Gráfico de barras horizontal empilhado
      mostrando % circulante vs % bloqueado
    → Container: <div id="chart-supply">

  Todos os gráficos usarão o tema escuro do ApexCharts
  e as cores definidas nas variáveis CSS do style.css.
*/
