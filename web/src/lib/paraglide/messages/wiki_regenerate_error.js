/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Regenerate_ErrorInputs */

const en_wiki_regenerate_error = /** @type {(inputs: Wiki_Regenerate_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regeneration failed`)
};

const zh_cn2_wiki_regenerate_error = /** @type {(inputs: Wiki_Regenerate_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新生成失败`)
};

const es_wiki_regenerate_error = /** @type {(inputs: Wiki_Regenerate_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error en la regeneración`)
};

const ja_wiki_regenerate_error = /** @type {(inputs: Wiki_Regenerate_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再生成に失敗しました`)
};

const hi_wiki_regenerate_error = /** @type {(inputs: Wiki_Regenerate_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पुनर्जनन विफल`)
};

const pt_br2_wiki_regenerate_error = /** @type {(inputs: Wiki_Regenerate_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha na regeneração`)
};

const ko_wiki_regenerate_error = /** @type {(inputs: Wiki_Regenerate_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`재생성 실패`)
};

const fr_wiki_regenerate_error = /** @type {(inputs: Wiki_Regenerate_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la régénération`)
};

/**
* | output |
* | --- |
* | "Regeneration failed" |
*
* @param {Wiki_Regenerate_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_regenerate_error = /** @type {((inputs?: Wiki_Regenerate_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Regenerate_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_regenerate_error(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_regenerate_error(inputs)
	if (locale === "es") return es_wiki_regenerate_error(inputs)
	if (locale === "ja") return ja_wiki_regenerate_error(inputs)
	if (locale === "hi") return hi_wiki_regenerate_error(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_regenerate_error(inputs)
	if (locale === "ko") return ko_wiki_regenerate_error(inputs)
	return fr_wiki_regenerate_error(inputs)
});