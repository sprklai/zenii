/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Sources_Delete_Confirm_TitleInputs */

const en_wiki_sources_delete_confirm_title = /** @type {(inputs: Wiki_Sources_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete source?`)
};

const zh_cn2_wiki_sources_delete_confirm_title = /** @type {(inputs: Wiki_Sources_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除来源？`)
};

const es_wiki_sources_delete_confirm_title = /** @type {(inputs: Wiki_Sources_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar fuente?`)
};

const ja_wiki_sources_delete_confirm_title = /** @type {(inputs: Wiki_Sources_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソースを削除しますか？`)
};

const hi_wiki_sources_delete_confirm_title = /** @type {(inputs: Wiki_Sources_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`स्रोत हटाएँ?`)
};

const pt_br2_wiki_sources_delete_confirm_title = /** @type {(inputs: Wiki_Sources_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir fonte?`)
};

const ko_wiki_sources_delete_confirm_title = /** @type {(inputs: Wiki_Sources_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`소스를 삭제하시겠습니까?`)
};

const fr_wiki_sources_delete_confirm_title = /** @type {(inputs: Wiki_Sources_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer la source ?`)
};

/**
* | output |
* | --- |
* | "Delete source?" |
*
* @param {Wiki_Sources_Delete_Confirm_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sources_delete_confirm_title = /** @type {((inputs?: Wiki_Sources_Delete_Confirm_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sources_Delete_Confirm_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sources_delete_confirm_title(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sources_delete_confirm_title(inputs)
	if (locale === "es") return es_wiki_sources_delete_confirm_title(inputs)
	if (locale === "ja") return ja_wiki_sources_delete_confirm_title(inputs)
	if (locale === "hi") return hi_wiki_sources_delete_confirm_title(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sources_delete_confirm_title(inputs)
	if (locale === "ko") return ko_wiki_sources_delete_confirm_title(inputs)
	return fr_wiki_sources_delete_confirm_title(inputs)
});