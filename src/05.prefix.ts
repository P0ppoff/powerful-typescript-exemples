type ColorHexa = `#${string}`

const blueSky: ColorHexa = '#1A03AA'
const black: ColorHexa = '000000' // 🤔

const isHexa = (c: string): c is ColorHexa => c.startsWith('#')

isHexa(blueSky);
isHexa('chartreuse')
isHexa(black)
