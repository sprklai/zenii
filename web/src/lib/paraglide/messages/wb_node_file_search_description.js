/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_File_Search_DescriptionInputs */

const en_wb_node_file_search_description = /** @type {(inputs: Wb_Node_File_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search for files matching a pattern`)
};

const zh_cn2_wb_node_file_search_description = /** @type {(inputs: Wb_Node_File_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索与模式匹配的文件`)
};

const es_wb_node_file_search_description = /** @type {(inputs: Wb_Node_File_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar archivos que coincidan con un patrón`)
};

const ja_wb_node_file_search_description = /** @type {(inputs: Wb_Node_File_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パターンに一致するファイルを検索します`)
};

const hi_wb_node_file_search_description = /** @type {(inputs: Wb_Node_File_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पैटर्न से मेल खाती फ़ाइलें खोजें`)
};

const pt_br2_wb_node_file_search_description = /** @type {(inputs: Wb_Node_File_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar arquivos que correspondam a um padrão`)
};

const ko_wb_node_file_search_description = /** @type {(inputs: Wb_Node_File_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`패턴에 일치하는 파일을 검색합니다`)
};

const fr_wb_node_file_search_description = /** @type {(inputs: Wb_Node_File_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des fichiers correspondant à un motif`)
};

/**
* | output |
* | --- |
* | "Search for files matching a pattern" |
*
* @param {Wb_Node_File_Search_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_file_search_description = /** @type {((inputs?: Wb_Node_File_Search_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_File_Search_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_file_search_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_file_search_description(inputs)
	if (locale === "es") return es_wb_node_file_search_description(inputs)
	if (locale === "ja") return ja_wb_node_file_search_description(inputs)
	if (locale === "hi") return hi_wb_node_file_search_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_file_search_description(inputs)
	if (locale === "ko") return ko_wb_node_file_search_description(inputs)
	return fr_wb_node_file_search_description(inputs)
});