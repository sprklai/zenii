/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Ingest_Dialog_TitleInputs */

const en_wiki_ingest_dialog_title = /** @type {(inputs: Wiki_Ingest_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingest Documents`)
};

const zh_cn2_wiki_ingest_dialog_title = /** @type {(inputs: Wiki_Ingest_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导入文档`)
};

const es_wiki_ingest_dialog_title = /** @type {(inputs: Wiki_Ingest_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingerir documentos`)
};

const ja_wiki_ingest_dialog_title = /** @type {(inputs: Wiki_Ingest_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ドキュメントを取り込む`)
};

const hi_wiki_ingest_dialog_title = /** @type {(inputs: Wiki_Ingest_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`दस्तावेज़ इनजेस्ट करें`)
};

const pt_br2_wiki_ingest_dialog_title = /** @type {(inputs: Wiki_Ingest_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingerir documentos`)
};

const ko_wiki_ingest_dialog_title = /** @type {(inputs: Wiki_Ingest_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`문서 수집`)
};

const fr_wiki_ingest_dialog_title = /** @type {(inputs: Wiki_Ingest_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingérer des documents`)
};

/**
* | output |
* | --- |
* | "Ingest Documents" |
*
* @param {Wiki_Ingest_Dialog_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_ingest_dialog_title = /** @type {((inputs?: Wiki_Ingest_Dialog_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Ingest_Dialog_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_ingest_dialog_title(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_ingest_dialog_title(inputs)
	if (locale === "es") return es_wiki_ingest_dialog_title(inputs)
	if (locale === "ja") return ja_wiki_ingest_dialog_title(inputs)
	if (locale === "hi") return hi_wiki_ingest_dialog_title(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_ingest_dialog_title(inputs)
	if (locale === "ko") return ko_wiki_ingest_dialog_title(inputs)
	return fr_wiki_ingest_dialog_title(inputs)
});