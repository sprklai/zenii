/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Delete_Confirm_PlaceholderInputs */

const en_wiki_delete_confirm_placeholder = /** @type {(inputs: Wiki_Delete_Confirm_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type DELETE to confirm`)
};

const zh_cn2_wiki_delete_confirm_placeholder = /** @type {(inputs: Wiki_Delete_Confirm_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`输入 DELETE 以确认`)
};

const es_wiki_delete_confirm_placeholder = /** @type {(inputs: Wiki_Delete_Confirm_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe DELETE para confirmar`)
};

const ja_wiki_delete_confirm_placeholder = /** @type {(inputs: Wiki_Delete_Confirm_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DELETE と入力して確認`)
};

const hi_wiki_delete_confirm_placeholder = /** @type {(inputs: Wiki_Delete_Confirm_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पुष्टि करने के लिए DELETE टाइप करें`)
};

const pt_br2_wiki_delete_confirm_placeholder = /** @type {(inputs: Wiki_Delete_Confirm_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite DELETE para confirmar`)
};

const ko_wiki_delete_confirm_placeholder = /** @type {(inputs: Wiki_Delete_Confirm_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`확인을 위해 DELETE를 입력하세요`)
};

const fr_wiki_delete_confirm_placeholder = /** @type {(inputs: Wiki_Delete_Confirm_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tapez DELETE pour confirmer`)
};

/**
* | output |
* | --- |
* | "Type DELETE to confirm" |
*
* @param {Wiki_Delete_Confirm_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_delete_confirm_placeholder = /** @type {((inputs?: Wiki_Delete_Confirm_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Delete_Confirm_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_delete_confirm_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_delete_confirm_placeholder(inputs)
	if (locale === "es") return es_wiki_delete_confirm_placeholder(inputs)
	if (locale === "ja") return ja_wiki_delete_confirm_placeholder(inputs)
	if (locale === "hi") return hi_wiki_delete_confirm_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_delete_confirm_placeholder(inputs)
	if (locale === "ko") return ko_wiki_delete_confirm_placeholder(inputs)
	return fr_wiki_delete_confirm_placeholder(inputs)
});