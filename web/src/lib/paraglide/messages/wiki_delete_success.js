/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Wiki_Delete_SuccessInputs */

const en_wiki_delete_success = /** @type {(inputs: Wiki_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deleted ${i?.count} wiki pages`)
};

const zh_cn2_wiki_delete_success = /** @type {(inputs: Wiki_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已删除 ${i?.count} 个 Wiki 页面`)
};

const es_wiki_delete_success = /** @type {(inputs: Wiki_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se eliminaron ${i?.count} páginas del wiki`)
};

const ja_wiki_delete_success = /** @type {(inputs: Wiki_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 件の Wiki ページを削除しました`)
};

const hi_wiki_delete_success = /** @type {(inputs: Wiki_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} विकी पृष्ठ हटाए गए`)
};

const pt_br2_wiki_delete_success = /** @type {(inputs: Wiki_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} páginas do wiki excluídas`)
};

const ko_wiki_delete_success = /** @type {(inputs: Wiki_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개의 위키 페이지가 삭제되었습니다`)
};

const fr_wiki_delete_success = /** @type {(inputs: Wiki_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} pages du wiki supprimées`)
};

/**
* | output |
* | --- |
* | "Deleted {count} wiki pages" |
*
* @param {Wiki_Delete_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_delete_success = /** @type {((inputs: Wiki_Delete_SuccessInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Delete_SuccessInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_delete_success(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_delete_success(inputs)
	if (locale === "es") return es_wiki_delete_success(inputs)
	if (locale === "ja") return ja_wiki_delete_success(inputs)
	if (locale === "hi") return hi_wiki_delete_success(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_delete_success(inputs)
	if (locale === "ko") return ko_wiki_delete_success(inputs)
	return fr_wiki_delete_success(inputs)
});