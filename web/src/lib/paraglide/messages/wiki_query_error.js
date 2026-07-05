/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Query_ErrorInputs */

const en_wiki_query_error = /** @type {(inputs: Wiki_Query_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Query failed`)
};

const zh_cn2_wiki_query_error = /** @type {(inputs: Wiki_Query_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查询失败`)
};

const es_wiki_query_error = /** @type {(inputs: Wiki_Query_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error en la consulta`)
};

const ja_wiki_query_error = /** @type {(inputs: Wiki_Query_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クエリに失敗しました`)
};

const hi_wiki_query_error = /** @type {(inputs: Wiki_Query_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रश्न विफल`)
};

const pt_br2_wiki_query_error = /** @type {(inputs: Wiki_Query_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha na consulta`)
};

const ko_wiki_query_error = /** @type {(inputs: Wiki_Query_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`쿼리 실패`)
};

const fr_wiki_query_error = /** @type {(inputs: Wiki_Query_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la requête`)
};

/**
* | output |
* | --- |
* | "Query failed" |
*
* @param {Wiki_Query_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_query_error = /** @type {((inputs?: Wiki_Query_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Query_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_query_error(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_query_error(inputs)
	if (locale === "es") return es_wiki_query_error(inputs)
	if (locale === "ja") return ja_wiki_query_error(inputs)
	if (locale === "hi") return hi_wiki_query_error(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_query_error(inputs)
	if (locale === "ko") return ko_wiki_query_error(inputs)
	return fr_wiki_query_error(inputs)
});