/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_File_Search_DescInputs */

const en_wb_node_file_search_desc = /** @type {(inputs: Wb_Node_File_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search file contents`)
};

const zh_cn2_wb_node_file_search_desc = /** @type {(inputs: Wb_Node_File_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索文件内容`)
};

const es_wb_node_file_search_desc = /** @type {(inputs: Wb_Node_File_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar contenido en archivos`)
};

const ja_wb_node_file_search_desc = /** @type {(inputs: Wb_Node_File_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルの内容を検索`)
};

const hi_wb_node_file_search_desc = /** @type {(inputs: Wb_Node_File_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइल सामग्री खोजें`)
};

const pt_br2_wb_node_file_search_desc = /** @type {(inputs: Wb_Node_File_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar conteúdo de arquivos`)
};

const ko_wb_node_file_search_desc = /** @type {(inputs: Wb_Node_File_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일 내용 검색`)
};

const fr_wb_node_file_search_desc = /** @type {(inputs: Wb_Node_File_Search_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher dans le contenu des fichiers`)
};

/**
* | output |
* | --- |
* | "Search file contents" |
*
* @param {Wb_Node_File_Search_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_file_search_desc = /** @type {((inputs?: Wb_Node_File_Search_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_File_Search_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_file_search_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_file_search_desc(inputs)
	if (locale === "es") return es_wb_node_file_search_desc(inputs)
	if (locale === "ja") return ja_wb_node_file_search_desc(inputs)
	if (locale === "hi") return hi_wb_node_file_search_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_file_search_desc(inputs)
	if (locale === "ko") return ko_wb_node_file_search_desc(inputs)
	return fr_wb_node_file_search_desc(inputs)
});