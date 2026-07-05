/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Payload_Type_LabelInputs */

const en_wb_field_payload_type_label = /** @type {(inputs: Wb_Field_Payload_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Payload Type`)
};

const zh_cn2_wb_field_payload_type_label = /** @type {(inputs: Wb_Field_Payload_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`负载类型`)
};

const es_wb_field_payload_type_label = /** @type {(inputs: Wb_Field_Payload_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de carga útil`)
};

const ja_wb_field_payload_type_label = /** @type {(inputs: Wb_Field_Payload_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ペイロードタイプ`)
};

const hi_wb_field_payload_type_label = /** @type {(inputs: Wb_Field_Payload_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पेलोड प्रकार`)
};

const pt_br2_wb_field_payload_type_label = /** @type {(inputs: Wb_Field_Payload_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de Payload`)
};

const ko_wb_field_payload_type_label = /** @type {(inputs: Wb_Field_Payload_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`페이로드 유형`)
};

const fr_wb_field_payload_type_label = /** @type {(inputs: Wb_Field_Payload_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type de charge utile`)
};

/**
* | output |
* | --- |
* | "Payload Type" |
*
* @param {Wb_Field_Payload_Type_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_payload_type_label = /** @type {((inputs?: Wb_Field_Payload_Type_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Payload_Type_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_payload_type_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_payload_type_label(inputs)
	if (locale === "es") return es_wb_field_payload_type_label(inputs)
	if (locale === "ja") return ja_wb_field_payload_type_label(inputs)
	if (locale === "hi") return hi_wb_field_payload_type_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_payload_type_label(inputs)
	if (locale === "ko") return ko_wb_field_payload_type_label(inputs)
	return fr_wb_field_payload_type_label(inputs)
});