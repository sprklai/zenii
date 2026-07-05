/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Wiki_Action_QueryInputs */

const en_wb_option_wiki_action_query = /** @type {(inputs: Wb_Option_Wiki_Action_QueryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Query`)
};

const zh_cn2_wb_option_wiki_action_query = /** @type {(inputs: Wb_Option_Wiki_Action_QueryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查询`)
};

const es_wb_option_wiki_action_query = /** @type {(inputs: Wb_Option_Wiki_Action_QueryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultar`)
};

const ja_wb_option_wiki_action_query = /** @type {(inputs: Wb_Option_Wiki_Action_QueryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`照会`)
};

const hi_wb_option_wiki_action_query = /** @type {(inputs: Wb_Option_Wiki_Action_QueryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`क्वेरी`)
};

const pt_br2_wb_option_wiki_action_query = /** @type {(inputs: Wb_Option_Wiki_Action_QueryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consultar`)
};

const ko_wb_option_wiki_action_query = /** @type {(inputs: Wb_Option_Wiki_Action_QueryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`쿼리`)
};

const fr_wb_option_wiki_action_query = /** @type {(inputs: Wb_Option_Wiki_Action_QueryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interroger`)
};

/**
* | output |
* | --- |
* | "Query" |
*
* @param {Wb_Option_Wiki_Action_QueryInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_wiki_action_query = /** @type {((inputs?: Wb_Option_Wiki_Action_QueryInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Wiki_Action_QueryInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_wiki_action_query(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_wiki_action_query(inputs)
	if (locale === "es") return es_wb_option_wiki_action_query(inputs)
	if (locale === "ja") return ja_wb_option_wiki_action_query(inputs)
	if (locale === "hi") return hi_wb_option_wiki_action_query(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_wiki_action_query(inputs)
	if (locale === "ko") return ko_wb_option_wiki_action_query(inputs)
	return fr_wb_option_wiki_action_query(inputs)
});