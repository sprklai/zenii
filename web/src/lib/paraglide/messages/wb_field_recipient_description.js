/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Recipient_DescriptionInputs */

const en_wb_field_recipient_description = /** @type {(inputs: Wb_Field_Recipient_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recipient ID — leave blank to auto-resolve when only one contact exists`)
};

const zh_cn2_wb_field_recipient_description = /** @type {(inputs: Wb_Field_Recipient_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收件人 ID — 留空以在只有一个联系人时自动解析`)
};

const es_wb_field_recipient_description = /** @type {(inputs: Wb_Field_Recipient_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID del destinatario — dejar en blanco para resolver automáticamente cuando solo existe un contacto`)
};

const ja_wb_field_recipient_description = /** @type {(inputs: Wb_Field_Recipient_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受信者 ID — 連絡先が一つだけの場合は自動解決するため空白のままにしてください`)
};

const hi_wb_field_recipient_description = /** @type {(inputs: Wb_Field_Recipient_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्राप्तकर्ता ID — केवल एक संपर्क होने पर स्वतः हल करने के लिए खाली छोड़ें`)
};

const pt_br2_wb_field_recipient_description = /** @type {(inputs: Wb_Field_Recipient_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID do destinatário — deixe em branco para resolver automaticamente quando houver apenas um contato`)
};

const ko_wb_field_recipient_description = /** @type {(inputs: Wb_Field_Recipient_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`수신자 ID — 연락처가 하나만 있는 경우 자동 해결을 위해 비워두세요`)
};

const fr_wb_field_recipient_description = /** @type {(inputs: Wb_Field_Recipient_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID du destinataire — laisser vide pour la résolution automatique quand il n'y a qu'un seul contact`)
};

/**
* | output |
* | --- |
* | "Recipient ID — leave blank to auto-resolve when only one contact exists" |
*
* @param {Wb_Field_Recipient_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_recipient_description = /** @type {((inputs?: Wb_Field_Recipient_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Recipient_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_recipient_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_recipient_description(inputs)
	if (locale === "es") return es_wb_field_recipient_description(inputs)
	if (locale === "ja") return ja_wb_field_recipient_description(inputs)
	if (locale === "hi") return hi_wb_field_recipient_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_recipient_description(inputs)
	if (locale === "ko") return ko_wb_field_recipient_description(inputs)
	return fr_wb_field_recipient_description(inputs)
});