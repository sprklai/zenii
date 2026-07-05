/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Recipient_LabelInputs */

const en_wb_field_recipient_label = /** @type {(inputs: Wb_Field_Recipient_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recipient ID`)
};

const zh_cn2_wb_field_recipient_label = /** @type {(inputs: Wb_Field_Recipient_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收件人 ID`)
};

const es_wb_field_recipient_label = /** @type {(inputs: Wb_Field_Recipient_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID del destinatario`)
};

const ja_wb_field_recipient_label = /** @type {(inputs: Wb_Field_Recipient_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受信者 ID`)
};

const hi_wb_field_recipient_label = /** @type {(inputs: Wb_Field_Recipient_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्राप्तकर्ता ID`)
};

const pt_br2_wb_field_recipient_label = /** @type {(inputs: Wb_Field_Recipient_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID do destinatário`)
};

const ko_wb_field_recipient_label = /** @type {(inputs: Wb_Field_Recipient_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`수신자 ID`)
};

const fr_wb_field_recipient_label = /** @type {(inputs: Wb_Field_Recipient_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID du destinataire`)
};

/**
* | output |
* | --- |
* | "Recipient ID" |
*
* @param {Wb_Field_Recipient_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_recipient_label = /** @type {((inputs?: Wb_Field_Recipient_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Recipient_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_recipient_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_recipient_label(inputs)
	if (locale === "es") return es_wb_field_recipient_label(inputs)
	if (locale === "ja") return ja_wb_field_recipient_label(inputs)
	if (locale === "hi") return hi_wb_field_recipient_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_recipient_label(inputs)
	if (locale === "ko") return ko_wb_field_recipient_label(inputs)
	return fr_wb_field_recipient_label(inputs)
});