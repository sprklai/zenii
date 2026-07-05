/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Ingest_All_SkippedInputs */

const en_wiki_ingest_all_skipped = /** @type {(inputs: Wiki_Ingest_All_SkippedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All files skipped`)
};

const zh_cn2_wiki_ingest_all_skipped = /** @type {(inputs: Wiki_Ingest_All_SkippedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有文件已跳过`)
};

const es_wiki_ingest_all_skipped = /** @type {(inputs: Wiki_Ingest_All_SkippedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los archivos omitidos`)
};

const ja_wiki_ingest_all_skipped = /** @type {(inputs: Wiki_Ingest_All_SkippedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのファイルをスキップしました`)
};

const hi_wiki_ingest_all_skipped = /** @type {(inputs: Wiki_Ingest_All_SkippedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सभी फ़ाइलें छोड़ी गईं`)
};

const pt_br2_wiki_ingest_all_skipped = /** @type {(inputs: Wiki_Ingest_All_SkippedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os arquivos ignorados`)
};

const ko_wiki_ingest_all_skipped = /** @type {(inputs: Wiki_Ingest_All_SkippedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모든 파일 건너뜀`)
};

const fr_wiki_ingest_all_skipped = /** @type {(inputs: Wiki_Ingest_All_SkippedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les fichiers ignorés`)
};

/**
* | output |
* | --- |
* | "All files skipped" |
*
* @param {Wiki_Ingest_All_SkippedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_ingest_all_skipped = /** @type {((inputs?: Wiki_Ingest_All_SkippedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Ingest_All_SkippedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_ingest_all_skipped(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_ingest_all_skipped(inputs)
	if (locale === "es") return es_wiki_ingest_all_skipped(inputs)
	if (locale === "ja") return ja_wiki_ingest_all_skipped(inputs)
	if (locale === "hi") return hi_wiki_ingest_all_skipped(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_ingest_all_skipped(inputs)
	if (locale === "ko") return ko_wiki_ingest_all_skipped(inputs)
	return fr_wiki_ingest_all_skipped(inputs)
});