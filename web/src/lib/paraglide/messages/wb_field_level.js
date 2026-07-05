/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_LevelInputs */

const en_wb_field_level = /** @type {(inputs: Wb_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Level`)
};

const zh_cn2_wb_field_level = /** @type {(inputs: Wb_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`级别`)
};

const es_wb_field_level = /** @type {(inputs: Wb_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nivel`)
};

const ja_wb_field_level = /** @type {(inputs: Wb_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レベル`)
};

const hi_wb_field_level = /** @type {(inputs: Wb_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`स्तर`)
};

const pt_br2_wb_field_level = /** @type {(inputs: Wb_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nível`)
};

const ko_wb_field_level = /** @type {(inputs: Wb_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`수준`)
};

const fr_wb_field_level = /** @type {(inputs: Wb_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niveau`)
};

/**
* | output |
* | --- |
* | "Level" |
*
* @param {Wb_Field_LevelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_level = /** @type {((inputs?: Wb_Field_LevelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_LevelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_level(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_level(inputs)
	if (locale === "es") return es_wb_field_level(inputs)
	if (locale === "ja") return ja_wb_field_level(inputs)
	if (locale === "hi") return hi_wb_field_level(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_level(inputs)
	if (locale === "ko") return ko_wb_field_level(inputs)
	return fr_wb_field_level(inputs)
});