/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Ingest_ButtonInputs */

const en_wiki_ingest_button = /** @type {(inputs: Wiki_Ingest_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingest`)
};

const zh_cn2_wiki_ingest_button = /** @type {(inputs: Wiki_Ingest_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导入`)
};

const es_wiki_ingest_button = /** @type {(inputs: Wiki_Ingest_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingerir`)
};

const ja_wiki_ingest_button = /** @type {(inputs: Wiki_Ingest_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り込む`)
};

const hi_wiki_ingest_button = /** @type {(inputs: Wiki_Ingest_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इनजेस्ट करें`)
};

const pt_br2_wiki_ingest_button = /** @type {(inputs: Wiki_Ingest_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingerir`)
};

const ko_wiki_ingest_button = /** @type {(inputs: Wiki_Ingest_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`수집`)
};

const fr_wiki_ingest_button = /** @type {(inputs: Wiki_Ingest_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingérer`)
};

/**
* | output |
* | --- |
* | "Ingest" |
*
* @param {Wiki_Ingest_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_ingest_button = /** @type {((inputs?: Wiki_Ingest_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Ingest_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_ingest_button(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_ingest_button(inputs)
	if (locale === "es") return es_wiki_ingest_button(inputs)
	if (locale === "ja") return ja_wiki_ingest_button(inputs)
	if (locale === "hi") return hi_wiki_ingest_button(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_ingest_button(inputs)
	if (locale === "ko") return ko_wiki_ingest_button(inputs)
	return fr_wiki_ingest_button(inputs)
});