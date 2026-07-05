/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_RegeneratingInputs */

const en_wiki_regenerating = /** @type {(inputs: Wiki_RegeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerating...`)
};

const zh_cn2_wiki_regenerating = /** @type {(inputs: Wiki_RegeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新生成中...`)
};

const es_wiki_regenerating = /** @type {(inputs: Wiki_RegeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerando...`)
};

const ja_wiki_regenerating = /** @type {(inputs: Wiki_RegeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再生成中...`)
};

const hi_wiki_regenerating = /** @type {(inputs: Wiki_RegeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पुनर्जनित हो रहा है...`)
};

const pt_br2_wiki_regenerating = /** @type {(inputs: Wiki_RegeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regenerando...`)
};

const ko_wiki_regenerating = /** @type {(inputs: Wiki_RegeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`재생성 중...`)
};

const fr_wiki_regenerating = /** @type {(inputs: Wiki_RegeneratingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Régénération...`)
};

/**
* | output |
* | --- |
* | "Regenerating..." |
*
* @param {Wiki_RegeneratingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_regenerating = /** @type {((inputs?: Wiki_RegeneratingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_RegeneratingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_regenerating(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_regenerating(inputs)
	if (locale === "es") return es_wiki_regenerating(inputs)
	if (locale === "ja") return ja_wiki_regenerating(inputs)
	if (locale === "hi") return hi_wiki_regenerating(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_regenerating(inputs)
	if (locale === "ko") return ko_wiki_regenerating(inputs)
	return fr_wiki_regenerating(inputs)
});