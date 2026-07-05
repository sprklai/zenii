/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Boot_StartingInputs */

const en_auth_boot_starting = /** @type {(inputs: Auth_Boot_StartingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starting Zenii...`)
};

const zh_cn2_auth_boot_starting = /** @type {(inputs: Auth_Boot_StartingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在启动 Zenii...`)
};

const es_auth_boot_starting = /** @type {(inputs: Auth_Boot_StartingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciando Zenii...`)
};

const ja_auth_boot_starting = /** @type {(inputs: Auth_Boot_StartingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii を起動中...`)
};

const hi_auth_boot_starting = /** @type {(inputs: Auth_Boot_StartingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii शुरू हो रहा है...`)
};

const pt_br2_auth_boot_starting = /** @type {(inputs: Auth_Boot_StartingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iniciando Zenii...`)
};

const ko_auth_boot_starting = /** @type {(inputs: Auth_Boot_StartingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii 시작 중...`)
};

const fr_auth_boot_starting = /** @type {(inputs: Auth_Boot_StartingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Démarrage de Zenii...`)
};

/**
* | output |
* | --- |
* | "Starting Zenii..." |
*
* @param {Auth_Boot_StartingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_boot_starting = /** @type {((inputs?: Auth_Boot_StartingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Boot_StartingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_boot_starting(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_boot_starting(inputs)
	if (locale === "es") return es_auth_boot_starting(inputs)
	if (locale === "ja") return ja_auth_boot_starting(inputs)
	if (locale === "hi") return hi_auth_boot_starting(inputs)
	if (locale === "pt-BR") return pt_br2_auth_boot_starting(inputs)
	if (locale === "ko") return ko_auth_boot_starting(inputs)
	return fr_auth_boot_starting(inputs)
});