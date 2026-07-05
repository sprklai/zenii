/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Cat_SystemInputs */

const en_wb_cat_system = /** @type {(inputs: Wb_Cat_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const zh_cn2_wb_cat_system = /** @type {(inputs: Wb_Cat_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`系统`)
};

const es_wb_cat_system = /** @type {(inputs: Wb_Cat_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const ja_wb_cat_system = /** @type {(inputs: Wb_Cat_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システム`)
};

const hi_wb_cat_system = /** @type {(inputs: Wb_Cat_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सिस्टम`)
};

const pt_br2_wb_cat_system = /** @type {(inputs: Wb_Cat_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const ko_wb_cat_system = /** @type {(inputs: Wb_Cat_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시스템`)
};

const fr_wb_cat_system = /** @type {(inputs: Wb_Cat_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Système`)
};

/**
* | output |
* | --- |
* | "System" |
*
* @param {Wb_Cat_SystemInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_cat_system = /** @type {((inputs?: Wb_Cat_SystemInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Cat_SystemInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_cat_system(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_cat_system(inputs)
	if (locale === "es") return es_wb_cat_system(inputs)
	if (locale === "ja") return ja_wb_cat_system(inputs)
	if (locale === "hi") return hi_wb_cat_system(inputs)
	if (locale === "pt-BR") return pt_br2_wb_cat_system(inputs)
	if (locale === "ko") return ko_wb_cat_system(inputs)
	return fr_wb_cat_system(inputs)
});