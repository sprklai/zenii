/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Dir_Path_PlaceholderInputs */

const en_wb_field_dir_path_placeholder = /** @type {(inputs: Wb_Field_Dir_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Directory path`)
};

const zh_cn2_wb_field_dir_path_placeholder = /** @type {(inputs: Wb_Field_Dir_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目录路径`)
};

const es_wb_field_dir_path_placeholder = /** @type {(inputs: Wb_Field_Dir_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruta del directorio`)
};

const ja_wb_field_dir_path_placeholder = /** @type {(inputs: Wb_Field_Dir_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ディレクトリパス`)
};

const hi_wb_field_dir_path_placeholder = /** @type {(inputs: Wb_Field_Dir_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डायरेक्टरी पथ`)
};

const pt_br2_wb_field_dir_path_placeholder = /** @type {(inputs: Wb_Field_Dir_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caminho do diretório`)
};

const ko_wb_field_dir_path_placeholder = /** @type {(inputs: Wb_Field_Dir_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`디렉토리 경로`)
};

const fr_wb_field_dir_path_placeholder = /** @type {(inputs: Wb_Field_Dir_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chemin du répertoire`)
};

/**
* | output |
* | --- |
* | "Directory path" |
*
* @param {Wb_Field_Dir_Path_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_dir_path_placeholder = /** @type {((inputs?: Wb_Field_Dir_Path_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Dir_Path_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_dir_path_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_dir_path_placeholder(inputs)
	if (locale === "es") return es_wb_field_dir_path_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_dir_path_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_dir_path_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_dir_path_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_dir_path_placeholder(inputs)
	return fr_wb_field_dir_path_placeholder(inputs)
});