const importAll = (r) => r.keys().map(r);

export const images = importAll(require.context("../img/bg-section", false, /\.(png|jpe?g|svg)$/));

export const imagesLeft = importAll(require.context("../img/bg-section-left", false, /\.(png|jpe?g|svg)$/));

export const imagesRight = importAll(require.context("../img/bg-section-right", false, /\.(png|jpe?g|svg)$/));

export const logosMaster = importAll(require.context("../img/apoio/master", false, /\.(png|jpe?g|svg)$/));

export const logosOuro = importAll(require.context("../img/apoio/ouro", false, /\.(png|jpe?g|svg)$/));

export const logosEvento = importAll(require.context("../img/apoio/evento", false, /\.(png|jpe?g|svg)$/));

