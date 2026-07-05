/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Prompt_SaveInputs */

const en_wiki_prompt_save = /** @type {(inputs: Wiki_Prompt_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save prompt`)
};

const zh_cn2_wiki_prompt_save = /** @type {(inputs: Wiki_Prompt_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存提示词`)
};

const es_wiki_prompt_save = /** @type {(inputs: Wiki_Prompt_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar prompt`)
};

const ja_wiki_prompt_save = /** @type {(inputs: Wiki_Prompt_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロンプトを保存`)
};

const hi_wiki_prompt_save = /** @type {(inputs: Wiki_Prompt_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रॉम्प्ट सहेजें`)
};

const pt_br2_wiki_prompt_save = /** @type {(inputs: Wiki_Prompt_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar prompt`)
};

const ko_wiki_prompt_save = /** @type {(inputs: Wiki_Prompt_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`프롬프트 저장`)
};

const fr_wiki_prompt_save = /** @type {(inputs: Wiki_Prompt_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer l'invite`)
};

/**
* | output |
* | --- |
* | "Save prompt" |
*
* @param {Wiki_Prompt_SaveInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_prompt_save = /** @type {((inputs?: Wiki_Prompt_SaveInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Prompt_SaveInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_prompt_save(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_prompt_save(inputs)
	if (locale === "es") return es_wiki_prompt_save(inputs)
	if (locale === "ja") return ja_wiki_prompt_save(inputs)
	if (locale === "hi") return hi_wiki_prompt_save(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_prompt_save(inputs)
	if (locale === "ko") return ko_wiki_prompt_save(inputs)
	return fr_wiki_prompt_save(inputs)
});