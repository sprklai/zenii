/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Memory_TotalInputs */

const en_dashboard_memory_total = /** @type {(inputs: Dashboard_Memory_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} total entries`)
};

const zh_cn2_dashboard_memory_total = /** @type {(inputs: Dashboard_Memory_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`共 ${i?.count} 条记录`)
};

const es_dashboard_memory_total = /** @type {(inputs: Dashboard_Memory_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} entradas en total`)
};

const ja_dashboard_memory_total = /** @type {(inputs: Dashboard_Memory_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`全 ${i?.count} 件`)
};

const hi_dashboard_memory_total = /** @type {(inputs: Dashboard_Memory_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} कुल प्रविष्टियाँ`)
};

const pt_br2_dashboard_memory_total = /** @type {(inputs: Dashboard_Memory_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} entradas no total`)
};

const ko_dashboard_memory_total = /** @type {(inputs: Dashboard_Memory_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`총 ${i?.count}개 항목`)
};

const fr_dashboard_memory_total = /** @type {(inputs: Dashboard_Memory_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} entrées au total`)
};

/**
* | output |
* | --- |
* | "{count} total entries" |
*
* @param {Dashboard_Memory_TotalInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_memory_total = /** @type {((inputs: Dashboard_Memory_TotalInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Memory_TotalInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_memory_total(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_memory_total(inputs)
	if (locale === "es") return es_dashboard_memory_total(inputs)
	if (locale === "ja") return ja_dashboard_memory_total(inputs)
	if (locale === "hi") return hi_dashboard_memory_total(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_memory_total(inputs)
	if (locale === "ko") return ko_dashboard_memory_total(inputs)
	return fr_dashboard_memory_total(inputs)
});