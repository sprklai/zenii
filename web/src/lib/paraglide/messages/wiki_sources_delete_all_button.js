/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Sources_Delete_All_ButtonInputs */

const en_wiki_sources_delete_all_button = /** @type {(inputs: Wiki_Sources_Delete_All_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete all sources`)
};

const zh_cn2_wiki_sources_delete_all_button = /** @type {(inputs: Wiki_Sources_Delete_All_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除所有来源`)
};

const es_wiki_sources_delete_all_button = /** @type {(inputs: Wiki_Sources_Delete_All_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar todas las fuentes`)
};

const ja_wiki_sources_delete_all_button = /** @type {(inputs: Wiki_Sources_Delete_All_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのソースを削除`)
};

const hi_wiki_sources_delete_all_button = /** @type {(inputs: Wiki_Sources_Delete_All_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सभी स्रोत हटाएं`)
};

const pt_br2_wiki_sources_delete_all_button = /** @type {(inputs: Wiki_Sources_Delete_All_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir todas as fontes`)
};

const ko_wiki_sources_delete_all_button = /** @type {(inputs: Wiki_Sources_Delete_All_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모든 소스 삭제`)
};

const fr_wiki_sources_delete_all_button = /** @type {(inputs: Wiki_Sources_Delete_All_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer toutes les sources`)
};

/**
* | output |
* | --- |
* | "Delete all sources" |
*
* @param {Wiki_Sources_Delete_All_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sources_delete_all_button = /** @type {((inputs?: Wiki_Sources_Delete_All_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sources_Delete_All_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sources_delete_all_button(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sources_delete_all_button(inputs)
	if (locale === "es") return es_wiki_sources_delete_all_button(inputs)
	if (locale === "ja") return ja_wiki_sources_delete_all_button(inputs)
	if (locale === "hi") return hi_wiki_sources_delete_all_button(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sources_delete_all_button(inputs)
	if (locale === "ko") return ko_wiki_sources_delete_all_button(inputs)
	return fr_wiki_sources_delete_all_button(inputs)
});