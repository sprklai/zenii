/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Gear_Change_PromptInputs */

const en_wiki_gear_change_prompt = /** @type {(inputs: Wiki_Gear_Change_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change ingest prompt`)
};

const zh_cn2_wiki_gear_change_prompt = /** @type {(inputs: Wiki_Gear_Change_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更改摄取提示词`)
};

const es_wiki_gear_change_prompt = /** @type {(inputs: Wiki_Gear_Change_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar prompt de ingesta`)
};

const ja_wiki_gear_change_prompt = /** @type {(inputs: Wiki_Gear_Change_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り込みプロンプトを変更`)
};

const hi_wiki_gear_change_prompt = /** @type {(inputs: Wiki_Gear_Change_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अंतर्ग्रहण प्रॉम्प्ट बदलें`)
};

const pt_br2_wiki_gear_change_prompt = /** @type {(inputs: Wiki_Gear_Change_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterar prompt de ingestão`)
};

const ko_wiki_gear_change_prompt = /** @type {(inputs: Wiki_Gear_Change_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`수집 프롬프트 변경`)
};

const fr_wiki_gear_change_prompt = /** @type {(inputs: Wiki_Gear_Change_PromptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier l'invite d'ingestion`)
};

/**
* | output |
* | --- |
* | "Change ingest prompt" |
*
* @param {Wiki_Gear_Change_PromptInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_gear_change_prompt = /** @type {((inputs?: Wiki_Gear_Change_PromptInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Gear_Change_PromptInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_gear_change_prompt(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_gear_change_prompt(inputs)
	if (locale === "es") return es_wiki_gear_change_prompt(inputs)
	if (locale === "ja") return ja_wiki_gear_change_prompt(inputs)
	if (locale === "hi") return hi_wiki_gear_change_prompt(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_gear_change_prompt(inputs)
	if (locale === "ko") return ko_wiki_gear_change_prompt(inputs)
	return fr_wiki_gear_change_prompt(inputs)
});