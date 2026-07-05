/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Graph_ToggleInputs */

const en_wiki_graph_toggle = /** @type {(inputs: Wiki_Graph_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Knowledge Graph`)
};

const zh_cn2_wiki_graph_toggle = /** @type {(inputs: Wiki_Graph_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`知识图谱`)
};

const es_wiki_graph_toggle = /** @type {(inputs: Wiki_Graph_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gráfico de conocimiento`)
};

const ja_wiki_graph_toggle = /** @type {(inputs: Wiki_Graph_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ナレッジグラフ`)
};

const hi_wiki_graph_toggle = /** @type {(inputs: Wiki_Graph_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ज्ञान ग्राफ`)
};

const pt_br2_wiki_graph_toggle = /** @type {(inputs: Wiki_Graph_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gráfico de conhecimento`)
};

const ko_wiki_graph_toggle = /** @type {(inputs: Wiki_Graph_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`지식 그래프`)
};

const fr_wiki_graph_toggle = /** @type {(inputs: Wiki_Graph_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Graphe de connaissances`)
};

/**
* | output |
* | --- |
* | "Knowledge Graph" |
*
* @param {Wiki_Graph_ToggleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_graph_toggle = /** @type {((inputs?: Wiki_Graph_ToggleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Graph_ToggleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_graph_toggle(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_graph_toggle(inputs)
	if (locale === "es") return es_wiki_graph_toggle(inputs)
	if (locale === "ja") return ja_wiki_graph_toggle(inputs)
	if (locale === "hi") return hi_wiki_graph_toggle(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_graph_toggle(inputs)
	if (locale === "ko") return ko_wiki_graph_toggle(inputs)
	return fr_wiki_graph_toggle(inputs)
});