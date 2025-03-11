const importAll = (r) => r.keys().map(r);

export const images = importAll(require.context("../img/bg-section", false, /\.(png|jpe?g|svg)$/));

