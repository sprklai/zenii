/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Handle_TrueInputs */

const en_wb_handle_true = /** @type {(inputs: Wb_Handle_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`True`)
};

const zh_cn2_wb_handle_true = /** @type {(inputs: Wb_Handle_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`真`)
};

const es_wb_handle_true = /** @type {(inputs: Wb_Handle_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdadero`)
};

const ja_wb_handle_true = /** @type {(inputs: Wb_Handle_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`真`)
};

const hi_wb_handle_true = /** @type {(inputs: Wb_Handle_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सत्य`)
};

const pt_br2_wb_handle_true = /** @type {(inputs: Wb_Handle_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdadeiro`)
};

const ko_wb_handle_true = /** @type {(inputs: Wb_Handle_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`참`)
};

const fr_wb_handle_true = /** @type {(inputs: Wb_Handle_TrueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vrai`)
};

/**
* | output |
* | --- |
* | "True" |
*
* @param {Wb_Handle_TrueInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_handle_true = /** @type {((inputs?: Wb_Handle_TrueInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Handle_TrueInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_handle_true(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_handle_true(inputs)
	if (locale === "es") return es_wb_handle_true(inputs)
	if (locale === "ja") return ja_wb_handle_true(inputs)
	if (locale === "hi") return hi_wb_handle_true(inputs)
	if (locale === "pt-BR") return pt_br2_wb_handle_true(inputs)
	if (locale === "ko") return ko_wb_handle_true(inputs)
	return fr_wb_handle_true(inputs)
});