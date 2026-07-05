/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Fallback_TitleInputs */

const en_settings_fallback_title = /** @type {(inputs: Settings_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
};

const zh_cn2_settings_fallback_title = /** @type {(inputs: Settings_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置`)
};

const es_settings_fallback_title = /** @type {(inputs: Settings_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustes`)
};

const ja_settings_fallback_title = /** @type {(inputs: Settings_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

const hi_settings_fallback_title = /** @type {(inputs: Settings_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सेटिंग्स`)
};

const pt_br2_settings_fallback_title = /** @type {(inputs: Settings_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações`)
};

const ko_settings_fallback_title = /** @type {(inputs: Settings_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정`)
};

const fr_settings_fallback_title = /** @type {(inputs: Settings_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres`)
};

/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Settings_Fallback_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_fallback_title = /** @type {((inputs?: Settings_Fallback_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Fallback_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_fallback_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_fallback_title(inputs)
	if (locale === "es") return es_settings_fallback_title(inputs)
	if (locale === "ja") return ja_settings_fallback_title(inputs)
	if (locale === "hi") return hi_settings_fallback_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_fallback_title(inputs)
	if (locale === "ko") return ko_settings_fallback_title(inputs)
	return fr_settings_fallback_title(inputs)
});