/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Prompt_SavedInputs */

const en_wiki_prompt_saved = /** @type {(inputs: Wiki_Prompt_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt saved`)
};

const zh_cn2_wiki_prompt_saved = /** @type {(inputs: Wiki_Prompt_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提示词已保存`)
};

const es_wiki_prompt_saved = /** @type {(inputs: Wiki_Prompt_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt guardado`)
};

const ja_wiki_prompt_saved = /** @type {(inputs: Wiki_Prompt_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロンプトを保存しました`)
};

const hi_wiki_prompt_saved = /** @type {(inputs: Wiki_Prompt_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रॉम्प्ट सहेजा गया`)
};

const pt_br2_wiki_prompt_saved = /** @type {(inputs: Wiki_Prompt_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prompt salvo`)
};

const ko_wiki_prompt_saved = /** @type {(inputs: Wiki_Prompt_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`프롬프트가 저장되었습니다`)
};

const fr_wiki_prompt_saved = /** @type {(inputs: Wiki_Prompt_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite enregistrée`)
};

/**
* | output |
* | --- |
* | "Prompt saved" |
*
* @param {Wiki_Prompt_SavedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_prompt_saved = /** @type {((inputs?: Wiki_Prompt_SavedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Prompt_SavedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_prompt_saved(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_prompt_saved(inputs)
	if (locale === "es") return es_wiki_prompt_saved(inputs)
	if (locale === "ja") return ja_wiki_prompt_saved(inputs)
	if (locale === "hi") return hi_wiki_prompt_saved(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_prompt_saved(inputs)
	if (locale === "ko") return ko_wiki_prompt_saved(inputs)
	return fr_wiki_prompt_saved(inputs)
});