/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Confirm_Remove_TitleInputs */

const en_settings_plugins_confirm_remove_title = /** @type {(inputs: Settings_Plugins_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove plugin?`)
};

const zh_cn2_settings_plugins_confirm_remove_title = /** @type {(inputs: Settings_Plugins_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除插件？`)
};

const es_settings_plugins_confirm_remove_title = /** @type {(inputs: Settings_Plugins_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar plugin?`)
};

const ja_settings_plugins_confirm_remove_title = /** @type {(inputs: Settings_Plugins_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラグインを削除しますか？`)
};

const hi_settings_plugins_confirm_remove_title = /** @type {(inputs: Settings_Plugins_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्लगइन हटाएँ?`)
};

const pt_br2_settings_plugins_confirm_remove_title = /** @type {(inputs: Settings_Plugins_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover plugin?`)
};

const ko_settings_plugins_confirm_remove_title = /** @type {(inputs: Settings_Plugins_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`플러그인을 제거할까요?`)
};

const fr_settings_plugins_confirm_remove_title = /** @type {(inputs: Settings_Plugins_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer le plugin ?`)
};

/**
* | output |
* | --- |
* | "Remove plugin?" |
*
* @param {Settings_Plugins_Confirm_Remove_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_confirm_remove_title = /** @type {((inputs?: Settings_Plugins_Confirm_Remove_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Confirm_Remove_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_confirm_remove_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_confirm_remove_title(inputs)
	if (locale === "es") return es_settings_plugins_confirm_remove_title(inputs)
	if (locale === "ja") return ja_settings_plugins_confirm_remove_title(inputs)
	if (locale === "hi") return hi_settings_plugins_confirm_remove_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_confirm_remove_title(inputs)
	if (locale === "ko") return ko_settings_plugins_confirm_remove_title(inputs)
	return fr_settings_plugins_confirm_remove_title(inputs)
});