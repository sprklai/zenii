/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Unsaved_LeaveInputs */

const en_wb_unsaved_leave = /** @type {(inputs: Wb_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leave`)
};

const zh_cn2_wb_unsaved_leave = /** @type {(inputs: Wb_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`离开`)
};

const es_wb_unsaved_leave = /** @type {(inputs: Wb_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salir`)
};

const ja_wb_unsaved_leave = /** @type {(inputs: Wb_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`離れる`)
};

const hi_wb_unsaved_leave = /** @type {(inputs: Wb_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`छोड़ें`)
};

const pt_br2_wb_unsaved_leave = /** @type {(inputs: Wb_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sair`)
};

const ko_wb_unsaved_leave = /** @type {(inputs: Wb_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`떠나기`)
};

const fr_wb_unsaved_leave = /** @type {(inputs: Wb_Unsaved_LeaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitter`)
};

/**
* | output |
* | --- |
* | "Leave" |
*
* @param {Wb_Unsaved_LeaveInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_unsaved_leave = /** @type {((inputs?: Wb_Unsaved_LeaveInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Unsaved_LeaveInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_unsaved_leave(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_unsaved_leave(inputs)
	if (locale === "es") return es_wb_unsaved_leave(inputs)
	if (locale === "ja") return ja_wb_unsaved_leave(inputs)
	if (locale === "hi") return hi_wb_unsaved_leave(inputs)
	if (locale === "pt-BR") return pt_br2_wb_unsaved_leave(inputs)
	if (locale === "ko") return ko_wb_unsaved_leave(inputs)
	return fr_wb_unsaved_leave(inputs)
});