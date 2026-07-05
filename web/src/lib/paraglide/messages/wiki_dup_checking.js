/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Dup_CheckingInputs */

const en_wiki_dup_checking = /** @type {(inputs: Wiki_Dup_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking...`)
};

const zh_cn2_wiki_dup_checking = /** @type {(inputs: Wiki_Dup_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Checking...`)
};

const es_wiki_dup_checking = /** @type {(inputs: Wiki_Dup_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificando...`)
};

const ja_wiki_dup_checking = /** @type {(inputs: Wiki_Dup_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認中...`)
};

const hi_wiki_dup_checking = /** @type {(inputs: Wiki_Dup_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जाँच हो रही है...`)
};

const pt_br2_wiki_dup_checking = /** @type {(inputs: Wiki_Dup_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Checking...`)
};

const ko_wiki_dup_checking = /** @type {(inputs: Wiki_Dup_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`[EN] Checking...`)
};

const fr_wiki_dup_checking = /** @type {(inputs: Wiki_Dup_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérification...`)
};

/**
* | output |
* | --- |
* | "Checking..." |
*
* @param {Wiki_Dup_CheckingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_dup_checking = /** @type {((inputs?: Wiki_Dup_CheckingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Dup_CheckingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_dup_checking(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_dup_checking(inputs)
	if (locale === "es") return es_wiki_dup_checking(inputs)
	if (locale === "ja") return ja_wiki_dup_checking(inputs)
	if (locale === "hi") return hi_wiki_dup_checking(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_dup_checking(inputs)
	if (locale === "ko") return ko_wiki_dup_checking(inputs)
	return fr_wiki_dup_checking(inputs)
});