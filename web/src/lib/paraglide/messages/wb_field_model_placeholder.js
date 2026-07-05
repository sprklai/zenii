/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Model_PlaceholderInputs */

const en_wb_field_model_placeholder = /** @type {(inputs: Wb_Field_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional model override`)
};

const zh_cn2_wb_field_model_placeholder = /** @type {(inputs: Wb_Field_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可选模型覆盖`)
};

const es_wb_field_model_placeholder = /** @type {(inputs: Wb_Field_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sustitución de modelo opcional`)
};

const ja_wb_field_model_placeholder = /** @type {(inputs: Wb_Field_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オプションのモデル上書き`)
};

const hi_wb_field_model_placeholder = /** @type {(inputs: Wb_Field_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वैकल्पिक मॉडल ओवरराइड`)
};

const pt_br2_wb_field_model_placeholder = /** @type {(inputs: Wb_Field_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Substituição de modelo opcional`)
};

const ko_wb_field_model_placeholder = /** @type {(inputs: Wb_Field_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`선택적 모델 재정의`)
};

const fr_wb_field_model_placeholder = /** @type {(inputs: Wb_Field_Model_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remplacement de modèle optionnel`)
};

/**
* | output |
* | --- |
* | "Optional model override" |
*
* @param {Wb_Field_Model_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_model_placeholder = /** @type {((inputs?: Wb_Field_Model_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Model_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_model_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_model_placeholder(inputs)
	if (locale === "es") return es_wb_field_model_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_model_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_model_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_model_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_model_placeholder(inputs)
	return fr_wb_field_model_placeholder(inputs)
});