/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Recursive_DescriptionInputs */

const en_wb_field_recursive_description = /** @type {(inputs: Wb_Field_Recursive_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Whether to recurse into subdirectories`)
};

const zh_cn2_wb_field_recursive_description = /** @type {(inputs: Wb_Field_Recursive_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`是否递归进入子目录`)
};

const es_wb_field_recursive_description = /** @type {(inputs: Wb_Field_Recursive_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si se debe recursar en subdirectorios`)
};

const ja_wb_field_recursive_description = /** @type {(inputs: Wb_Field_Recursive_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サブディレクトリに再帰するかどうか`)
};

const hi_wb_field_recursive_description = /** @type {(inputs: Wb_Field_Recursive_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`उपडायरेक्टरी में पुनरावर्ती रूप से जाना है या नहीं`)
};

const pt_br2_wb_field_recursive_description = /** @type {(inputs: Wb_Field_Recursive_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se deve recursão em subdiretórios`)
};

const ko_wb_field_recursive_description = /** @type {(inputs: Wb_Field_Recursive_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`하위 디렉토리로 재귀할지 여부`)
};

const fr_wb_field_recursive_description = /** @type {(inputs: Wb_Field_Recursive_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Récurser dans les sous-répertoires`)
};

/**
* | output |
* | --- |
* | "Whether to recurse into subdirectories" |
*
* @param {Wb_Field_Recursive_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_recursive_description = /** @type {((inputs?: Wb_Field_Recursive_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Recursive_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_recursive_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_recursive_description(inputs)
	if (locale === "es") return es_wb_field_recursive_description(inputs)
	if (locale === "ja") return ja_wb_field_recursive_description(inputs)
	if (locale === "hi") return hi_wb_field_recursive_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_recursive_description(inputs)
	if (locale === "ko") return ko_wb_field_recursive_description(inputs)
	return fr_wb_field_recursive_description(inputs)
});