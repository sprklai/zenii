/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Sources_Delete_ButtonInputs */

const en_wiki_sources_delete_button = /** @type {(inputs: Wiki_Sources_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

const zh_cn2_wiki_sources_delete_button = /** @type {(inputs: Wiki_Sources_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const es_wiki_sources_delete_button = /** @type {(inputs: Wiki_Sources_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const ja_wiki_sources_delete_button = /** @type {(inputs: Wiki_Sources_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

const hi_wiki_sources_delete_button = /** @type {(inputs: Wiki_Sources_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हटाएँ`)
};

const pt_br2_wiki_sources_delete_button = /** @type {(inputs: Wiki_Sources_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir`)
};

const ko_wiki_sources_delete_button = /** @type {(inputs: Wiki_Sources_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`삭제`)
};

const fr_wiki_sources_delete_button = /** @type {(inputs: Wiki_Sources_Delete_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Wiki_Sources_Delete_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sources_delete_button = /** @type {((inputs?: Wiki_Sources_Delete_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sources_Delete_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sources_delete_button(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sources_delete_button(inputs)
	if (locale === "es") return es_wiki_sources_delete_button(inputs)
	if (locale === "ja") return ja_wiki_sources_delete_button(inputs)
	if (locale === "hi") return hi_wiki_sources_delete_button(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sources_delete_button(inputs)
	if (locale === "ko") return ko_wiki_sources_delete_button(inputs)
	return fr_wiki_sources_delete_button(inputs)
});