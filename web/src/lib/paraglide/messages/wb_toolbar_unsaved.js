/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Toolbar_UnsavedInputs */

const en_wb_toolbar_unsaved = /** @type {(inputs: Wb_Toolbar_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsaved changes`)
};

const zh_cn2_wb_toolbar_unsaved = /** @type {(inputs: Wb_Toolbar_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有未保存的更改`)
};

const es_wb_toolbar_unsaved = /** @type {(inputs: Wb_Toolbar_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambios sin guardar`)
};

const ja_wb_toolbar_unsaved = /** @type {(inputs: Wb_Toolbar_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存の変更`)
};

const hi_wb_toolbar_unsaved = /** @type {(inputs: Wb_Toolbar_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अहस्ताक्षरित परिवर्तन`)
};

const pt_br2_wb_toolbar_unsaved = /** @type {(inputs: Wb_Toolbar_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterações não salvas`)
};

const ko_wb_toolbar_unsaved = /** @type {(inputs: Wb_Toolbar_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장되지 않은 변경 사항`)
};

const fr_wb_toolbar_unsaved = /** @type {(inputs: Wb_Toolbar_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifications non enregistrées`)
};

/**
* | output |
* | --- |
* | "Unsaved changes" |
*
* @param {Wb_Toolbar_UnsavedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_toolbar_unsaved = /** @type {((inputs?: Wb_Toolbar_UnsavedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Toolbar_UnsavedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_toolbar_unsaved(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_toolbar_unsaved(inputs)
	if (locale === "es") return es_wb_toolbar_unsaved(inputs)
	if (locale === "ja") return ja_wb_toolbar_unsaved(inputs)
	if (locale === "hi") return hi_wb_toolbar_unsaved(inputs)
	if (locale === "pt-BR") return pt_br2_wb_toolbar_unsaved(inputs)
	if (locale === "ko") return ko_wb_toolbar_unsaved(inputs)
	return fr_wb_toolbar_unsaved(inputs)
});