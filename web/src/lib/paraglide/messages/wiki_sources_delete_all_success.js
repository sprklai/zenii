/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Wiki_Sources_Delete_All_SuccessInputs */

const en_wiki_sources_delete_all_success = /** @type {(inputs: Wiki_Sources_Delete_All_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deleted ${i?.count} source files`)
};

const zh_cn2_wiki_sources_delete_all_success = /** @type {(inputs: Wiki_Sources_Delete_All_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已删除 ${i?.count} 个源文件`)
};

const es_wiki_sources_delete_all_success = /** @type {(inputs: Wiki_Sources_Delete_All_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se eliminaron ${i?.count} archivos fuente`)
};

const ja_wiki_sources_delete_all_success = /** @type {(inputs: Wiki_Sources_Delete_All_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 件のソースファイルを削除しました`)
};

const hi_wiki_sources_delete_all_success = /** @type {(inputs: Wiki_Sources_Delete_All_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} स्रोत फ़ाइलें हटाई गईं`)
};

const pt_br2_wiki_sources_delete_all_success = /** @type {(inputs: Wiki_Sources_Delete_All_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} arquivos de origem excluídos`)
};

const ko_wiki_sources_delete_all_success = /** @type {(inputs: Wiki_Sources_Delete_All_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개의 소스 파일이 삭제되었습니다`)
};

const fr_wiki_sources_delete_all_success = /** @type {(inputs: Wiki_Sources_Delete_All_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} fichiers sources supprimés`)
};

/**
* | output |
* | --- |
* | "Deleted {count} source files" |
*
* @param {Wiki_Sources_Delete_All_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sources_delete_all_success = /** @type {((inputs: Wiki_Sources_Delete_All_SuccessInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sources_Delete_All_SuccessInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sources_delete_all_success(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sources_delete_all_success(inputs)
	if (locale === "es") return es_wiki_sources_delete_all_success(inputs)
	if (locale === "ja") return ja_wiki_sources_delete_all_success(inputs)
	if (locale === "hi") return hi_wiki_sources_delete_all_success(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sources_delete_all_success(inputs)
	if (locale === "ko") return ko_wiki_sources_delete_all_success(inputs)
	return fr_wiki_sources_delete_all_success(inputs)
});