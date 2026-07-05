/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_TagsInputs */

const en_wb_field_tags = /** @type {(inputs: Wb_Field_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const zh_cn2_wb_field_tags = /** @type {(inputs: Wb_Field_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const es_wb_field_tags = /** @type {(inputs: Wb_Field_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiquetas`)
};

const ja_wb_field_tags = /** @type {(inputs: Wb_Field_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグ`)
};

const hi_wb_field_tags = /** @type {(inputs: Wb_Field_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`टैग`)
};

const pt_br2_wb_field_tags = /** @type {(inputs: Wb_Field_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiquetas`)
};

const ko_wb_field_tags = /** @type {(inputs: Wb_Field_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`태그`)
};

const fr_wb_field_tags = /** @type {(inputs: Wb_Field_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étiquettes`)
};

/**
* | output |
* | --- |
* | "Tags" |
*
* @param {Wb_Field_TagsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_tags = /** @type {((inputs?: Wb_Field_TagsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_TagsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_tags(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_tags(inputs)
	if (locale === "es") return es_wb_field_tags(inputs)
	if (locale === "ja") return ja_wb_field_tags(inputs)
	if (locale === "hi") return hi_wb_field_tags(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_tags(inputs)
	if (locale === "ko") return ko_wb_field_tags(inputs)
	return fr_wb_field_tags(inputs)
});