/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Regenerate_ButtonInputs */

const en_wiki_regenerate_button = /** @type {(inputs: Wiki_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerate All`)
};

const zh_cn2_wiki_regenerate_button = /** @type {(inputs: Wiki_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新生成全部`)
};

const es_wiki_regenerate_button = /** @type {(inputs: Wiki_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerar todo`)
};

const ja_wiki_regenerate_button = /** @type {(inputs: Wiki_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて再生成`)
};

const hi_wiki_regenerate_button = /** @type {(inputs: Wiki_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सभी पुनर्जनित करें`)
};

const pt_br2_wiki_regenerate_button = /** @type {(inputs: Wiki_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerar tudo`)
};

const ko_wiki_regenerate_button = /** @type {(inputs: Wiki_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모두 재생성`)
};

const fr_wiki_regenerate_button = /** @type {(inputs: Wiki_Regenerate_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout régénérer`)
};

/**
* | output |
* | --- |
* | "Regenerate All" |
*
* @param {Wiki_Regenerate_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_regenerate_button = /** @type {((inputs?: Wiki_Regenerate_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Regenerate_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_regenerate_button(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_regenerate_button(inputs)
	if (locale === "es") return es_wiki_regenerate_button(inputs)
	if (locale === "ja") return ja_wiki_regenerate_button(inputs)
	if (locale === "hi") return hi_wiki_regenerate_button(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_regenerate_button(inputs)
	if (locale === "ko") return ko_wiki_regenerate_button(inputs)
	return fr_wiki_regenerate_button(inputs)
});