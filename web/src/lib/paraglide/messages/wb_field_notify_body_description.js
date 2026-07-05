/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Notify_Body_DescriptionInputs */

const en_wb_field_notify_body_description = /** @type {(inputs: Wb_Field_Notify_Body_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional body text for the notification`)
};

const zh_cn2_wb_field_notify_body_description = /** @type {(inputs: Wb_Field_Notify_Body_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知的可选正文文本`)
};

const es_wb_field_notify_body_description = /** @type {(inputs: Wb_Field_Notify_Body_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto del cuerpo opcional para la notificación`)
};

const ja_wb_field_notify_body_description = /** @type {(inputs: Wb_Field_Notify_Body_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知のオプションの本文テキスト`)
};

const hi_wb_field_notify_body_description = /** @type {(inputs: Wb_Field_Notify_Body_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचना के लिए वैकल्पिक मुख्य भाग टेक्स्ट`)
};

const pt_br2_wb_field_notify_body_description = /** @type {(inputs: Wb_Field_Notify_Body_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto do corpo opcional para a notificação`)
};

const ko_wb_field_notify_body_description = /** @type {(inputs: Wb_Field_Notify_Body_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림의 선택적 본문 텍스트`)
};

const fr_wb_field_notify_body_description = /** @type {(inputs: Wb_Field_Notify_Body_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texte de corps optionnel pour la notification`)
};

/**
* | output |
* | --- |
* | "Optional body text for the notification" |
*
* @param {Wb_Field_Notify_Body_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_notify_body_description = /** @type {((inputs?: Wb_Field_Notify_Body_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Notify_Body_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_notify_body_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_notify_body_description(inputs)
	if (locale === "es") return es_wb_field_notify_body_description(inputs)
	if (locale === "ja") return ja_wb_field_notify_body_description(inputs)
	if (locale === "hi") return hi_wb_field_notify_body_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_notify_body_description(inputs)
	if (locale === "ko") return ko_wb_field_notify_body_description(inputs)
	return fr_wb_field_notify_body_description(inputs)
});