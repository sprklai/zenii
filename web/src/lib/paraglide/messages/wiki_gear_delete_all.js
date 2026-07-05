/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Gear_Delete_AllInputs */

const en_wiki_gear_delete_all = /** @type {(inputs: Wiki_Gear_Delete_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete all wiki content`)
};

const zh_cn2_wiki_gear_delete_all = /** @type {(inputs: Wiki_Gear_Delete_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除所有 Wiki 内容`)
};

const es_wiki_gear_delete_all = /** @type {(inputs: Wiki_Gear_Delete_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar todo el contenido del wiki`)
};

const ja_wiki_gear_delete_all = /** @type {(inputs: Wiki_Gear_Delete_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての Wiki コンテンツを削除`)
};

const hi_wiki_gear_delete_all = /** @type {(inputs: Wiki_Gear_Delete_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सभी विकी सामग्री हटाएं`)
};

const pt_br2_wiki_gear_delete_all = /** @type {(inputs: Wiki_Gear_Delete_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir todo o conteúdo do wiki`)
};

const ko_wiki_gear_delete_all = /** @type {(inputs: Wiki_Gear_Delete_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모든 위키 콘텐츠 삭제`)
};

const fr_wiki_gear_delete_all = /** @type {(inputs: Wiki_Gear_Delete_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer tout le contenu du wiki`)
};

/**
* | output |
* | --- |
* | "Delete all wiki content" |
*
* @param {Wiki_Gear_Delete_AllInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_gear_delete_all = /** @type {((inputs?: Wiki_Gear_Delete_AllInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Gear_Delete_AllInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_gear_delete_all(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_gear_delete_all(inputs)
	if (locale === "es") return es_wiki_gear_delete_all(inputs)
	if (locale === "ja") return ja_wiki_gear_delete_all(inputs)
	if (locale === "hi") return hi_wiki_gear_delete_all(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_gear_delete_all(inputs)
	if (locale === "ko") return ko_wiki_gear_delete_all(inputs)
	return fr_wiki_gear_delete_all(inputs)
});