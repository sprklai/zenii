/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_File_Read_Path_DescriptionInputs */

const en_wb_field_file_read_path_description = /** @type {(inputs: Wb_Field_File_Read_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Path to the file to read`)
};

const zh_cn2_wb_field_file_read_path_description = /** @type {(inputs: Wb_Field_File_Read_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要读取的文件路径`)
};

const es_wb_field_file_read_path_description = /** @type {(inputs: Wb_Field_File_Read_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruta al archivo a leer`)
};

const ja_wb_field_file_read_path_description = /** @type {(inputs: Wb_Field_File_Read_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み取るファイルのパス`)
};

const hi_wb_field_file_read_path_description = /** @type {(inputs: Wb_Field_File_Read_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पढ़ी जाने वाली फ़ाइल का पथ`)
};

const pt_br2_wb_field_file_read_path_description = /** @type {(inputs: Wb_Field_File_Read_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caminho para o arquivo a ser lido`)
};

const ko_wb_field_file_read_path_description = /** @type {(inputs: Wb_Field_File_Read_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`읽을 파일의 경로`)
};

const fr_wb_field_file_read_path_description = /** @type {(inputs: Wb_Field_File_Read_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chemin vers le fichier à lire`)
};

/**
* | output |
* | --- |
* | "Path to the file to read" |
*
* @param {Wb_Field_File_Read_Path_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_file_read_path_description = /** @type {((inputs?: Wb_Field_File_Read_Path_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_File_Read_Path_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_file_read_path_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_file_read_path_description(inputs)
	if (locale === "es") return es_wb_field_file_read_path_description(inputs)
	if (locale === "ja") return ja_wb_field_file_read_path_description(inputs)
	if (locale === "hi") return hi_wb_field_file_read_path_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_file_read_path_description(inputs)
	if (locale === "ko") return ko_wb_field_file_read_path_description(inputs)
	return fr_wb_field_file_read_path_description(inputs)
});