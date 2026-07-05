/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Ingest_Filename_PlaceholderInputs */

const en_wiki_ingest_filename_placeholder = /** @type {(inputs: Wiki_Ingest_Filename_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. concepts/my-topic.md`)
};

const zh_cn2_wiki_ingest_filename_placeholder = /** @type {(inputs: Wiki_Ingest_Filename_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如 concepts/my-topic.md`)
};

const es_wiki_ingest_filename_placeholder = /** @type {(inputs: Wiki_Ingest_Filename_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p. ej. concepts/my-topic.md`)
};

const ja_wiki_ingest_filename_placeholder = /** @type {(inputs: Wiki_Ingest_Filename_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例: concepts/my-topic.md`)
};

const hi_wiki_ingest_filename_placeholder = /** @type {(inputs: Wiki_Ingest_Filename_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जैसे concepts/my-topic.md`)
};

const pt_br2_wiki_ingest_filename_placeholder = /** @type {(inputs: Wiki_Ingest_Filename_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ex.: concepts/my-topic.md`)
};

const ko_wiki_ingest_filename_placeholder = /** @type {(inputs: Wiki_Ingest_Filename_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`예: concepts/my-topic.md`)
};

const fr_wiki_ingest_filename_placeholder = /** @type {(inputs: Wiki_Ingest_Filename_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p. ex. concepts/my-topic.md`)
};

/**
* | output |
* | --- |
* | "e.g. concepts/my-topic.md" |
*
* @param {Wiki_Ingest_Filename_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_ingest_filename_placeholder = /** @type {((inputs?: Wiki_Ingest_Filename_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Ingest_Filename_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_ingest_filename_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_ingest_filename_placeholder(inputs)
	if (locale === "es") return es_wiki_ingest_filename_placeholder(inputs)
	if (locale === "ja") return ja_wiki_ingest_filename_placeholder(inputs)
	if (locale === "hi") return hi_wiki_ingest_filename_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_ingest_filename_placeholder(inputs)
	if (locale === "ko") return ko_wiki_ingest_filename_placeholder(inputs)
	return fr_wiki_ingest_filename_placeholder(inputs)
});