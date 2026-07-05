/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Confirm_Remove_DescriptionInputs */

const en_settings_plugins_confirm_remove_description = /** @type {(inputs: Settings_Plugins_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This will uninstall the plugin and remove all its files.`)
};

const zh_cn2_settings_plugins_confirm_remove_description = /** @type {(inputs: Settings_Plugins_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这将卸载插件并删除其所有文件。`)
};

const es_settings_plugins_confirm_remove_description = /** @type {(inputs: Settings_Plugins_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto desinstalará el plugin y eliminará todos sus archivos.`)
};

const ja_settings_plugins_confirm_remove_description = /** @type {(inputs: Settings_Plugins_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラグインをアンインストールし、すべてのファイルが削除されます。`)
};

const hi_settings_plugins_confirm_remove_description = /** @type {(inputs: Settings_Plugins_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह प्लगइन को अनइंस्टॉल करेगा और उसकी सभी फ़ाइलें हटा देगा।`)
};

const pt_br2_settings_plugins_confirm_remove_description = /** @type {(inputs: Settings_Plugins_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso desinstalará o plugin e removerá todos os seus arquivos.`)
};

const ko_settings_plugins_confirm_remove_description = /** @type {(inputs: Settings_Plugins_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`플러그인이 제거되고 모든 파일이 삭제됩니다.`)
};

const fr_settings_plugins_confirm_remove_description = /** @type {(inputs: Settings_Plugins_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ceci désinstallera le plugin et supprimera tous ses fichiers.`)
};

/**
* | output |
* | --- |
* | "This will uninstall the plugin and remove all its files." |
*
* @param {Settings_Plugins_Confirm_Remove_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_confirm_remove_description = /** @type {((inputs?: Settings_Plugins_Confirm_Remove_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Confirm_Remove_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_confirm_remove_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_confirm_remove_description(inputs)
	if (locale === "es") return es_settings_plugins_confirm_remove_description(inputs)
	if (locale === "ja") return ja_settings_plugins_confirm_remove_description(inputs)
	if (locale === "hi") return hi_settings_plugins_confirm_remove_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_confirm_remove_description(inputs)
	if (locale === "ko") return ko_settings_plugins_confirm_remove_description(inputs)
	return fr_settings_plugins_confirm_remove_description(inputs)
});