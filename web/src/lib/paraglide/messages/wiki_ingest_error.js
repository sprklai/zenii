/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Ingest_ErrorInputs */

const en_wiki_ingest_error = /** @type {(inputs: Wiki_Ingest_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingest failed`)
};

const zh_cn2_wiki_ingest_error = /** @type {(inputs: Wiki_Ingest_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导入失败`)
};

const es_wiki_ingest_error = /** @type {(inputs: Wiki_Ingest_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al ingerir`)
};

const ja_wiki_ingest_error = /** @type {(inputs: Wiki_Ingest_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り込みに失敗しました`)
};

const hi_wiki_ingest_error = /** @type {(inputs: Wiki_Ingest_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इनजेस्ट विफल`)
};

const pt_br2_wiki_ingest_error = /** @type {(inputs: Wiki_Ingest_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha na ingestão`)
};

const ko_wiki_ingest_error = /** @type {(inputs: Wiki_Ingest_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`수집 실패`)
};

const fr_wiki_ingest_error = /** @type {(inputs: Wiki_Ingest_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de l'ingestion`)
};

/**
* | output |
* | --- |
* | "Ingest failed" |
*
* @param {Wiki_Ingest_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_ingest_error = /** @type {((inputs?: Wiki_Ingest_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Ingest_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_ingest_error(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_ingest_error(inputs)
	if (locale === "es") return es_wiki_ingest_error(inputs)
	if (locale === "ja") return ja_wiki_ingest_error(inputs)
	if (locale === "hi") return hi_wiki_ingest_error(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_ingest_error(inputs)
	if (locale === "ko") return ko_wiki_ingest_error(inputs)
	return fr_wiki_ingest_error(inputs)
});