/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Gear_SyncInputs */

const en_wiki_gear_sync = /** @type {(inputs: Wiki_Gear_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync wiki files`)
};

const zh_cn2_wiki_gear_sync = /** @type {(inputs: Wiki_Gear_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同步 Wiki 文件`)
};

const es_wiki_gear_sync = /** @type {(inputs: Wiki_Gear_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizar archivos del wiki`)
};

const ja_wiki_gear_sync = /** @type {(inputs: Wiki_Gear_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki ファイルを同期`)
};

const hi_wiki_gear_sync = /** @type {(inputs: Wiki_Gear_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`विकी फ़ाइलें सिंक करें`)
};

const pt_br2_wiki_gear_sync = /** @type {(inputs: Wiki_Gear_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizar arquivos do wiki`)
};

const ko_wiki_gear_sync = /** @type {(inputs: Wiki_Gear_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`위키 파일 동기화`)
};

const fr_wiki_gear_sync = /** @type {(inputs: Wiki_Gear_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synchroniser les fichiers du wiki`)
};

/**
* | output |
* | --- |
* | "Sync wiki files" |
*
* @param {Wiki_Gear_SyncInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_gear_sync = /** @type {((inputs?: Wiki_Gear_SyncInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Gear_SyncInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_gear_sync(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_gear_sync(inputs)
	if (locale === "es") return es_wiki_gear_sync(inputs)
	if (locale === "ja") return ja_wiki_gear_sync(inputs)
	if (locale === "hi") return hi_wiki_gear_sync(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_gear_sync(inputs)
	if (locale === "ko") return ko_wiki_gear_sync(inputs)
	return fr_wiki_gear_sync(inputs)
});