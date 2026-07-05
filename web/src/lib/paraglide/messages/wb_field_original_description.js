/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Original_DescriptionInputs */

const en_wb_field_original_description = /** @type {(inputs: Wb_Field_Original_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The exact text that will be replaced`)
};

const zh_cn2_wb_field_original_description = /** @type {(inputs: Wb_Field_Original_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将被替换的精确文本`)
};

const es_wb_field_original_description = /** @type {(inputs: Wb_Field_Original_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El texto exacto que será reemplazado`)
};

const ja_wb_field_original_description = /** @type {(inputs: Wb_Field_Original_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`置換される正確なテキスト`)
};

const hi_wb_field_original_description = /** @type {(inputs: Wb_Field_Original_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वह सटीक टेक्स्ट जो प्रतिस्थापित किया जाएगा`)
};

const pt_br2_wb_field_original_description = /** @type {(inputs: Wb_Field_Original_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O texto exato que será substituído`)
};

const ko_wb_field_original_description = /** @type {(inputs: Wb_Field_Original_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`교체될 정확한 텍스트`)
};

const fr_wb_field_original_description = /** @type {(inputs: Wb_Field_Original_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le texte exact qui sera remplacé`)
};

/**
* | output |
* | --- |
* | "The exact text that will be replaced" |
*
* @param {Wb_Field_Original_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_original_description = /** @type {((inputs?: Wb_Field_Original_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Original_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_original_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_original_description(inputs)
	if (locale === "es") return es_wb_field_original_description(inputs)
	if (locale === "ja") return ja_wb_field_original_description(inputs)
	if (locale === "hi") return hi_wb_field_original_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_original_description(inputs)
	if (locale === "ko") return ko_wb_field_original_description(inputs)
	return fr_wb_field_original_description(inputs)
});