/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_File_List_Path_DescriptionInputs */

const en_wb_field_file_list_path_description = /** @type {(inputs: Wb_Field_File_List_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Path to the directory to list`)
};

const zh_cn2_wb_field_file_list_path_description = /** @type {(inputs: Wb_Field_File_List_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要列出的目录路径`)
};

const es_wb_field_file_list_path_description = /** @type {(inputs: Wb_Field_File_List_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruta al directorio a listar`)
};

const ja_wb_field_file_list_path_description = /** @type {(inputs: Wb_Field_File_List_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一覧表示するディレクトリのパス`)
};

const hi_wb_field_file_list_path_description = /** @type {(inputs: Wb_Field_File_List_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचीबद्ध की जाने वाली डायरेक्टरी का पथ`)
};

const pt_br2_wb_field_file_list_path_description = /** @type {(inputs: Wb_Field_File_List_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caminho para o diretório a ser listado`)
};

const ko_wb_field_file_list_path_description = /** @type {(inputs: Wb_Field_File_List_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`나열할 디렉토리의 경로`)
};

const fr_wb_field_file_list_path_description = /** @type {(inputs: Wb_Field_File_List_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chemin vers le répertoire à lister`)
};

/**
* | output |
* | --- |
* | "Path to the directory to list" |
*
* @param {Wb_Field_File_List_Path_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_file_list_path_description = /** @type {((inputs?: Wb_Field_File_List_Path_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_File_List_Path_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_file_list_path_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_file_list_path_description(inputs)
	if (locale === "es") return es_wb_field_file_list_path_description(inputs)
	if (locale === "ja") return ja_wb_field_file_list_path_description(inputs)
	if (locale === "hi") return hi_wb_field_file_list_path_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_file_list_path_description(inputs)
	if (locale === "ko") return ko_wb_field_file_list_path_description(inputs)
	return fr_wb_field_file_list_path_description(inputs)
});