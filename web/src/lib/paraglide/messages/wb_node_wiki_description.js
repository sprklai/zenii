/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Wiki_DescriptionInputs */

const en_wb_node_wiki_description = /** @type {(inputs: Wb_Node_Wiki_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search, retrieve, or query the knowledge wiki`)
};

const zh_cn2_wb_node_wiki_description = /** @type {(inputs: Wb_Node_Wiki_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索、检索或查询知识 Wiki`)
};

const es_wb_node_wiki_description = /** @type {(inputs: Wb_Node_Wiki_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar, recuperar o consultar el wiki de conocimiento`)
};

const ja_wb_node_wiki_description = /** @type {(inputs: Wb_Node_Wiki_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ナレッジ Wiki を検索・取得・照会する`)
};

const hi_wb_node_wiki_description = /** @type {(inputs: Wb_Node_Wiki_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ज्ञान विकी में खोज, पुनर्प्राप्ति या क्वेरी करें`)
};

const pt_br2_wb_node_wiki_description = /** @type {(inputs: Wb_Node_Wiki_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar, recuperar ou consultar o wiki de conhecimento`)
};

const ko_wb_node_wiki_description = /** @type {(inputs: Wb_Node_Wiki_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`지식 위키 검색, 조회 또는 쿼리`)
};

const fr_wb_node_wiki_description = /** @type {(inputs: Wb_Node_Wiki_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher, récupérer ou interroger le wiki de connaissances`)
};

/**
* | output |
* | --- |
* | "Search, retrieve, or query the knowledge wiki" |
*
* @param {Wb_Node_Wiki_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_wiki_description = /** @type {((inputs?: Wb_Node_Wiki_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Wiki_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_wiki_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_wiki_description(inputs)
	if (locale === "es") return es_wb_node_wiki_description(inputs)
	if (locale === "ja") return ja_wb_node_wiki_description(inputs)
	if (locale === "hi") return hi_wb_node_wiki_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_wiki_description(inputs)
	if (locale === "ko") return ko_wb_node_wiki_description(inputs)
	return fr_wb_node_wiki_description(inputs)
});