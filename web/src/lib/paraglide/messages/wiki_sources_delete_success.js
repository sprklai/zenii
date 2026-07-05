/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ filename: NonNullable<unknown> }} Wiki_Sources_Delete_SuccessInputs */

const en_wiki_sources_delete_success = /** @type {(inputs: Wiki_Sources_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deleted "${i?.filename}"`)
};

const zh_cn2_wiki_sources_delete_success = /** @type {(inputs: Wiki_Sources_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已删除 "${i?.filename}"`)
};

const es_wiki_sources_delete_success = /** @type {(inputs: Wiki_Sources_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Eliminado "${i?.filename}"`)
};

const ja_wiki_sources_delete_success = /** @type {(inputs: Wiki_Sources_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.filename}"を削除しました`)
};

const hi_wiki_sources_delete_success = /** @type {(inputs: Wiki_Sources_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.filename}" हटा दिया गया`)
};

const pt_br2_wiki_sources_delete_success = /** @type {(inputs: Wiki_Sources_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.filename}" excluído`)
};

const ko_wiki_sources_delete_success = /** @type {(inputs: Wiki_Sources_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.filename}"이(가) 삭제되었습니다`)
};

const fr_wiki_sources_delete_success = /** @type {(inputs: Wiki_Sources_Delete_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.filename}" supprimé`)
};

/**
* | output |
* | --- |
* | "Deleted \"{filename}\"" |
*
* @param {Wiki_Sources_Delete_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sources_delete_success = /** @type {((inputs: Wiki_Sources_Delete_SuccessInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sources_Delete_SuccessInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sources_delete_success(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sources_delete_success(inputs)
	if (locale === "es") return es_wiki_sources_delete_success(inputs)
	if (locale === "ja") return ja_wiki_sources_delete_success(inputs)
	if (locale === "hi") return hi_wiki_sources_delete_success(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sources_delete_success(inputs)
	if (locale === "ko") return ko_wiki_sources_delete_success(inputs)
	return fr_wiki_sources_delete_success(inputs)
});