/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Title_LabelInputs */

const en_wb_field_title_label = /** @type {(inputs: Wb_Field_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Title`)
};

const zh_cn2_wb_field_title_label = /** @type {(inputs: Wb_Field_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题`)
};

const es_wb_field_title_label = /** @type {(inputs: Wb_Field_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título`)
};

const ja_wb_field_title_label = /** @type {(inputs: Wb_Field_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイトル`)
};

const hi_wb_field_title_label = /** @type {(inputs: Wb_Field_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शीर्षक`)
};

const pt_br2_wb_field_title_label = /** @type {(inputs: Wb_Field_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título`)
};

const ko_wb_field_title_label = /** @type {(inputs: Wb_Field_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`제목`)
};

const fr_wb_field_title_label = /** @type {(inputs: Wb_Field_Title_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titre`)
};

/**
* | output |
* | --- |
* | "Title" |
*
* @param {Wb_Field_Title_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_title_label = /** @type {((inputs?: Wb_Field_Title_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Title_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_title_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_title_label(inputs)
	if (locale === "es") return es_wb_field_title_label(inputs)
	if (locale === "ja") return ja_wb_field_title_label(inputs)
	if (locale === "hi") return hi_wb_field_title_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_title_label(inputs)
	if (locale === "ko") return ko_wb_field_title_label(inputs)
	return fr_wb_field_title_label(inputs)
});