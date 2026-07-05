/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Recipient_PlaceholderInputs */

const en_wb_field_recipient_placeholder = /** @type {(inputs: Wb_Field_Recipient_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. chat_id for Telegram (auto-resolved if blank)`)
};

const zh_cn2_wb_field_recipient_placeholder = /** @type {(inputs: Wb_Field_Recipient_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如 Telegram 的 chat_id（留空自动解析）`)
};

const es_wb_field_recipient_placeholder = /** @type {(inputs: Wb_Field_Recipient_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ej. chat_id de Telegram (se resuelve automáticamente si está vacío)`)
};

const ja_wb_field_recipient_placeholder = /** @type {(inputs: Wb_Field_Recipient_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例: Telegram の chat_id（空白の場合は自動解決）`)
};

const hi_wb_field_recipient_placeholder = /** @type {(inputs: Wb_Field_Recipient_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`उदा. Telegram के लिए chat_id (खाली छोड़ने पर स्वतः हल)`)
};

const pt_br2_wb_field_recipient_placeholder = /** @type {(inputs: Wb_Field_Recipient_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ex. chat_id do Telegram (resolvido automaticamente se em branco)`)
};

const ko_wb_field_recipient_placeholder = /** @type {(inputs: Wb_Field_Recipient_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`예: Telegram의 chat_id (비워두면 자동 해결)`)
};

const fr_wb_field_recipient_placeholder = /** @type {(inputs: Wb_Field_Recipient_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ex. chat_id pour Telegram (résolu automatiquement si vide)`)
};

/**
* | output |
* | --- |
* | "e.g. chat_id for Telegram (auto-resolved if blank)" |
*
* @param {Wb_Field_Recipient_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_recipient_placeholder = /** @type {((inputs?: Wb_Field_Recipient_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Recipient_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_recipient_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_recipient_placeholder(inputs)
	if (locale === "es") return es_wb_field_recipient_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_recipient_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_recipient_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_recipient_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_recipient_placeholder(inputs)
	return fr_wb_field_recipient_placeholder(inputs)
});