/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_ActionInputs */

const en_wb_field_action = /** @type {(inputs: Wb_Field_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action`)
};

const zh_cn2_wb_field_action = /** @type {(inputs: Wb_Field_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

const es_wb_field_action = /** @type {(inputs: Wb_Field_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acción`)
};

const ja_wb_field_action = /** @type {(inputs: Wb_Field_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクション`)
};

const hi_wb_field_action = /** @type {(inputs: Wb_Field_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`क्रिया`)
};

const pt_br2_wb_field_action = /** @type {(inputs: Wb_Field_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ação`)
};

const ko_wb_field_action = /** @type {(inputs: Wb_Field_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업`)
};

const fr_wb_field_action = /** @type {(inputs: Wb_Field_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action`)
};

/**
* | output |
* | --- |
* | "Action" |
*
* @param {Wb_Field_ActionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_action = /** @type {((inputs?: Wb_Field_ActionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_ActionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_action(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_action(inputs)
	if (locale === "es") return es_wb_field_action(inputs)
	if (locale === "ja") return ja_wb_field_action(inputs)
	if (locale === "hi") return hi_wb_field_action(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_action(inputs)
	if (locale === "ko") return ko_wb_field_action(inputs)
	return fr_wb_field_action(inputs)
});