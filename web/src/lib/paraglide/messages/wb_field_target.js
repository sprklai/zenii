/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_TargetInputs */

const en_wb_field_target = /** @type {(inputs: Wb_Field_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Target`)
};

const zh_cn2_wb_field_target = /** @type {(inputs: Wb_Field_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目标`)
};

const es_wb_field_target = /** @type {(inputs: Wb_Field_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destino`)
};

const ja_wb_field_target = /** @type {(inputs: Wb_Field_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ターゲット`)
};

const hi_wb_field_target = /** @type {(inputs: Wb_Field_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लक्ष्य`)
};

const pt_br2_wb_field_target = /** @type {(inputs: Wb_Field_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destino`)
};

const ko_wb_field_target = /** @type {(inputs: Wb_Field_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`대상`)
};

const fr_wb_field_target = /** @type {(inputs: Wb_Field_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cible`)
};

/**
* | output |
* | --- |
* | "Target" |
*
* @param {Wb_Field_TargetInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_target = /** @type {((inputs?: Wb_Field_TargetInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_TargetInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_target(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_target(inputs)
	if (locale === "es") return es_wb_field_target(inputs)
	if (locale === "ja") return ja_wb_field_target(inputs)
	if (locale === "hi") return hi_wb_field_target(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_target(inputs)
	if (locale === "ko") return ko_wb_field_target(inputs)
	return fr_wb_field_target(inputs)
});