/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Wiki_Slug_LabelInputs */

const en_wb_field_wiki_slug_label = /** @type {(inputs: Wb_Field_Wiki_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page Slug`)
};

const zh_cn2_wb_field_wiki_slug_label = /** @type {(inputs: Wb_Field_Wiki_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面标识符`)
};

const es_wb_field_wiki_slug_label = /** @type {(inputs: Wb_Field_Wiki_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug de página`)
};

const ja_wb_field_wiki_slug_label = /** @type {(inputs: Wb_Field_Wiki_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページスラッグ`)
};

const hi_wb_field_wiki_slug_label = /** @type {(inputs: Wb_Field_Wiki_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पृष्ठ स्लग`)
};

const pt_br2_wb_field_wiki_slug_label = /** @type {(inputs: Wb_Field_Wiki_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug da página`)
};

const ko_wb_field_wiki_slug_label = /** @type {(inputs: Wb_Field_Wiki_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`페이지 슬러그`)
};

const fr_wb_field_wiki_slug_label = /** @type {(inputs: Wb_Field_Wiki_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug de page`)
};

/**
* | output |
* | --- |
* | "Page Slug" |
*
* @param {Wb_Field_Wiki_Slug_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_wiki_slug_label = /** @type {((inputs?: Wb_Field_Wiki_Slug_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Wiki_Slug_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_wiki_slug_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_wiki_slug_label(inputs)
	if (locale === "es") return es_wb_field_wiki_slug_label(inputs)
	if (locale === "ja") return ja_wb_field_wiki_slug_label(inputs)
	if (locale === "hi") return hi_wb_field_wiki_slug_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_wiki_slug_label(inputs)
	if (locale === "ko") return ko_wb_field_wiki_slug_label(inputs)
	return fr_wb_field_wiki_slug_label(inputs)
});