/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_ModelInputs */

const en_wb_field_model = /** @type {(inputs: Wb_Field_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Model`)
};

const zh_cn2_wb_field_model = /** @type {(inputs: Wb_Field_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模型`)
};

const es_wb_field_model = /** @type {(inputs: Wb_Field_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo`)
};

const ja_wb_field_model = /** @type {(inputs: Wb_Field_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデル`)
};

const hi_wb_field_model = /** @type {(inputs: Wb_Field_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मॉडल`)
};

const pt_br2_wb_field_model = /** @type {(inputs: Wb_Field_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo`)
};

const ko_wb_field_model = /** @type {(inputs: Wb_Field_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모델`)
};

const fr_wb_field_model = /** @type {(inputs: Wb_Field_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modèle`)
};

/**
* | output |
* | --- |
* | "Model" |
*
* @param {Wb_Field_ModelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_model = /** @type {((inputs?: Wb_Field_ModelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_ModelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_model(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_model(inputs)
	if (locale === "es") return es_wb_field_model(inputs)
	if (locale === "ja") return ja_wb_field_model(inputs)
	if (locale === "hi") return hi_wb_field_model(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_model(inputs)
	if (locale === "ko") return ko_wb_field_model(inputs)
	return fr_wb_field_model(inputs)
});