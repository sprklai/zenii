/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Notify_Body_PlaceholderInputs */

const en_wb_field_notify_body_placeholder = /** @type {(inputs: Wb_Field_Notify_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification body (optional)`)
};

const zh_cn2_wb_field_notify_body_placeholder = /** @type {(inputs: Wb_Field_Notify_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知正文（可选）`)
};

const es_wb_field_notify_body_placeholder = /** @type {(inputs: Wb_Field_Notify_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuerpo de la notificación (opcional)`)
};

const ja_wb_field_notify_body_placeholder = /** @type {(inputs: Wb_Field_Notify_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知の本文（オプション）`)
};

const hi_wb_field_notify_body_placeholder = /** @type {(inputs: Wb_Field_Notify_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचना मुख्य भाग (वैकल्पिक)`)
};

const pt_br2_wb_field_notify_body_placeholder = /** @type {(inputs: Wb_Field_Notify_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corpo da notificação (opcional)`)
};

const ko_wb_field_notify_body_placeholder = /** @type {(inputs: Wb_Field_Notify_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림 본문（선택적）`)
};

const fr_wb_field_notify_body_placeholder = /** @type {(inputs: Wb_Field_Notify_Body_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corps de la notification (optionnel)`)
};

/**
* | output |
* | --- |
* | "Notification body (optional)" |
*
* @param {Wb_Field_Notify_Body_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_notify_body_placeholder = /** @type {((inputs?: Wb_Field_Notify_Body_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Notify_Body_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_notify_body_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_notify_body_placeholder(inputs)
	if (locale === "es") return es_wb_field_notify_body_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_notify_body_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_notify_body_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_notify_body_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_notify_body_placeholder(inputs)
	return fr_wb_field_notify_body_placeholder(inputs)
});