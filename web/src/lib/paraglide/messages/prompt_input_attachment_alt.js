/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Prompt_Input_Attachment_AltInputs */

const en_prompt_input_attachment_alt = /** @type {(inputs: Prompt_Input_Attachment_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`attachment`)
};

const zh_cn2_prompt_input_attachment_alt = /** @type {(inputs: Prompt_Input_Attachment_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`附件`)
};

const es_prompt_input_attachment_alt = /** @type {(inputs: Prompt_Input_Attachment_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`adjunto`)
};

const ja_prompt_input_attachment_alt = /** @type {(inputs: Prompt_Input_Attachment_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添付ファイル`)
};

const hi_prompt_input_attachment_alt = /** @type {(inputs: Prompt_Input_Attachment_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अनुलग्नक`)
};

const pt_br2_prompt_input_attachment_alt = /** @type {(inputs: Prompt_Input_Attachment_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`anexo`)
};

const ko_prompt_input_attachment_alt = /** @type {(inputs: Prompt_Input_Attachment_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`첨부파일`)
};

const fr_prompt_input_attachment_alt = /** @type {(inputs: Prompt_Input_Attachment_AltInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`pièce jointe`)
};

/**
* | output |
* | --- |
* | "attachment" |
*
* @param {Prompt_Input_Attachment_AltInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const prompt_input_attachment_alt = /** @type {((inputs?: Prompt_Input_Attachment_AltInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Prompt_Input_Attachment_AltInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_prompt_input_attachment_alt(inputs)
	if (locale === "zh-CN") return zh_cn2_prompt_input_attachment_alt(inputs)
	if (locale === "es") return es_prompt_input_attachment_alt(inputs)
	if (locale === "ja") return ja_prompt_input_attachment_alt(inputs)
	if (locale === "hi") return hi_prompt_input_attachment_alt(inputs)
	if (locale === "pt-BR") return pt_br2_prompt_input_attachment_alt(inputs)
	if (locale === "ko") return ko_prompt_input_attachment_alt(inputs)
	return fr_prompt_input_attachment_alt(inputs)
});