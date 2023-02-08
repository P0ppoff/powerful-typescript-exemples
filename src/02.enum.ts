enum Oeufs {
    POULE,
    VACHE, // ChatGPT peut nous dire comment reconnaitre les œufs de vache
    CHOCOLAT
}

function rammasserLesOeufsDePaques(o: Oeufs) {
}

rammasserLesOeufsDePaques(2);
rammasserLesOeufsDePaques(Oeufs.CHOCOLAT)
// Avoir une erreur si on ne donne pas de chocolat
rammasserLesOeufsDePaques(345)
