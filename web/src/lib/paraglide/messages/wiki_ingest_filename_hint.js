/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Ingest_Filename_HintInputs */

const en_wiki_ingest_filename_hint = /** @type {(inputs: Wiki_Ingest_Filename_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a path like concepts/, entities/, topics/, comparisons/, or queries/`)
};

const zh_cn2_wiki_ingest_filename_hint = /** @type {(inputs: Wiki_Ingest_Filename_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用类似 concepts/、entities/、topics/、comparisons/ 或 queries/ 的路径`)
};

const es_wiki_ingest_filename_hint = /** @type {(inputs: Wiki_Ingest_Filename_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa una ruta como concepts/, entities/, topics/, comparisons/ o queries/`)
};

const ja_wiki_ingest_filename_hint = /** @type {(inputs: Wiki_Ingest_Filename_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`concepts/、entities/、topics/、comparisons/、またはqueries/のようなパスを使用してください`)
};

const hi_wiki_ingest_filename_hint = /** @type {(inputs: Wiki_Ingest_Filename_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`concepts/, entities/, topics/, comparisons/, या queries/ जैसा पथ उपयोग करें`)
};

const pt_br2_wiki_ingest_filename_hint = /** @type {(inputs: Wiki_Ingest_Filename_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use um caminho como concepts/, entities/, topics/, comparisons/ ou queries/`)
};

const ko_wiki_ingest_filename_hint = /** @type {(inputs: Wiki_Ingest_Filename_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`concepts/, entities/, topics/, comparisons/ 또는 queries/와 같은 경로를 사용하세요`)
};

const fr_wiki_ingest_filename_hint = /** @type {(inputs: Wiki_Ingest_Filename_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez un chemin comme concepts/, entities/, topics/, comparisons/ ou queries/`)
};

/**
* | output |
* | --- |
* | "Use a path like concepts/, entities/, topics/, comparisons/, or queries/" |
*
* @param {Wiki_Ingest_Filename_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_ingest_filename_hint = /** @type {((inputs?: Wiki_Ingest_Filename_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Ingest_Filename_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_ingest_filename_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_ingest_filename_hint(inputs)
	if (locale === "es") return es_wiki_ingest_filename_hint(inputs)
	if (locale === "ja") return ja_wiki_ingest_filename_hint(inputs)
	if (locale === "hi") return hi_wiki_ingest_filename_hint(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_ingest_filename_hint(inputs)
	if (locale === "ko") return ko_wiki_ingest_filename_hint(inputs)
	return fr_wiki_ingest_filename_hint(inputs)
});