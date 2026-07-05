/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_File_List_DescriptionInputs */

const en_wb_node_file_list_description = /** @type {(inputs: Wb_Node_File_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`List files in a directory`)
};

const zh_cn2_wb_node_file_list_description = /** @type {(inputs: Wb_Node_File_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列出目录中的文件`)
};

const es_wb_node_file_list_description = /** @type {(inputs: Wb_Node_File_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listar archivos en un directorio`)
};

const ja_wb_node_file_list_description = /** @type {(inputs: Wb_Node_File_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ディレクトリ内のファイルを一覧表示します`)
};

const hi_wb_node_file_list_description = /** @type {(inputs: Wb_Node_File_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डायरेक्टरी में फ़ाइलें सूचीबद्ध करें`)
};

const pt_br2_wb_node_file_list_description = /** @type {(inputs: Wb_Node_File_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listar arquivos em um diretório`)
};

const ko_wb_node_file_list_description = /** @type {(inputs: Wb_Node_File_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`디렉토리의 파일을 나열합니다`)
};

const fr_wb_node_file_list_description = /** @type {(inputs: Wb_Node_File_List_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lister les fichiers d'un répertoire`)
};

/**
* | output |
* | --- |
* | "List files in a directory" |
*
* @param {Wb_Node_File_List_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_file_list_description = /** @type {((inputs?: Wb_Node_File_List_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_File_List_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_file_list_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_file_list_description(inputs)
	if (locale === "es") return es_wb_node_file_list_description(inputs)
	if (locale === "ja") return ja_wb_node_file_list_description(inputs)
	if (locale === "hi") return hi_wb_node_file_list_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_file_list_description(inputs)
	if (locale === "ko") return ko_wb_node_file_list_description(inputs)
	return fr_wb_node_file_list_description(inputs)
});