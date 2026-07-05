/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_ReplacementInputs */

const en_wb_field_replacement = /** @type {(inputs: Wb_Field_ReplacementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replacement Text`)
};

const zh_cn2_wb_field_replacement = /** @type {(inputs: Wb_Field_ReplacementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`替换文本`)
};

const es_wb_field_replacement = /** @type {(inputs: Wb_Field_ReplacementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto de reemplazo`)
};

const ja_wb_field_replacement = /** @type {(inputs: Wb_Field_ReplacementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`置換テキスト`)
};

const hi_wb_field_replacement = /** @type {(inputs: Wb_Field_ReplacementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रतिस्थापन टेक्स्ट`)
};

const pt_br2_wb_field_replacement = /** @type {(inputs: Wb_Field_ReplacementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto de Substituição`)
};

const ko_wb_field_replacement = /** @type {(inputs: Wb_Field_ReplacementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`대체 텍스트`)
};

const fr_wb_field_replacement = /** @type {(inputs: Wb_Field_ReplacementInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texte de remplacement`)
};

/**
* | output |
* | --- |
* | "Replacement Text" |
*
* @param {Wb_Field_ReplacementInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_replacement = /** @type {((inputs?: Wb_Field_ReplacementInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_ReplacementInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_replacement(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_replacement(inputs)
	if (locale === "es") return es_wb_field_replacement(inputs)
	if (locale === "ja") return ja_wb_field_replacement(inputs)
	if (locale === "hi") return hi_wb_field_replacement(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_replacement(inputs)
	if (locale === "ko") return ko_wb_field_replacement(inputs)
	return fr_wb_field_replacement(inputs)
});