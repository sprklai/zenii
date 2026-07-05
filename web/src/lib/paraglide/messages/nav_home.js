/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_HomeInputs */

const en_nav_home = /** @type {(inputs: Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Home`)
};

const zh_cn2_nav_home = /** @type {(inputs: Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首页`)
};

const es_nav_home = /** @type {(inputs: Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicio`)
};

const ja_nav_home = /** @type {(inputs: Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ホーム`)
};

const hi_nav_home = /** @type {(inputs: Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`होम`)
};

const pt_br2_nav_home = /** @type {(inputs: Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Início`)
};

const ko_nav_home = /** @type {(inputs: Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`홈`)
};

const fr_nav_home = /** @type {(inputs: Nav_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accueil`)
};

/**
* | output |
* | --- |
* | "Home" |
*
* @param {Nav_HomeInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_home = /** @type {((inputs?: Nav_HomeInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_HomeInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_home(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_home(inputs)
	if (locale === "es") return es_nav_home(inputs)
	if (locale === "ja") return ja_nav_home(inputs)
	if (locale === "hi") return hi_nav_home(inputs)
	if (locale === "pt-BR") return pt_br2_nav_home(inputs)
	if (locale === "ko") return ko_nav_home(inputs)
	return fr_nav_home(inputs)
});