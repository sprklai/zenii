/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Memory_SavedInputs */

const en_dashboard_memory_saved = /** @type {(inputs: Dashboard_Memory_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saved`)
};

const zh_cn2_dashboard_memory_saved = /** @type {(inputs: Dashboard_Memory_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已保存`)
};

const es_dashboard_memory_saved = /** @type {(inputs: Dashboard_Memory_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardado`)
};

const ja_dashboard_memory_saved = /** @type {(inputs: Dashboard_Memory_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存済み`)
};

const hi_dashboard_memory_saved = /** @type {(inputs: Dashboard_Memory_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सहेजा गया`)
};

const pt_br2_dashboard_memory_saved = /** @type {(inputs: Dashboard_Memory_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvo`)
};

const ko_dashboard_memory_saved = /** @type {(inputs: Dashboard_Memory_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장됨`)
};

const fr_dashboard_memory_saved = /** @type {(inputs: Dashboard_Memory_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistré`)
};

/**
* | output |
* | --- |
* | "Saved" |
*
* @param {Dashboard_Memory_SavedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_memory_saved = /** @type {((inputs?: Dashboard_Memory_SavedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Memory_SavedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_memory_saved(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_memory_saved(inputs)
	if (locale === "es") return es_dashboard_memory_saved(inputs)
	if (locale === "ja") return ja_dashboard_memory_saved(inputs)
	if (locale === "hi") return hi_dashboard_memory_saved(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_memory_saved(inputs)
	if (locale === "ko") return ko_dashboard_memory_saved(inputs)
	return fr_dashboard_memory_saved(inputs)
});