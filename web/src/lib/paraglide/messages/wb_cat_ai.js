/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Cat_AiInputs */

const en_wb_cat_ai = /** @type {(inputs: Wb_Cat_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI`)
};

const zh_cn2_wb_cat_ai = /** @type {(inputs: Wb_Cat_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI`)
};

const es_wb_cat_ai = /** @type {(inputs: Wb_Cat_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IA`)
};

const ja_wb_cat_ai = /** @type {(inputs: Wb_Cat_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI`)
};

const hi_wb_cat_ai = /** @type {(inputs: Wb_Cat_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI`)
};

const pt_br2_wb_cat_ai = /** @type {(inputs: Wb_Cat_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IA`)
};

const ko_wb_cat_ai = /** @type {(inputs: Wb_Cat_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI`)
};

const fr_wb_cat_ai = /** @type {(inputs: Wb_Cat_AiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IA`)
};

/**
* | output |
* | --- |
* | "AI" |
*
* @param {Wb_Cat_AiInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_cat_ai = /** @type {((inputs?: Wb_Cat_AiInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Cat_AiInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_cat_ai(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_cat_ai(inputs)
	if (locale === "es") return es_wb_cat_ai(inputs)
	if (locale === "ja") return ja_wb_cat_ai(inputs)
	if (locale === "hi") return hi_wb_cat_ai(inputs)
	if (locale === "pt-BR") return pt_br2_wb_cat_ai(inputs)
	if (locale === "ko") return ko_wb_cat_ai(inputs)
	return fr_wb_cat_ai(inputs)
});