/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Prompt_Input_Add_AttachmentsInputs */

const en_prompt_input_add_attachments = /** @type {(inputs: Prompt_Input_Add_AttachmentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add photos or files`)
};

const zh_cn2_prompt_input_add_attachments = /** @type {(inputs: Prompt_Input_Add_AttachmentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加照片或文件`)
};

const es_prompt_input_add_attachments = /** @type {(inputs: Prompt_Input_Add_AttachmentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agregar fotos o archivos`)
};

const ja_prompt_input_add_attachments = /** @type {(inputs: Prompt_Input_Add_AttachmentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写真またはファイルを追加`)
};

const hi_prompt_input_add_attachments = /** @type {(inputs: Prompt_Input_Add_AttachmentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ोटो या फ़ाइलें जोड़ें`)
};

const pt_br2_prompt_input_add_attachments = /** @type {(inputs: Prompt_Input_Add_AttachmentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar fotos ou arquivos`)
};

const ko_prompt_input_add_attachments = /** @type {(inputs: Prompt_Input_Add_AttachmentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`사진 또는 파일 추가`)
};

const fr_prompt_input_add_attachments = /** @type {(inputs: Prompt_Input_Add_AttachmentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter des photos ou fichiers`)
};

/**
* | output |
* | --- |
* | "Add photos or files" |
*
* @param {Prompt_Input_Add_AttachmentsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const prompt_input_add_attachments = /** @type {((inputs?: Prompt_Input_Add_AttachmentsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Prompt_Input_Add_AttachmentsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_prompt_input_add_attachments(inputs)
	if (locale === "zh-CN") return zh_cn2_prompt_input_add_attachments(inputs)
	if (locale === "es") return es_prompt_input_add_attachments(inputs)
	if (locale === "ja") return ja_prompt_input_add_attachments(inputs)
	if (locale === "hi") return hi_prompt_input_add_attachments(inputs)
	if (locale === "pt-BR") return pt_br2_prompt_input_add_attachments(inputs)
	if (locale === "ko") return ko_prompt_input_add_attachments(inputs)
	return fr_prompt_input_add_attachments(inputs)
});