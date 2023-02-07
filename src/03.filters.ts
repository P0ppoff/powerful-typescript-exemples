const listeAFiltrer: Array<number | undefined | null> = [
    null,
    234,
    undefined,
    54,
    23,
    1234
]

// Comment typer listeFiltree ? 🤔
const listeFiltree = listeAFiltrer.filter((value) => Boolean(value))
