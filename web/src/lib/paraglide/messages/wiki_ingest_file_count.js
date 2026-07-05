/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, suffix: NonNullable<unknown> }} Wiki_Ingest_File_CountInputs */

const en_wiki_ingest_file_count = /** @type {(inputs: Wiki_Ingest_File_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingest ${i?.count} file${i?.suffix}`)
};

const zh_cn2_wiki_ingest_file_count = /** @type {(inputs: Wiki_Ingest_File_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`导入 ${i?.count} 个文件`)
};

const es_wiki_ingest_file_count = /** @type {(inputs: Wiki_Ingest_File_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingerir ${i?.count} archivo${i?.suffix}`)
};

const ja_wiki_ingest_file_count = /** @type {(inputs: Wiki_Ingest_File_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}個のファイルを取り込む`)
};

const hi_wiki_ingest_file_count = /** @type {(inputs: Wiki_Ingest_File_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} फ़ाइल${i?.suffix} इनजेस्ट करें`)
};

const pt_br2_wiki_ingest_file_count = /** @type {(inputs: Wiki_Ingest_File_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingerir ${i?.count} arquivo${i?.suffix}`)
};

const ko_wiki_ingest_file_count = /** @type {(inputs: Wiki_Ingest_File_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개 파일 수집`)
};

const fr_wiki_ingest_file_count = /** @type {(inputs: Wiki_Ingest_File_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingérer ${i?.count} fichier${i?.suffix}`)
};

/**
* | output |
* | --- |
* | "Ingest {count} file{suffix}" |
*
* @param {Wiki_Ingest_File_CountInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_ingest_file_count = /** @type {((inputs: Wiki_Ingest_File_CountInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Ingest_File_CountInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_ingest_file_count(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_ingest_file_count(inputs)
	if (locale === "es") return es_wiki_ingest_file_count(inputs)
	if (locale === "ja") return ja_wiki_ingest_file_count(inputs)
	if (locale === "hi") return hi_wiki_ingest_file_count(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_ingest_file_count(inputs)
	if (locale === "ko") return ko_wiki_ingest_file_count(inputs)
	return fr_wiki_ingest_file_count(inputs)
});