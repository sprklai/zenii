/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Recall_Query_PlaceholderInputs */

const en_wb_field_recall_query_placeholder = /** @type {(inputs: Wb_Field_Recall_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recall query`)
};

const zh_cn2_wb_field_recall_query_placeholder = /** @type {(inputs: Wb_Field_Recall_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`召回查询`)
};

const es_wb_field_recall_query_placeholder = /** @type {(inputs: Wb_Field_Recall_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consulta de recuperación`)
};

const ja_wb_field_recall_query_placeholder = /** @type {(inputs: Wb_Field_Recall_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`呼び出しクエリ`)
};

const hi_wb_field_recall_query_placeholder = /** @type {(inputs: Wb_Field_Recall_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`रिकॉल क्वेरी`)
};

const pt_br2_wb_field_recall_query_placeholder = /** @type {(inputs: Wb_Field_Recall_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consulta de recuperação`)
};

const ko_wb_field_recall_query_placeholder = /** @type {(inputs: Wb_Field_Recall_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`호출 쿼리`)
};

const fr_wb_field_recall_query_placeholder = /** @type {(inputs: Wb_Field_Recall_Query_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requête de rappel`)
};

/**
* | output |
* | --- |
* | "Recall query" |
*
* @param {Wb_Field_Recall_Query_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_recall_query_placeholder = /** @type {((inputs?: Wb_Field_Recall_Query_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Recall_Query_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_recall_query_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_recall_query_placeholder(inputs)
	if (locale === "es") return es_wb_field_recall_query_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_recall_query_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_recall_query_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_recall_query_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_recall_query_placeholder(inputs)
	return fr_wb_field_recall_query_placeholder(inputs)
});