/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Web_Search_LabelInputs */

const en_wb_node_web_search_label = /** @type {(inputs: Wb_Node_Web_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web Search`)
};

const zh_cn2_wb_node_web_search_label = /** @type {(inputs: Wb_Node_Web_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网络搜索`)
};

const es_wb_node_web_search_label = /** @type {(inputs: Wb_Node_Web_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Búsqueda web`)
};

const ja_wb_node_web_search_label = /** @type {(inputs: Wb_Node_Web_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウェブ検索`)
};

const hi_wb_node_web_search_label = /** @type {(inputs: Wb_Node_Web_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वेब खोज`)
};

const pt_br2_wb_node_web_search_label = /** @type {(inputs: Wb_Node_Web_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisa Web`)
};

const ko_wb_node_web_search_label = /** @type {(inputs: Wb_Node_Web_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`웹 검색`)
};

const fr_wb_node_web_search_label = /** @type {(inputs: Wb_Node_Web_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche web`)
};

/**
* | output |
* | --- |
* | "Web Search" |
*
* @param {Wb_Node_Web_Search_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_web_search_label = /** @type {((inputs?: Wb_Node_Web_Search_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Web_Search_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_web_search_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_web_search_label(inputs)
	if (locale === "es") return es_wb_node_web_search_label(inputs)
	if (locale === "ja") return ja_wb_node_web_search_label(inputs)
	if (locale === "hi") return hi_wb_node_web_search_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_web_search_label(inputs)
	if (locale === "ko") return ko_wb_node_web_search_label(inputs)
	return fr_wb_node_web_search_label(inputs)
});