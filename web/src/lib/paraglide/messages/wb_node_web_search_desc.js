/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Web_Search_DescInputs */

const en_wb_node_web_search_desc = /** @type {(inputs: Wb_Node_Web_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search the web`)
};

const zh_cn2_wb_node_web_search_desc = /** @type {(inputs: Wb_Node_Web_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索网络`)
};

const es_wb_node_web_search_desc = /** @type {(inputs: Wb_Node_Web_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar en la web`)
};

const ja_wb_node_web_search_desc = /** @type {(inputs: Wb_Node_Web_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウェブを検索`)
};

const hi_wb_node_web_search_desc = /** @type {(inputs: Wb_Node_Web_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वेब खोजें`)
};

const pt_br2_wb_node_web_search_desc = /** @type {(inputs: Wb_Node_Web_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar na web`)
};

const ko_wb_node_web_search_desc = /** @type {(inputs: Wb_Node_Web_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`웹 검색`)
};

const fr_wb_node_web_search_desc = /** @type {(inputs: Wb_Node_Web_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher sur le web`)
};

/**
* | output |
* | --- |
* | "Search the web" |
*
* @param {Wb_Node_Web_Search_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_web_search_desc = /** @type {((inputs?: Wb_Node_Web_Search_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Web_Search_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_web_search_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_web_search_desc(inputs)
	if (locale === "es") return es_wb_node_web_search_desc(inputs)
	if (locale === "ja") return ja_wb_node_web_search_desc(inputs)
	if (locale === "hi") return hi_wb_node_web_search_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_web_search_desc(inputs)
	if (locale === "ko") return ko_wb_node_web_search_desc(inputs)
	return fr_wb_node_web_search_desc(inputs)
});