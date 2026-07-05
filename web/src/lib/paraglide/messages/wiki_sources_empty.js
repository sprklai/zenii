/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Sources_EmptyInputs */

const en_wiki_sources_empty = /** @type {(inputs: Wiki_Sources_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No sources ingested yet`)
};

const zh_cn2_wiki_sources_empty = /** @type {(inputs: Wiki_Sources_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无已导入的来源`)
};

const es_wiki_sources_empty = /** @type {(inputs: Wiki_Sources_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay fuentes ingeridas`)
};

const ja_wiki_sources_empty = /** @type {(inputs: Wiki_Sources_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだソースが取り込まれていません`)
};

const hi_wiki_sources_empty = /** @type {(inputs: Wiki_Sources_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अभी तक कोई स्रोत इनजेस्ट नहीं`)
};

const pt_br2_wiki_sources_empty = /** @type {(inputs: Wiki_Sources_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há fontes ingeridas`)
};

const ko_wiki_sources_empty = /** @type {(inputs: Wiki_Sources_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`아직 수집된 소스가 없습니다`)
};

const fr_wiki_sources_empty = /** @type {(inputs: Wiki_Sources_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune source ingérée pour l'instant`)
};

/**
* | output |
* | --- |
* | "No sources ingested yet" |
*
* @param {Wiki_Sources_EmptyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_sources_empty = /** @type {((inputs?: Wiki_Sources_EmptyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Sources_EmptyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_sources_empty(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_sources_empty(inputs)
	if (locale === "es") return es_wiki_sources_empty(inputs)
	if (locale === "ja") return ja_wiki_sources_empty(inputs)
	if (locale === "hi") return hi_wiki_sources_empty(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_sources_empty(inputs)
	if (locale === "ko") return ko_wiki_sources_empty(inputs)
	return fr_wiki_sources_empty(inputs)
});