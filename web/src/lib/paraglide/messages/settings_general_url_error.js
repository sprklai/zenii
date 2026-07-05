/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Url_ErrorInputs */

const en_settings_general_url_error = /** @type {(inputs: Settings_General_Url_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invalid URL. Must be a valid http:// or https:// address.`)
};

const zh_cn2_settings_general_url_error = /** @type {(inputs: Settings_General_Url_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无效的 URL。必须是有效的 http:// 或 https:// 地址。`)
};

const es_settings_general_url_error = /** @type {(inputs: Settings_General_Url_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL inválida. Debe ser una dirección http:// o https:// válida.`)
};

const ja_settings_general_url_error = /** @type {(inputs: Settings_General_Url_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`無効な URL です。有効な http:// または https:// アドレスを入力してください。`)
};

const hi_settings_general_url_error = /** @type {(inputs: Settings_General_Url_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अमान्य URL। यह एक मान्य http:// या https:// पता होना चाहिए।`)
};

const pt_br2_settings_general_url_error = /** @type {(inputs: Settings_General_Url_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL inválida. Deve ser um endereço http:// ou https:// válido.`)
};

const ko_settings_general_url_error = /** @type {(inputs: Settings_General_Url_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`잘못된 URL입니다. 유효한 http:// 또는 https:// 주소여야 합니다.`)
};

const fr_settings_general_url_error = /** @type {(inputs: Settings_General_Url_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL invalide. Doit être une adresse http:// ou https:// valide.`)
};

/**
* | output |
* | --- |
* | "Invalid URL. Must be a valid http:// or https:// address." |
*
* @param {Settings_General_Url_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_url_error = /** @type {((inputs?: Settings_General_Url_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Url_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_url_error(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_url_error(inputs)
	if (locale === "es") return es_settings_general_url_error(inputs)
	if (locale === "ja") return ja_settings_general_url_error(inputs)
	if (locale === "hi") return hi_settings_general_url_error(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_url_error(inputs)
	if (locale === "ko") return ko_settings_general_url_error(inputs)
	return fr_settings_general_url_error(inputs)
});