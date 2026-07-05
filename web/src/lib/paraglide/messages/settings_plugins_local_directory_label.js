/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Local_Directory_LabelInputs */

const en_settings_plugins_local_directory_label = /** @type {(inputs: Settings_Plugins_Local_Directory_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Local directory`)
};

const zh_cn2_settings_plugins_local_directory_label = /** @type {(inputs: Settings_Plugins_Local_Directory_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本地目录`)
};

const es_settings_plugins_local_directory_label = /** @type {(inputs: Settings_Plugins_Local_Directory_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Directorio local`)
};

const ja_settings_plugins_local_directory_label = /** @type {(inputs: Settings_Plugins_Local_Directory_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ローカルディレクトリ`)
};

const hi_settings_plugins_local_directory_label = /** @type {(inputs: Settings_Plugins_Local_Directory_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लोकल डायरेक्टरी`)
};

const pt_br2_settings_plugins_local_directory_label = /** @type {(inputs: Settings_Plugins_Local_Directory_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diretório local`)
};

const ko_settings_plugins_local_directory_label = /** @type {(inputs: Settings_Plugins_Local_Directory_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`로컬 디렉터리`)
};

const fr_settings_plugins_local_directory_label = /** @type {(inputs: Settings_Plugins_Local_Directory_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répertoire local`)
};

/**
* | output |
* | --- |
* | "Local directory" |
*
* @param {Settings_Plugins_Local_Directory_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_local_directory_label = /** @type {((inputs?: Settings_Plugins_Local_Directory_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Local_Directory_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_local_directory_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_local_directory_label(inputs)
	if (locale === "es") return es_settings_plugins_local_directory_label(inputs)
	if (locale === "ja") return ja_settings_plugins_local_directory_label(inputs)
	if (locale === "hi") return hi_settings_plugins_local_directory_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_local_directory_label(inputs)
	if (locale === "ko") return ko_settings_plugins_local_directory_label(inputs)
	return fr_settings_plugins_local_directory_label(inputs)
});