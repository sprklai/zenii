/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ current: NonNullable<unknown>, total: NonNullable<unknown> }} Wiki_Ingest_ProgressInputs */

const en_wiki_ingest_progress = /** @type {(inputs: Wiki_Ingest_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingesting ${i?.current} / ${i?.total}...`)
};

const zh_cn2_wiki_ingest_progress = /** @type {(inputs: Wiki_Ingest_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`正在导入 ${i?.current} / ${i?.total}...`)
};

const es_wiki_ingest_progress = /** @type {(inputs: Wiki_Ingest_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingiriendo ${i?.current} / ${i?.total}...`)
};

const ja_wiki_ingest_progress = /** @type {(inputs: Wiki_Ingest_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.total}を取り込み中...`)
};

const hi_wiki_ingest_progress = /** @type {(inputs: Wiki_Ingest_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.total} इनजेस्ट हो रहा है...`)
};

const pt_br2_wiki_ingest_progress = /** @type {(inputs: Wiki_Ingest_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingerindo ${i?.current} / ${i?.total}...`)
};

const ko_wiki_ingest_progress = /** @type {(inputs: Wiki_Ingest_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.current} / ${i?.total} 수집 중...`)
};

const fr_wiki_ingest_progress = /** @type {(inputs: Wiki_Ingest_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingestion ${i?.current} / ${i?.total}...`)
};

/**
* | output |
* | --- |
* | "Ingesting {current} / {total}..." |
*
* @param {Wiki_Ingest_ProgressInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_ingest_progress = /** @type {((inputs: Wiki_Ingest_ProgressInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Ingest_ProgressInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_ingest_progress(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_ingest_progress(inputs)
	if (locale === "es") return es_wiki_ingest_progress(inputs)
	if (locale === "ja") return ja_wiki_ingest_progress(inputs)
	if (locale === "hi") return hi_wiki_ingest_progress(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_ingest_progress(inputs)
	if (locale === "ko") return ko_wiki_ingest_progress(inputs)
	return fr_wiki_ingest_progress(inputs)
});