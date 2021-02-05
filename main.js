function openStuff() {
  const symbol = document.getElementById("symbol").value

  const sites = [
    "https://finance.yahoo.com/quote/<SYMBOL>",
    "https://www.marketwatch.com/investing/stock/<symbol>",
    // "https://widgets.tipranks.com/content/etoro/etoro-widget.html?lang=en&ticker=<SYMBOL>",
    "https://www.tipranks.com/stocks/<symbol>/forecast",
    "https://stocktwits.com/symbol/<SYMBOL>",
    "https://finviz.com/quote.ashx?t=<SYMBOL>",
    "https://twitter.com/search?q=%24<SYMBOL>&src=typed_query"
  ]

  sites.forEach(s => {
    if(s.includes("<SYMBOL>")) {
      window.open(s.replace("<SYMBOL>", symbol.toUpperCase()), '_blank')   
    } else {
      window.open(s.replace("<symbol>", symbol.toLowerCase()), '_blank')   
    }
  })
}