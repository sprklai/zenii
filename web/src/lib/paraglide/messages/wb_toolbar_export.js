/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Toolbar_ExportInputs */

const en_wb_toolbar_export = /** @type {(inputs: Wb_Toolbar_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Export`)
};

const zh_cn2_wb_toolbar_export = /** @type {(inputs: Wb_Toolbar_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导出`)
};

const es_wb_toolbar_export = /** @type {(inputs: Wb_Toolbar_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportar`)
};

const ja_wb_toolbar_export = /** @type {(inputs: Wb_Toolbar_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エクスポート`)
};

const hi_wb_toolbar_export = /** @type {(inputs: Wb_Toolbar_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`निर्यात करें`)
};

const pt_br2_wb_toolbar_export = /** @type {(inputs: Wb_Toolbar_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exportar`)
};

const ko_wb_toolbar_export = /** @type {(inputs: Wb_Toolbar_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`내보내기`)
};

const fr_wb_toolbar_export = /** @type {(inputs: Wb_Toolbar_ExportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exporter`)
};

/**
* | output |
* | --- |
* | "Export" |
*
* @param {Wb_Toolbar_ExportInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_toolbar_export = /** @type {((inputs?: Wb_Toolbar_ExportInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Toolbar_ExportInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_toolbar_export(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_toolbar_export(inputs)
	if (locale === "es") return es_wb_toolbar_export(inputs)
	if (locale === "ja") return ja_wb_toolbar_export(inputs)
	if (locale === "hi") return hi_wb_toolbar_export(inputs)
	if (locale === "pt-BR") return pt_br2_wb_toolbar_export(inputs)
	if (locale === "ko") return ko_wb_toolbar_export(inputs)
	return fr_wb_toolbar_export(inputs)
});