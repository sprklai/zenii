/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Prompt_Input_Unknown_FileInputs */

const en_prompt_input_unknown_file = /** @type {(inputs: Prompt_Input_Unknown_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown file`)
};

const zh_cn2_prompt_input_unknown_file = /** @type {(inputs: Prompt_Input_Unknown_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知文件`)
};

const es_prompt_input_unknown_file = /** @type {(inputs: Prompt_Input_Unknown_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo desconocido`)
};

const ja_prompt_input_unknown_file = /** @type {(inputs: Prompt_Input_Unknown_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不明なファイル`)
};

const hi_prompt_input_unknown_file = /** @type {(inputs: Prompt_Input_Unknown_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अज्ञात फ़ाइल`)
};

const pt_br2_prompt_input_unknown_file = /** @type {(inputs: Prompt_Input_Unknown_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo desconhecido`)
};

const ko_prompt_input_unknown_file = /** @type {(inputs: Prompt_Input_Unknown_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알 수 없는 파일`)
};

const fr_prompt_input_unknown_file = /** @type {(inputs: Prompt_Input_Unknown_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier inconnu`)
};

/**
* | output |
* | --- |
* | "Unknown file" |
*
* @param {Prompt_Input_Unknown_FileInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const prompt_input_unknown_file = /** @type {((inputs?: Prompt_Input_Unknown_FileInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Prompt_Input_Unknown_FileInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_prompt_input_unknown_file(inputs)
	if (locale === "zh-CN") return zh_cn2_prompt_input_unknown_file(inputs)
	if (locale === "es") return es_prompt_input_unknown_file(inputs)
	if (locale === "ja") return ja_prompt_input_unknown_file(inputs)
	if (locale === "hi") return hi_prompt_input_unknown_file(inputs)
	if (locale === "pt-BR") return pt_br2_prompt_input_unknown_file(inputs)
	if (locale === "ko") return ko_prompt_input_unknown_file(inputs)
	return fr_prompt_input_unknown_file(inputs)
});