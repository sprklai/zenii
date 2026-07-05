/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Sources_Delete_ErrorInputs */

const en_wiki_sources_delete_error = /** @type {(inputs: Wiki_Sources_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete failed`)
};

const zh_cn2_wiki_sources_delete_error = /** @type {(inputs: Wiki_Sources_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除失败`)
};

const es_wiki_sources_delete_error = /** @type {(inputs: Wiki_Sources_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al eliminar`)
};

const ja_wiki_sources_delete_error = /** @type {(inputs: Wiki_Sources_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除に失敗しました`)
};

const hi_wiki_sources_delete_error = /** @type {(inputs: Wiki_Sources_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हटाना विफल`)
};

const pt_br2_wiki_sources_delete_error = /** @type {(inputs: Wiki_Sources_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao excluir`)
};

const ko_wiki_sources_delete_error = /** @type {(inputs: Wiki_Sources_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`삭제 실패`)
};

const fr_wiki_sources_delete_error = /** @type {(inputs: Wiki_Sources_Delete_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la suppression`)
};

/**
* | output |
* | --- |
* | "Delete failed" |
*
* @param {Wiki_Sources_Delete_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sources_delete_error = /** @type {((inputs?: Wiki_Sources_Delete_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sources_Delete_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sources_delete_error(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sources_delete_error(inputs)
	if (locale === "es") return es_wiki_sources_delete_error(inputs)
	if (locale === "ja") return ja_wiki_sources_delete_error(inputs)
	if (locale === "hi") return hi_wiki_sources_delete_error(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sources_delete_error(inputs)
	if (locale === "ko") return ko_wiki_sources_delete_error(inputs)
	return fr_wiki_sources_delete_error(inputs)
});