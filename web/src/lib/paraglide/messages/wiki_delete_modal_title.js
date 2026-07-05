/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Delete_Modal_TitleInputs */

const en_wiki_delete_modal_title = /** @type {(inputs: Wiki_Delete_Modal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete all wiki content?`)
};

const zh_cn2_wiki_delete_modal_title = /** @type {(inputs: Wiki_Delete_Modal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除所有 Wiki 内容？`)
};

const es_wiki_delete_modal_title = /** @type {(inputs: Wiki_Delete_Modal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar todo el contenido del wiki?`)
};

const ja_wiki_delete_modal_title = /** @type {(inputs: Wiki_Delete_Modal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての Wiki コンテンツを削除しますか？`)
};

const hi_wiki_delete_modal_title = /** @type {(inputs: Wiki_Delete_Modal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सभी विकी सामग्री हटाएं?`)
};

const pt_br2_wiki_delete_modal_title = /** @type {(inputs: Wiki_Delete_Modal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir todo o conteúdo do wiki?`)
};

const ko_wiki_delete_modal_title = /** @type {(inputs: Wiki_Delete_Modal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모든 위키 콘텐츠를 삭제하시겠습니까?`)
};

const fr_wiki_delete_modal_title = /** @type {(inputs: Wiki_Delete_Modal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer tout le contenu du wiki ?`)
};

/**
* | output |
* | --- |
* | "Delete all wiki content?" |
*
* @param {Wiki_Delete_Modal_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_delete_modal_title = /** @type {((inputs?: Wiki_Delete_Modal_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Delete_Modal_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_delete_modal_title(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_delete_modal_title(inputs)
	if (locale === "es") return es_wiki_delete_modal_title(inputs)
	if (locale === "ja") return ja_wiki_delete_modal_title(inputs)
	if (locale === "hi") return hi_wiki_delete_modal_title(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_delete_modal_title(inputs)
	if (locale === "ko") return ko_wiki_delete_modal_title(inputs)
	return fr_wiki_delete_modal_title(inputs)
});