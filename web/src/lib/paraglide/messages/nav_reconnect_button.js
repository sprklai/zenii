/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_Reconnect_ButtonInputs */

const en_nav_reconnect_button = /** @type {(inputs: Nav_Reconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reconnect`)
};

const zh_cn2_nav_reconnect_button = /** @type {(inputs: Nav_Reconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新连接`)
};

const es_nav_reconnect_button = /** @type {(inputs: Nav_Reconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reconectar`)
};

const ja_nav_reconnect_button = /** @type {(inputs: Nav_Reconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再接続`)
};

const hi_nav_reconnect_button = /** @type {(inputs: Nav_Reconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पुनः कनेक्ट करें`)
};

const pt_br2_nav_reconnect_button = /** @type {(inputs: Nav_Reconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reconectar`)
};

const ko_nav_reconnect_button = /** @type {(inputs: Nav_Reconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`재연결`)
};

const fr_nav_reconnect_button = /** @type {(inputs: Nav_Reconnect_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reconnecter`)
};

/**
* | output |
* | --- |
* | "Reconnect" |
*
* @param {Nav_Reconnect_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_reconnect_button = /** @type {((inputs?: Nav_Reconnect_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Reconnect_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_reconnect_button(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_reconnect_button(inputs)
	if (locale === "es") return es_nav_reconnect_button(inputs)
	if (locale === "ja") return ja_nav_reconnect_button(inputs)
	if (locale === "hi") return hi_nav_reconnect_button(inputs)
	if (locale === "pt-BR") return pt_br2_nav_reconnect_button(inputs)
	if (locale === "ko") return ko_nav_reconnect_button(inputs)
	return fr_nav_reconnect_button(inputs)
});