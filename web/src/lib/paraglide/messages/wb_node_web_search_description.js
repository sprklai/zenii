/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Web_Search_DescriptionInputs */

const en_wb_node_web_search_description = /** @type {(inputs: Wb_Node_Web_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search the web and return results`)
};

const zh_cn2_wb_node_web_search_description = /** @type {(inputs: Wb_Node_Web_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索网络并返回结果`)
};

const es_wb_node_web_search_description = /** @type {(inputs: Wb_Node_Web_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar en la web y devolver resultados`)
};

const ja_wb_node_web_search_description = /** @type {(inputs: Wb_Node_Web_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウェブを検索して結果を返します`)
};

const hi_wb_node_web_search_description = /** @type {(inputs: Wb_Node_Web_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वेब खोजें और परिणाम लौटाएँ`)
};

const pt_br2_wb_node_web_search_description = /** @type {(inputs: Wb_Node_Web_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar na web e retornar resultados`)
};

const ko_wb_node_web_search_description = /** @type {(inputs: Wb_Node_Web_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`웹을 검색하고 결과를 반환합니다`)
};

const fr_wb_node_web_search_description = /** @type {(inputs: Wb_Node_Web_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effectuer une recherche sur le web et retourner les résultats`)
};

/**
* | output |
* | --- |
* | "Search the web and return results" |
*
* @param {Wb_Node_Web_Search_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_web_search_description = /** @type {((inputs?: Wb_Node_Web_Search_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Web_Search_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_web_search_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_web_search_description(inputs)
	if (locale === "es") return es_wb_node_web_search_description(inputs)
	if (locale === "ja") return ja_wb_node_web_search_description(inputs)
	if (locale === "hi") return hi_wb_node_web_search_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_web_search_description(inputs)
	if (locale === "ko") return ko_wb_node_web_search_description(inputs)
	return fr_wb_node_web_search_description(inputs)
});