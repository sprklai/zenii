/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_File_Path_LabelInputs */

const en_settings_config_file_path_label = /** @type {(inputs: Settings_Config_File_Path_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File Path`)
};

const zh_cn2_settings_config_file_path_label = /** @type {(inputs: Settings_Config_File_Path_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件路径`)
};

const es_settings_config_file_path_label = /** @type {(inputs: Settings_Config_File_Path_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruta del archivo`)
};

const ja_settings_config_file_path_label = /** @type {(inputs: Settings_Config_File_Path_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルパス`)
};

const hi_settings_config_file_path_label = /** @type {(inputs: Settings_Config_File_Path_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइल पथ`)
};

const pt_br2_settings_config_file_path_label = /** @type {(inputs: Settings_Config_File_Path_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caminho do Arquivo`)
};

const ko_settings_config_file_path_label = /** @type {(inputs: Settings_Config_File_Path_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일 경로`)
};

const fr_settings_config_file_path_label = /** @type {(inputs: Settings_Config_File_Path_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chemin du fichier`)
};

/**
* | output |
* | --- |
* | "File Path" |
*
* @param {Settings_Config_File_Path_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_config_file_path_label = /** @type {((inputs?: Settings_Config_File_Path_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_File_Path_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_file_path_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_config_file_path_label(inputs)
	if (locale === "es") return es_settings_config_file_path_label(inputs)
	if (locale === "ja") return ja_settings_config_file_path_label(inputs)
	if (locale === "hi") return hi_settings_config_file_path_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_config_file_path_label(inputs)
	if (locale === "ko") return ko_settings_config_file_path_label(inputs)
	return fr_settings_config_file_path_label(inputs)
});