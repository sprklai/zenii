/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Max_ResultsInputs */

const en_wb_field_max_results = /** @type {(inputs: Wb_Field_Max_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Max Results`)
};

const zh_cn2_wb_field_max_results = /** @type {(inputs: Wb_Field_Max_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最大结果数`)
};

const es_wb_field_max_results = /** @type {(inputs: Wb_Field_Max_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultados máximos`)
};

const ja_wb_field_max_results = /** @type {(inputs: Wb_Field_Max_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最大結果数`)
};

const hi_wb_field_max_results = /** @type {(inputs: Wb_Field_Max_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अधिकतम परिणाम`)
};

const pt_br2_wb_field_max_results = /** @type {(inputs: Wb_Field_Max_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Máximo de Resultados`)
};

const ko_wb_field_max_results = /** @type {(inputs: Wb_Field_Max_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`최대 결과 수`)
};

const fr_wb_field_max_results = /** @type {(inputs: Wb_Field_Max_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résultats max.`)
};

/**
* | output |
* | --- |
* | "Max Results" |
*
* @param {Wb_Field_Max_ResultsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_max_results = /** @type {((inputs?: Wb_Field_Max_ResultsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Max_ResultsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_max_results(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_max_results(inputs)
	if (locale === "es") return es_wb_field_max_results(inputs)
	if (locale === "ja") return ja_wb_field_max_results(inputs)
	if (locale === "hi") return hi_wb_field_max_results(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_max_results(inputs)
	if (locale === "ko") return ko_wb_field_max_results(inputs)
	return fr_wb_field_max_results(inputs)
});