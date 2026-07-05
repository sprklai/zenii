/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_ContentInputs */

const en_wb_field_content = /** @type {(inputs: Wb_Field_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Content`)
};

const zh_cn2_wb_field_content = /** @type {(inputs: Wb_Field_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

const es_wb_field_content = /** @type {(inputs: Wb_Field_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido`)
};

const ja_wb_field_content = /** @type {(inputs: Wb_Field_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

const hi_wb_field_content = /** @type {(inputs: Wb_Field_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सामग्री`)
};

const pt_br2_wb_field_content = /** @type {(inputs: Wb_Field_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo`)
};

const ko_wb_field_content = /** @type {(inputs: Wb_Field_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`내용`)
};

const fr_wb_field_content = /** @type {(inputs: Wb_Field_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu`)
};

/**
* | output |
* | --- |
* | "Content" |
*
* @param {Wb_Field_ContentInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_content = /** @type {((inputs?: Wb_Field_ContentInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_ContentInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_content(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_content(inputs)
	if (locale === "es") return es_wb_field_content(inputs)
	if (locale === "ja") return ja_wb_field_content(inputs)
	if (locale === "hi") return hi_wb_field_content(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_content(inputs)
	if (locale === "ko") return ko_wb_field_content(inputs)
	return fr_wb_field_content(inputs)
});