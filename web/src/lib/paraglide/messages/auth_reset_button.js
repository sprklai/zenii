/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Reset_ButtonInputs */

const en_auth_reset_button = /** @type {(inputs: Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change URL / Reset`)
};

const zh_cn2_auth_reset_button = /** @type {(inputs: Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更改 URL / 重置`)
};

const es_auth_reset_button = /** @type {(inputs: Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar URL / Restablecer`)
};

const ja_auth_reset_button = /** @type {(inputs: Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL 変更 / リセット`)
};

const hi_auth_reset_button = /** @type {(inputs: Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL बदलें / रीसेट करें`)
};

const pt_br2_auth_reset_button = /** @type {(inputs: Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterar URL / Redefinir`)
};

const ko_auth_reset_button = /** @type {(inputs: Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`URL 변경 / 초기화`)
};

const fr_auth_reset_button = /** @type {(inputs: Auth_Reset_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changer l'URL / Réinitialiser`)
};

/**
* | output |
* | --- |
* | "Change URL / Reset" |
*
* @param {Auth_Reset_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_reset_button = /** @type {((inputs?: Auth_Reset_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Reset_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_reset_button(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_reset_button(inputs)
	if (locale === "es") return es_auth_reset_button(inputs)
	if (locale === "ja") return ja_auth_reset_button(inputs)
	if (locale === "hi") return hi_auth_reset_button(inputs)
	if (locale === "pt-BR") return pt_br2_auth_reset_button(inputs)
	if (locale === "ko") return ko_auth_reset_button(inputs)
	return fr_auth_reset_button(inputs)
});