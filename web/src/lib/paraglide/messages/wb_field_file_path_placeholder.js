/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_File_Path_PlaceholderInputs */

const en_wb_field_file_path_placeholder = /** @type {(inputs: Wb_Field_File_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Absolute or relative file path`)
};

const zh_cn2_wb_field_file_path_placeholder = /** @type {(inputs: Wb_Field_File_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`绝对或相对文件路径`)
};

const es_wb_field_file_path_placeholder = /** @type {(inputs: Wb_Field_File_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruta de archivo absoluta o relativa`)
};

const ja_wb_field_file_path_placeholder = /** @type {(inputs: Wb_Field_File_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`絶対または相対ファイルパス`)
};

const hi_wb_field_file_path_placeholder = /** @type {(inputs: Wb_Field_File_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`निरपेक्ष या सापेक्ष फ़ाइल पथ`)
};

const pt_br2_wb_field_file_path_placeholder = /** @type {(inputs: Wb_Field_File_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caminho absoluto ou relativo do arquivo`)
};

const ko_wb_field_file_path_placeholder = /** @type {(inputs: Wb_Field_File_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`절대 또는 상대 파일 경로`)
};

const fr_wb_field_file_path_placeholder = /** @type {(inputs: Wb_Field_File_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chemin de fichier absolu ou relatif`)
};

/**
* | output |
* | --- |
* | "Absolute or relative file path" |
*
* @param {Wb_Field_File_Path_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_file_path_placeholder = /** @type {((inputs?: Wb_Field_File_Path_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_File_Path_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_file_path_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_file_path_placeholder(inputs)
	if (locale === "es") return es_wb_field_file_path_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_file_path_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_file_path_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_file_path_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_file_path_placeholder(inputs)
	return fr_wb_field_file_path_placeholder(inputs)
});