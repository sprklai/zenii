/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Toolbar_View_VisualInputs */

const en_wb_toolbar_view_visual = /** @type {(inputs: Wb_Toolbar_View_VisualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visual`)
};

const zh_cn2_wb_toolbar_view_visual = /** @type {(inputs: Wb_Toolbar_View_VisualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可视化`)
};

const es_wb_toolbar_view_visual = /** @type {(inputs: Wb_Toolbar_View_VisualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visual`)
};

const ja_wb_toolbar_view_visual = /** @type {(inputs: Wb_Toolbar_View_VisualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビジュアル`)
};

const hi_wb_toolbar_view_visual = /** @type {(inputs: Wb_Toolbar_View_VisualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`दृश्य`)
};

const pt_br2_wb_toolbar_view_visual = /** @type {(inputs: Wb_Toolbar_View_VisualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visual`)
};

const ko_wb_toolbar_view_visual = /** @type {(inputs: Wb_Toolbar_View_VisualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시각적`)
};

const fr_wb_toolbar_view_visual = /** @type {(inputs: Wb_Toolbar_View_VisualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visuel`)
};

/**
* | output |
* | --- |
* | "Visual" |
*
* @param {Wb_Toolbar_View_VisualInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_toolbar_view_visual = /** @type {((inputs?: Wb_Toolbar_View_VisualInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Toolbar_View_VisualInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_toolbar_view_visual(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_toolbar_view_visual(inputs)
	if (locale === "es") return es_wb_toolbar_view_visual(inputs)
	if (locale === "ja") return ja_wb_toolbar_view_visual(inputs)
	if (locale === "hi") return hi_wb_toolbar_view_visual(inputs)
	if (locale === "pt-BR") return pt_br2_wb_toolbar_view_visual(inputs)
	if (locale === "ko") return ko_wb_toolbar_view_visual(inputs)
	return fr_wb_toolbar_view_visual(inputs)
});