/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Original_PlaceholderInputs */

const en_wb_field_original_placeholder = /** @type {(inputs: Wb_Field_Original_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exact text to replace`)
};

const zh_cn2_wb_field_original_placeholder = /** @type {(inputs: Wb_Field_Original_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要替换的精确文本`)
};

const es_wb_field_original_placeholder = /** @type {(inputs: Wb_Field_Original_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto exacto a reemplazar`)
};

const ja_wb_field_original_placeholder = /** @type {(inputs: Wb_Field_Original_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`置換する正確なテキスト`)
};

const hi_wb_field_original_placeholder = /** @type {(inputs: Wb_Field_Original_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रतिस्थापित किया जाने वाला सटीक टेक्स्ट`)
};

const pt_br2_wb_field_original_placeholder = /** @type {(inputs: Wb_Field_Original_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto exato a substituir`)
};

const ko_wb_field_original_placeholder = /** @type {(inputs: Wb_Field_Original_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`교체할 정확한 텍스트`)
};

const fr_wb_field_original_placeholder = /** @type {(inputs: Wb_Field_Original_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texte exact à remplacer`)
};

/**
* | output |
* | --- |
* | "Exact text to replace" |
*
* @param {Wb_Field_Original_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_original_placeholder = /** @type {((inputs?: Wb_Field_Original_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Original_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_original_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_original_placeholder(inputs)
	if (locale === "es") return es_wb_field_original_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_original_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_original_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_original_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_original_placeholder(inputs)
	return fr_wb_field_original_placeholder(inputs)
});