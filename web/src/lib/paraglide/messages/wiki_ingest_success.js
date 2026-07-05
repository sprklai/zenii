/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ slug: NonNullable<unknown> }} Wiki_Ingest_SuccessInputs */

const en_wiki_ingest_success = /** @type {(inputs: Wiki_Ingest_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingested as "${i?.slug}"`)
};

const zh_cn2_wiki_ingest_success = /** @type {(inputs: Wiki_Ingest_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已导入为 "${i?.slug}"`)
};

const es_wiki_ingest_success = /** @type {(inputs: Wiki_Ingest_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingerido como "${i?.slug}"`)
};

const ja_wiki_ingest_success = /** @type {(inputs: Wiki_Ingest_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.slug}"として取り込みました`)
};

const hi_wiki_ingest_success = /** @type {(inputs: Wiki_Ingest_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.slug}" के रूप में इनजेस्ट हुआ`)
};

const pt_br2_wiki_ingest_success = /** @type {(inputs: Wiki_Ingest_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingerido como "${i?.slug}"`)
};

const ko_wiki_ingest_success = /** @type {(inputs: Wiki_Ingest_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`"${i?.slug}"로 수집되었습니다`)
};

const fr_wiki_ingest_success = /** @type {(inputs: Wiki_Ingest_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingéré sous "${i?.slug}"`)
};

/**
* | output |
* | --- |
* | "Ingested as \"{slug}\"" |
*
* @param {Wiki_Ingest_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_ingest_success = /** @type {((inputs: Wiki_Ingest_SuccessInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Ingest_SuccessInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_ingest_success(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_ingest_success(inputs)
	if (locale === "es") return es_wiki_ingest_success(inputs)
	if (locale === "ja") return ja_wiki_ingest_success(inputs)
	if (locale === "hi") return hi_wiki_ingest_success(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_ingest_success(inputs)
	if (locale === "ko") return ko_wiki_ingest_success(inputs)
	return fr_wiki_ingest_success(inputs)
});