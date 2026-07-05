/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Model_DescriptionInputs */

const en_wb_field_model_description = /** @type {(inputs: Wb_Field_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Override the default model for this step only`)
};

const zh_cn2_wb_field_model_description = /** @type {(inputs: Wb_Field_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅覆盖此步骤的默认模型`)
};

const es_wb_field_model_description = /** @type {(inputs: Wb_Field_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sustituir el modelo predeterminado solo para este paso`)
};

const ja_wb_field_model_description = /** @type {(inputs: Wb_Field_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このステップのみデフォルトモデルを上書きします`)
};

const hi_wb_field_model_description = /** @type {(inputs: Wb_Field_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`केवल इस चरण के लिए डिफ़ॉल्ट मॉडल ओवरराइड करें`)
};

const pt_br2_wb_field_model_description = /** @type {(inputs: Wb_Field_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Substituir o modelo padrão apenas para este passo`)
};

const ko_wb_field_model_description = /** @type {(inputs: Wb_Field_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 단계에만 기본 모델을 재정의합니다`)
};

const fr_wb_field_model_description = /** @type {(inputs: Wb_Field_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remplacer le modèle par défaut pour cette étape uniquement`)
};

/**
* | output |
* | --- |
* | "Override the default model for this step only" |
*
* @param {Wb_Field_Model_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_model_description = /** @type {((inputs?: Wb_Field_Model_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Model_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_model_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_model_description(inputs)
	if (locale === "es") return es_wb_field_model_description(inputs)
	if (locale === "ja") return ja_wb_field_model_description(inputs)
	if (locale === "hi") return hi_wb_field_model_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_model_description(inputs)
	if (locale === "ko") return ko_wb_field_model_description(inputs)
	return fr_wb_field_model_description(inputs)
});