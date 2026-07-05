/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Query_Save_LabelInputs */

const en_wiki_query_save_label = /** @type {(inputs: Wiki_Query_Save_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save as wiki page`)
};

const zh_cn2_wiki_query_save_label = /** @type {(inputs: Wiki_Query_Save_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存为维基页面`)
};

const es_wiki_query_save_label = /** @type {(inputs: Wiki_Query_Save_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar como página wiki`)
};

const ja_wiki_query_save_label = /** @type {(inputs: Wiki_Query_Save_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウィキページとして保存`)
};

const hi_wiki_query_save_label = /** @type {(inputs: Wiki_Query_Save_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`विकि पृष्ठ के रूप में सहेजें`)
};

const pt_br2_wiki_query_save_label = /** @type {(inputs: Wiki_Query_Save_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar como página wiki`)
};

const ko_wiki_query_save_label = /** @type {(inputs: Wiki_Query_Save_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`위키 페이지로 저장`)
};

const fr_wiki_query_save_label = /** @type {(inputs: Wiki_Query_Save_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer comme page wiki`)
};

/**
* | output |
* | --- |
* | "Save as wiki page" |
*
* @param {Wiki_Query_Save_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_query_save_label = /** @type {((inputs?: Wiki_Query_Save_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Query_Save_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_query_save_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_query_save_label(inputs)
	if (locale === "es") return es_wiki_query_save_label(inputs)
	if (locale === "ja") return ja_wiki_query_save_label(inputs)
	if (locale === "hi") return hi_wiki_query_save_label(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_query_save_label(inputs)
	if (locale === "ko") return ko_wiki_query_save_label(inputs)
	return fr_wiki_query_save_label(inputs)
});