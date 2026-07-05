/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Graph_EmptyInputs */

const en_wiki_graph_empty = /** @type {(inputs: Wiki_Graph_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No pages to show in graph`)
};

const zh_cn2_wiki_graph_empty = /** @type {(inputs: Wiki_Graph_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图谱中没有页面可显示`)
};

const es_wiki_graph_empty = /** @type {(inputs: Wiki_Graph_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay páginas para mostrar en el gráfico`)
};

const ja_wiki_graph_empty = /** @type {(inputs: Wiki_Graph_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`グラフに表示するページがありません`)
};

const hi_wiki_graph_empty = /** @type {(inputs: Wiki_Graph_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ग्राफ में दिखाने के लिए कोई पृष्ठ नहीं`)
};

const pt_br2_wiki_graph_empty = /** @type {(inputs: Wiki_Graph_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma página para mostrar no gráfico`)
};

const ko_wiki_graph_empty = /** @type {(inputs: Wiki_Graph_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`그래프에 표시할 페이지가 없습니다`)
};

const fr_wiki_graph_empty = /** @type {(inputs: Wiki_Graph_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune page à afficher dans le graphe`)
};

/**
* | output |
* | --- |
* | "No pages to show in graph" |
*
* @param {Wiki_Graph_EmptyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_graph_empty = /** @type {((inputs?: Wiki_Graph_EmptyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Graph_EmptyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_graph_empty(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_graph_empty(inputs)
	if (locale === "es") return es_wiki_graph_empty(inputs)
	if (locale === "ja") return ja_wiki_graph_empty(inputs)
	if (locale === "hi") return hi_wiki_graph_empty(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_graph_empty(inputs)
	if (locale === "ko") return ko_wiki_graph_empty(inputs)
	return fr_wiki_graph_empty(inputs)
});