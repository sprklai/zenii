/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_PathInputs */

const en_wb_field_path = /** @type {(inputs: Wb_Field_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Path`)
};

const zh_cn2_wb_field_path = /** @type {(inputs: Wb_Field_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`路径`)
};

const es_wb_field_path = /** @type {(inputs: Wb_Field_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruta`)
};

const ja_wb_field_path = /** @type {(inputs: Wb_Field_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パス`)
};

const hi_wb_field_path = /** @type {(inputs: Wb_Field_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पथ`)
};

const pt_br2_wb_field_path = /** @type {(inputs: Wb_Field_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caminho`)
};

const ko_wb_field_path = /** @type {(inputs: Wb_Field_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`경로`)
};

const fr_wb_field_path = /** @type {(inputs: Wb_Field_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chemin`)
};

/**
* | output |
* | --- |
* | "Path" |
*
* @param {Wb_Field_PathInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_path = /** @type {((inputs?: Wb_Field_PathInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_PathInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_path(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_path(inputs)
	if (locale === "es") return es_wb_field_path(inputs)
	if (locale === "ja") return ja_wb_field_path(inputs)
	if (locale === "hi") return hi_wb_field_path(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_path(inputs)
	if (locale === "ko") return ko_wb_field_path(inputs)
	return fr_wb_field_path(inputs)
});