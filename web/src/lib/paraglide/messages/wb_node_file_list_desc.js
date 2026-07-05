/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_File_List_DescInputs */

const en_wb_node_file_list_desc = /** @type {(inputs: Wb_Node_File_List_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`List directory`)
};

const zh_cn2_wb_node_file_list_desc = /** @type {(inputs: Wb_Node_File_List_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列出目录`)
};

const es_wb_node_file_list_desc = /** @type {(inputs: Wb_Node_File_List_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listar directorio`)
};

const ja_wb_node_file_list_desc = /** @type {(inputs: Wb_Node_File_List_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ディレクトリを一覧表示`)
};

const hi_wb_node_file_list_desc = /** @type {(inputs: Wb_Node_File_List_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डायरेक्टरी सूचीबद्ध करें`)
};

const pt_br2_wb_node_file_list_desc = /** @type {(inputs: Wb_Node_File_List_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listar diretório`)
};

const ko_wb_node_file_list_desc = /** @type {(inputs: Wb_Node_File_List_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`디렉토리 나열`)
};

const fr_wb_node_file_list_desc = /** @type {(inputs: Wb_Node_File_List_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lister un répertoire`)
};

/**
* | output |
* | --- |
* | "List directory" |
*
* @param {Wb_Node_File_List_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_file_list_desc = /** @type {((inputs?: Wb_Node_File_List_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_File_List_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_file_list_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_file_list_desc(inputs)
	if (locale === "es") return es_wb_node_file_list_desc(inputs)
	if (locale === "ja") return ja_wb_node_file_list_desc(inputs)
	if (locale === "hi") return hi_wb_node_file_list_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_file_list_desc(inputs)
	if (locale === "ko") return ko_wb_node_file_list_desc(inputs)
	return fr_wb_node_file_list_desc(inputs)
});