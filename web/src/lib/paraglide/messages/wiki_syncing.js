/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_SyncingInputs */

const en_wiki_syncing = /** @type {(inputs: Wiki_SyncingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Syncing...`)
};

const zh_cn2_wiki_syncing = /** @type {(inputs: Wiki_SyncingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同步中...`)
};

const es_wiki_syncing = /** @type {(inputs: Wiki_SyncingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizando...`)
};

const ja_wiki_syncing = /** @type {(inputs: Wiki_SyncingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同期中...`)
};

const hi_wiki_syncing = /** @type {(inputs: Wiki_SyncingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सिंक हो रहा है...`)
};

const pt_br2_wiki_syncing = /** @type {(inputs: Wiki_SyncingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizando...`)
};

const ko_wiki_syncing = /** @type {(inputs: Wiki_SyncingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`동기화 중...`)
};

const fr_wiki_syncing = /** @type {(inputs: Wiki_SyncingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synchronisation...`)
};

/**
* | output |
* | --- |
* | "Syncing..." |
*
* @param {Wiki_SyncingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_syncing = /** @type {((inputs?: Wiki_SyncingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_SyncingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_syncing(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_syncing(inputs)
	if (locale === "es") return es_wiki_syncing(inputs)
	if (locale === "ja") return ja_wiki_syncing(inputs)
	if (locale === "hi") return hi_wiki_syncing(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_syncing(inputs)
	if (locale === "ko") return ko_wiki_syncing(inputs)
	return fr_wiki_syncing(inputs)
});