/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Replacement_DescriptionInputs */

const en_wb_field_replacement_description = /** @type {(inputs: Wb_Field_Replacement_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The text to insert in place of the original`)
};

const zh_cn2_wb_field_replacement_description = /** @type {(inputs: Wb_Field_Replacement_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`插入到原始文本位置的文本`)
};

const es_wb_field_replacement_description = /** @type {(inputs: Wb_Field_Replacement_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El texto a insertar en lugar del original`)
};

const ja_wb_field_replacement_description = /** @type {(inputs: Wb_Field_Replacement_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元のテキストの代わりに挿入するテキスト`)
};

const hi_wb_field_replacement_description = /** @type {(inputs: Wb_Field_Replacement_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मूल टेक्स्ट के स्थान पर डाला जाने वाला टेक्स्ट`)
};

const pt_br2_wb_field_replacement_description = /** @type {(inputs: Wb_Field_Replacement_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O texto a inserir no lugar do original`)
};

const ko_wb_field_replacement_description = /** @type {(inputs: Wb_Field_Replacement_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`원본 텍스트 대신 삽입할 텍스트`)
};

const fr_wb_field_replacement_description = /** @type {(inputs: Wb_Field_Replacement_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le texte à insérer à la place de l'original`)
};

/**
* | output |
* | --- |
* | "The text to insert in place of the original" |
*
* @param {Wb_Field_Replacement_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_replacement_description = /** @type {((inputs?: Wb_Field_Replacement_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Replacement_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_replacement_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_replacement_description(inputs)
	if (locale === "es") return es_wb_field_replacement_description(inputs)
	if (locale === "ja") return ja_wb_field_replacement_description(inputs)
	if (locale === "hi") return hi_wb_field_replacement_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_replacement_description(inputs)
	if (locale === "ko") return ko_wb_field_replacement_description(inputs)
	return fr_wb_field_replacement_description(inputs)
});