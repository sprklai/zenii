/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Notify_Title_PlaceholderInputs */

const en_wb_field_notify_title_placeholder = /** @type {(inputs: Wb_Field_Notify_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification title`)
};

const zh_cn2_wb_field_notify_title_placeholder = /** @type {(inputs: Wb_Field_Notify_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知标题`)
};

const es_wb_field_notify_title_placeholder = /** @type {(inputs: Wb_Field_Notify_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título de la notificación`)
};

const ja_wb_field_notify_title_placeholder = /** @type {(inputs: Wb_Field_Notify_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知タイトル`)
};

const hi_wb_field_notify_title_placeholder = /** @type {(inputs: Wb_Field_Notify_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचना शीर्षक`)
};

const pt_br2_wb_field_notify_title_placeholder = /** @type {(inputs: Wb_Field_Notify_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título da notificação`)
};

const ko_wb_field_notify_title_placeholder = /** @type {(inputs: Wb_Field_Notify_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림 제목`)
};

const fr_wb_field_notify_title_placeholder = /** @type {(inputs: Wb_Field_Notify_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titre de la notification`)
};

/**
* | output |
* | --- |
* | "Notification title" |
*
* @param {Wb_Field_Notify_Title_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_notify_title_placeholder = /** @type {((inputs?: Wb_Field_Notify_Title_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Notify_Title_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_notify_title_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_notify_title_placeholder(inputs)
	if (locale === "es") return es_wb_field_notify_title_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_notify_title_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_notify_title_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_notify_title_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_notify_title_placeholder(inputs)
	return fr_wb_field_notify_title_placeholder(inputs)
});