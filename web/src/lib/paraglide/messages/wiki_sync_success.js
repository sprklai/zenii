/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Wiki_Sync_SuccessInputs */

const en_wiki_sync_success = /** @type {(inputs: Wiki_Sync_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} pages synced to memory`)
};

const zh_cn2_wiki_sync_success = /** @type {(inputs: Wiki_Sync_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已将 ${i?.count} 个页面同步到记忆`)
};

const es_wiki_sync_success = /** @type {(inputs: Wiki_Sync_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} páginas sincronizadas con memoria`)
};

const ja_wiki_sync_success = /** @type {(inputs: Wiki_Sync_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}ページをメモリに同期しました`)
};

const hi_wiki_sync_success = /** @type {(inputs: Wiki_Sync_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} पृष्ठ मेमोरी में सिंक हुए`)
};

const pt_br2_wiki_sync_success = /** @type {(inputs: Wiki_Sync_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} páginas sincronizadas com a memória`)
};

const ko_wiki_sync_success = /** @type {(inputs: Wiki_Sync_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개 페이지를 메모리에 동기화했습니다`)
};

const fr_wiki_sync_success = /** @type {(inputs: Wiki_Sync_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} pages synchronisées avec la mémoire`)
};

/**
* | output |
* | --- |
* | "{count} pages synced to memory" |
*
* @param {Wiki_Sync_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sync_success = /** @type {((inputs: Wiki_Sync_SuccessInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sync_SuccessInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sync_success(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sync_success(inputs)
	if (locale === "es") return es_wiki_sync_success(inputs)
	if (locale === "ja") return ja_wiki_sync_success(inputs)
	if (locale === "hi") return hi_wiki_sync_success(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sync_success(inputs)
	if (locale === "ko") return ko_wiki_sync_success(inputs)
	return fr_wiki_sync_success(inputs)
});