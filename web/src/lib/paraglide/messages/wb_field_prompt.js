/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_PromptInputs */

const en_wb_field_prompt = /** @type {(inputs: Wb_Field_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt`)
};

const zh_cn2_wb_field_prompt = /** @type {(inputs: Wb_Field_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提示词`)
};

const es_wb_field_prompt = /** @type {(inputs: Wb_Field_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt`)
};

const ja_wb_field_prompt = /** @type {(inputs: Wb_Field_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロンプト`)
};

const hi_wb_field_prompt = /** @type {(inputs: Wb_Field_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रॉम्प्ट`)
};

const pt_br2_wb_field_prompt = /** @type {(inputs: Wb_Field_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt`)
};

const ko_wb_field_prompt = /** @type {(inputs: Wb_Field_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`프롬프트`)
};

const fr_wb_field_prompt = /** @type {(inputs: Wb_Field_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite`)
};

/**
* | output |
* | --- |
* | "Prompt" |
*
* @param {Wb_Field_PromptInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_prompt = /** @type {((inputs?: Wb_Field_PromptInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_PromptInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_prompt(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_prompt(inputs)
	if (locale === "es") return es_wb_field_prompt(inputs)
	if (locale === "ja") return ja_wb_field_prompt(inputs)
	if (locale === "hi") return hi_wb_field_prompt(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_prompt(inputs)
	if (locale === "ko") return ko_wb_field_prompt(inputs)
	return fr_wb_field_prompt(inputs)
});