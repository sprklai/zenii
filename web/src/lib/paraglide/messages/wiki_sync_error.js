/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Sync_ErrorInputs */

const en_wiki_sync_error = /** @type {(inputs: Wiki_Sync_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync failed`)
};

const zh_cn2_wiki_sync_error = /** @type {(inputs: Wiki_Sync_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同步失败`)
};

const es_wiki_sync_error = /** @type {(inputs: Wiki_Sync_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error de sincronización`)
};

const ja_wiki_sync_error = /** @type {(inputs: Wiki_Sync_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同期に失敗しました`)
};

const hi_wiki_sync_error = /** @type {(inputs: Wiki_Sync_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सिंक विफल`)
};

const pt_br2_wiki_sync_error = /** @type {(inputs: Wiki_Sync_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha na sincronização`)
};

const ko_wiki_sync_error = /** @type {(inputs: Wiki_Sync_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`동기화 실패`)
};

const fr_wiki_sync_error = /** @type {(inputs: Wiki_Sync_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la synchronisation`)
};

/**
* | output |
* | --- |
* | "Sync failed" |
*
* @param {Wiki_Sync_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sync_error = /** @type {((inputs?: Wiki_Sync_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sync_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sync_error(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sync_error(inputs)
	if (locale === "es") return es_wiki_sync_error(inputs)
	if (locale === "ja") return ja_wiki_sync_error(inputs)
	if (locale === "hi") return hi_wiki_sync_error(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sync_error(inputs)
	if (locale === "ko") return ko_wiki_sync_error(inputs)
	return fr_wiki_sync_error(inputs)
});