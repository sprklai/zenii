/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Ingest_No_FilesInputs */

const en_wiki_ingest_no_files = /** @type {(inputs: Wiki_Ingest_No_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select files to ingest`)
};

const zh_cn2_wiki_ingest_no_files = /** @type {(inputs: Wiki_Ingest_No_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择要导入的文件`)
};

const es_wiki_ingest_no_files = /** @type {(inputs: Wiki_Ingest_No_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecciona archivos para ingerir`)
};

const ja_wiki_ingest_no_files = /** @type {(inputs: Wiki_Ingest_No_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り込むファイルを選択してください`)
};

const hi_wiki_ingest_no_files = /** @type {(inputs: Wiki_Ingest_No_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इनजेस्ट के लिए फ़ाइलें चुनें`)
};

const pt_br2_wiki_ingest_no_files = /** @type {(inputs: Wiki_Ingest_No_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecione arquivos para ingerir`)
};

const ko_wiki_ingest_no_files = /** @type {(inputs: Wiki_Ingest_No_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`수집할 파일을 선택하세요`)
};

const fr_wiki_ingest_no_files = /** @type {(inputs: Wiki_Ingest_No_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélectionnez des fichiers à ingérer`)
};

/**
* | output |
* | --- |
* | "Select files to ingest" |
*
* @param {Wiki_Ingest_No_FilesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_ingest_no_files = /** @type {((inputs?: Wiki_Ingest_No_FilesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Ingest_No_FilesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_ingest_no_files(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_ingest_no_files(inputs)
	if (locale === "es") return es_wiki_ingest_no_files(inputs)
	if (locale === "ja") return ja_wiki_ingest_no_files(inputs)
	if (locale === "hi") return hi_wiki_ingest_no_files(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_ingest_no_files(inputs)
	if (locale === "ko") return ko_wiki_ingest_no_files(inputs)
	return fr_wiki_ingest_no_files(inputs)
});