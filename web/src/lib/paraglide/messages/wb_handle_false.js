/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Handle_FalseInputs */

const en_wb_handle_false = /** @type {(inputs: Wb_Handle_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`False`)
};

const zh_cn2_wb_handle_false = /** @type {(inputs: Wb_Handle_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`假`)
};

const es_wb_handle_false = /** @type {(inputs: Wb_Handle_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falso`)
};

const ja_wb_handle_false = /** @type {(inputs: Wb_Handle_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`偽`)
};

const hi_wb_handle_false = /** @type {(inputs: Wb_Handle_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`असत्य`)
};

const pt_br2_wb_handle_false = /** @type {(inputs: Wb_Handle_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falso`)
};

const ko_wb_handle_false = /** @type {(inputs: Wb_Handle_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`거짓`)
};

const fr_wb_handle_false = /** @type {(inputs: Wb_Handle_FalseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faux`)
};

/**
* | output |
* | --- |
* | "False" |
*
* @param {Wb_Handle_FalseInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_handle_false = /** @type {((inputs?: Wb_Handle_FalseInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Handle_FalseInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_handle_false(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_handle_false(inputs)
	if (locale === "es") return es_wb_handle_false(inputs)
	if (locale === "ja") return ja_wb_handle_false(inputs)
	if (locale === "hi") return hi_wb_handle_false(inputs)
	if (locale === "pt-BR") return pt_br2_wb_handle_false(inputs)
	if (locale === "ko") return ko_wb_handle_false(inputs)
	return fr_wb_handle_false(inputs)
});