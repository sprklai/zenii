/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Export_ButtonInputs */

const en_wb_export_button = /** @type {(inputs: Wb_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Export`)
};

const zh_cn2_wb_export_button = /** @type {(inputs: Wb_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导出`)
};

const es_wb_export_button = /** @type {(inputs: Wb_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportar`)
};

const ja_wb_export_button = /** @type {(inputs: Wb_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エクスポート`)
};

const hi_wb_export_button = /** @type {(inputs: Wb_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`निर्यात करें`)
};

const pt_br2_wb_export_button = /** @type {(inputs: Wb_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportar`)
};

const ko_wb_export_button = /** @type {(inputs: Wb_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`내보내기`)
};

const fr_wb_export_button = /** @type {(inputs: Wb_Export_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporter`)
};

/**
* | output |
* | --- |
* | "Export" |
*
* @param {Wb_Export_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_export_button = /** @type {((inputs?: Wb_Export_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Export_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_export_button(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_export_button(inputs)
	if (locale === "es") return es_wb_export_button(inputs)
	if (locale === "ja") return ja_wb_export_button(inputs)
	if (locale === "hi") return hi_wb_export_button(inputs)
	if (locale === "pt-BR") return pt_br2_wb_export_button(inputs)
	if (locale === "ko") return ko_wb_export_button(inputs)
	return fr_wb_export_button(inputs)
});