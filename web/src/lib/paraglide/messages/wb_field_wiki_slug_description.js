/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Wiki_Slug_DescriptionInputs */

const en_wb_field_wiki_slug_description = /** @type {(inputs: Wb_Field_Wiki_Slug_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page slug to retrieve (for get action)`)
};

const zh_cn2_wb_field_wiki_slug_description = /** @type {(inputs: Wb_Field_Wiki_Slug_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要获取的页面标识符（用于获取操作）`)
};

const es_wb_field_wiki_slug_description = /** @type {(inputs: Wb_Field_Wiki_Slug_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug de página a recuperar (para acción de obtención)`)
};

const ja_wb_field_wiki_slug_description = /** @type {(inputs: Wb_Field_Wiki_Slug_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取得するページのスラッグ（取得アクション用）`)
};

const hi_wb_field_wiki_slug_description = /** @type {(inputs: Wb_Field_Wiki_Slug_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्राप्त किए जाने वाले पृष्ठ का स्लग (get क्रिया के लिए)`)
};

const pt_br2_wb_field_wiki_slug_description = /** @type {(inputs: Wb_Field_Wiki_Slug_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug da página a recuperar (para ação de obtenção)`)
};

const ko_wb_field_wiki_slug_description = /** @type {(inputs: Wb_Field_Wiki_Slug_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`가져올 페이지 슬러그 (가져오기 작업용)`)
};

const fr_wb_field_wiki_slug_description = /** @type {(inputs: Wb_Field_Wiki_Slug_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug de page à récupérer (pour l'action d'obtention)`)
};

/**
* | output |
* | --- |
* | "Page slug to retrieve (for get action)" |
*
* @param {Wb_Field_Wiki_Slug_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_wiki_slug_description = /** @type {((inputs?: Wb_Field_Wiki_Slug_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Wiki_Slug_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_wiki_slug_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_wiki_slug_description(inputs)
	if (locale === "es") return es_wb_field_wiki_slug_description(inputs)
	if (locale === "ja") return ja_wb_field_wiki_slug_description(inputs)
	if (locale === "hi") return hi_wb_field_wiki_slug_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_wiki_slug_description(inputs)
	if (locale === "ko") return ko_wb_field_wiki_slug_description(inputs)
	return fr_wb_field_wiki_slug_description(inputs)
});