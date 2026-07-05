/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Delete_Confirm_ButtonInputs */

const en_wiki_delete_confirm_button = /** @type {(inputs: Wiki_Delete_Confirm_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete all`)
};

const zh_cn2_wiki_delete_confirm_button = /** @type {(inputs: Wiki_Delete_Confirm_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部删除`)
};

const es_wiki_delete_confirm_button = /** @type {(inputs: Wiki_Delete_Confirm_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar todo`)
};

const ja_wiki_delete_confirm_button = /** @type {(inputs: Wiki_Delete_Confirm_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて削除`)
};

const hi_wiki_delete_confirm_button = /** @type {(inputs: Wiki_Delete_Confirm_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सभी हटाएं`)
};

const pt_br2_wiki_delete_confirm_button = /** @type {(inputs: Wiki_Delete_Confirm_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir tudo`)
};

const ko_wiki_delete_confirm_button = /** @type {(inputs: Wiki_Delete_Confirm_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모두 삭제`)
};

const fr_wiki_delete_confirm_button = /** @type {(inputs: Wiki_Delete_Confirm_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout supprimer`)
};

/**
* | output |
* | --- |
* | "Delete all" |
*
* @param {Wiki_Delete_Confirm_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_delete_confirm_button = /** @type {((inputs?: Wiki_Delete_Confirm_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Delete_Confirm_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_delete_confirm_button(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_delete_confirm_button(inputs)
	if (locale === "es") return es_wiki_delete_confirm_button(inputs)
	if (locale === "ja") return ja_wiki_delete_confirm_button(inputs)
	if (locale === "hi") return hi_wiki_delete_confirm_button(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_delete_confirm_button(inputs)
	if (locale === "ko") return ko_wiki_delete_confirm_button(inputs)
	return fr_wiki_delete_confirm_button(inputs)
});