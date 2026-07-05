/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Unsaved_ConfirmInputs */

const en_wb_unsaved_confirm = /** @type {(inputs: Wb_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsaved Changes`)
};

const zh_cn2_wb_unsaved_confirm = /** @type {(inputs: Wb_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存的更改`)
};

const es_wb_unsaved_confirm = /** @type {(inputs: Wb_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambios sin guardar`)
};

const ja_wb_unsaved_confirm = /** @type {(inputs: Wb_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存の変更`)
};

const hi_wb_unsaved_confirm = /** @type {(inputs: Wb_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`असहेजे परिवर्तन`)
};

const pt_br2_wb_unsaved_confirm = /** @type {(inputs: Wb_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterações Não Salvas`)
};

const ko_wb_unsaved_confirm = /** @type {(inputs: Wb_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장되지 않은 변경 사항`)
};

const fr_wb_unsaved_confirm = /** @type {(inputs: Wb_Unsaved_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifications non enregistrées`)
};

/**
* | output |
* | --- |
* | "Unsaved Changes" |
*
* @param {Wb_Unsaved_ConfirmInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_unsaved_confirm = /** @type {((inputs?: Wb_Unsaved_ConfirmInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Unsaved_ConfirmInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_unsaved_confirm(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_unsaved_confirm(inputs)
	if (locale === "es") return es_wb_unsaved_confirm(inputs)
	if (locale === "ja") return ja_wb_unsaved_confirm(inputs)
	if (locale === "hi") return hi_wb_unsaved_confirm(inputs)
	if (locale === "pt-BR") return pt_br2_wb_unsaved_confirm(inputs)
	if (locale === "ko") return ko_wb_unsaved_confirm(inputs)
	return fr_wb_unsaved_confirm(inputs)
});