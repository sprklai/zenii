/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Memory_Empty_No_ResultsInputs */

const en_memory_empty_no_results = /** @type {(inputs: Memory_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No memories found for "${i?.query}"`)
};

const zh_cn2_memory_empty_no_results = /** @type {(inputs: Memory_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`未找到与「${i?.query}」相关的记忆`)
};

const es_memory_empty_no_results = /** @type {(inputs: Memory_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No se encontraron memorias para "${i?.query}"`)
};

const ja_memory_empty_no_results = /** @type {(inputs: Memory_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」に一致するメモリが見つかりません`)
};

const hi_memory_empty_no_results = /** @type {(inputs: Memory_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.query}" के लिए कोई मेमोरी नहीं मिली`)
};

const pt_br2_memory_empty_no_results = /** @type {(inputs: Memory_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhuma memória encontrada para "${i?.query}"`)
};

const ko_memory_empty_no_results = /** @type {(inputs: Memory_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.query}"에 대한 메모리를 찾을 수 없습니다`)
};

const fr_memory_empty_no_results = /** @type {(inputs: Memory_Empty_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucune mémoire trouvée pour "${i?.query}"`)
};

/**
* | output |
* | --- |
* | "No memories found for \"{query}\"" |
*
* @param {Memory_Empty_No_ResultsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_empty_no_results = /** @type {((inputs: Memory_Empty_No_ResultsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Empty_No_ResultsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_empty_no_results(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_empty_no_results(inputs)
	if (locale === "es") return es_memory_empty_no_results(inputs)
	if (locale === "ja") return ja_memory_empty_no_results(inputs)
	if (locale === "hi") return hi_memory_empty_no_results(inputs)
	if (locale === "pt-BR") return pt_br2_memory_empty_no_results(inputs)
	if (locale === "ko") return ko_memory_empty_no_results(inputs)
	return fr_memory_empty_no_results(inputs)
});