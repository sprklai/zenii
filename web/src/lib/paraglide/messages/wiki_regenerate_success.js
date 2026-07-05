/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ pages: NonNullable<unknown>, sources: NonNullable<unknown> }} Wiki_Regenerate_SuccessInputs */

const en_wiki_regenerate_success = /** @type {(inputs: Wiki_Regenerate_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.pages} pages generated from ${i?.sources} sources`)
};

const zh_cn2_wiki_regenerate_success = /** @type {(inputs: Wiki_Regenerate_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`从 ${i?.sources} 个来源生成了 ${i?.pages} 个页面`)
};

const es_wiki_regenerate_success = /** @type {(inputs: Wiki_Regenerate_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.pages} páginas generadas de ${i?.sources} fuentes`)
};

const ja_wiki_regenerate_success = /** @type {(inputs: Wiki_Regenerate_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sources}個のソースから${i?.pages}ページを生成しました`)
};

const hi_wiki_regenerate_success = /** @type {(inputs: Wiki_Regenerate_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sources} स्रोतों से ${i?.pages} पृष्ठ उत्पन्न`)
};

const pt_br2_wiki_regenerate_success = /** @type {(inputs: Wiki_Regenerate_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.pages} páginas geradas de ${i?.sources} fontes`)
};

const ko_wiki_regenerate_success = /** @type {(inputs: Wiki_Regenerate_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sources}개 소스에서 ${i?.pages}개 페이지 생성됨`)
};

const fr_wiki_regenerate_success = /** @type {(inputs: Wiki_Regenerate_SuccessInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.pages} pages générées à partir de ${i?.sources} sources`)
};

/**
* | output |
* | --- |
* | "{pages} pages generated from {sources} sources" |
*
* @param {Wiki_Regenerate_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_regenerate_success = /** @type {((inputs: Wiki_Regenerate_SuccessInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Regenerate_SuccessInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_regenerate_success(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_regenerate_success(inputs)
	if (locale === "es") return es_wiki_regenerate_success(inputs)
	if (locale === "ja") return ja_wiki_regenerate_success(inputs)
	if (locale === "hi") return hi_wiki_regenerate_success(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_regenerate_success(inputs)
	if (locale === "ko") return ko_wiki_regenerate_success(inputs)
	return fr_wiki_regenerate_success(inputs)
});