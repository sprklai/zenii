/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Sync_ButtonInputs */

const en_wiki_sync_button = /** @type {(inputs: Wiki_Sync_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync to Memory`)
};

const zh_cn2_wiki_sync_button = /** @type {(inputs: Wiki_Sync_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同步到记忆`)
};

const es_wiki_sync_button = /** @type {(inputs: Wiki_Sync_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizar con memoria`)
};

const ja_wiki_sync_button = /** @type {(inputs: Wiki_Sync_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリに同期`)
};

const hi_wiki_sync_button = /** @type {(inputs: Wiki_Sync_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी से सिंक करें`)
};

const pt_br2_wiki_sync_button = /** @type {(inputs: Wiki_Sync_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizar com memória`)
};

const ko_wiki_sync_button = /** @type {(inputs: Wiki_Sync_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리에 동기화`)
};

const fr_wiki_sync_button = /** @type {(inputs: Wiki_Sync_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synchroniser avec la mémoire`)
};

/**
* | output |
* | --- |
* | "Sync to Memory" |
*
* @param {Wiki_Sync_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sync_button = /** @type {((inputs?: Wiki_Sync_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sync_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sync_button(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sync_button(inputs)
	if (locale === "es") return es_wiki_sync_button(inputs)
	if (locale === "ja") return ja_wiki_sync_button(inputs)
	if (locale === "hi") return hi_wiki_sync_button(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sync_button(inputs)
	if (locale === "ko") return ko_wiki_sync_button(inputs)
	return fr_wiki_sync_button(inputs)
});