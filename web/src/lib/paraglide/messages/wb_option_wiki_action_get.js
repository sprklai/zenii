/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Wiki_Action_GetInputs */

const en_wb_option_wiki_action_get = /** @type {(inputs: Wb_Option_Wiki_Action_GetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get Page`)
};

const zh_cn2_wb_option_wiki_action_get = /** @type {(inputs: Wb_Option_Wiki_Action_GetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取页面`)
};

const es_wb_option_wiki_action_get = /** @type {(inputs: Wb_Option_Wiki_Action_GetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obtener página`)
};

const ja_wb_option_wiki_action_get = /** @type {(inputs: Wb_Option_Wiki_Action_GetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページを取得`)
};

const hi_wb_option_wiki_action_get = /** @type {(inputs: Wb_Option_Wiki_Action_GetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पृष्ठ प्राप्त करें`)
};

const pt_br2_wb_option_wiki_action_get = /** @type {(inputs: Wb_Option_Wiki_Action_GetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obter página`)
};

const ko_wb_option_wiki_action_get = /** @type {(inputs: Wb_Option_Wiki_Action_GetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`페이지 가져오기`)
};

const fr_wb_option_wiki_action_get = /** @type {(inputs: Wb_Option_Wiki_Action_GetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obtenir la page`)
};

/**
* | output |
* | --- |
* | "Get Page" |
*
* @param {Wb_Option_Wiki_Action_GetInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_wiki_action_get = /** @type {((inputs?: Wb_Option_Wiki_Action_GetInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Wiki_Action_GetInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_wiki_action_get(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_wiki_action_get(inputs)
	if (locale === "es") return es_wb_option_wiki_action_get(inputs)
	if (locale === "ja") return ja_wb_option_wiki_action_get(inputs)
	if (locale === "hi") return hi_wb_option_wiki_action_get(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_wiki_action_get(inputs)
	if (locale === "ko") return ko_wb_option_wiki_action_get(inputs)
	return fr_wb_option_wiki_action_get(inputs)
});