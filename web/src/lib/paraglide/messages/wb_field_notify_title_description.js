/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Notify_Title_DescriptionInputs */

const en_wb_field_notify_title_description = /** @type {(inputs: Wb_Field_Notify_Title_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Title for the notification`)
};

const zh_cn2_wb_field_notify_title_description = /** @type {(inputs: Wb_Field_Notify_Title_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知的标题`)
};

const es_wb_field_notify_title_description = /** @type {(inputs: Wb_Field_Notify_Title_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título para la notificación`)
};

const ja_wb_field_notify_title_description = /** @type {(inputs: Wb_Field_Notify_Title_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知のタイトル`)
};

const hi_wb_field_notify_title_description = /** @type {(inputs: Wb_Field_Notify_Title_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचना के लिए शीर्षक`)
};

const pt_br2_wb_field_notify_title_description = /** @type {(inputs: Wb_Field_Notify_Title_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título para a notificação`)
};

const ko_wb_field_notify_title_description = /** @type {(inputs: Wb_Field_Notify_Title_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림의 제목`)
};

const fr_wb_field_notify_title_description = /** @type {(inputs: Wb_Field_Notify_Title_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titre de la notification`)
};

/**
* | output |
* | --- |
* | "Title for the notification" |
*
* @param {Wb_Field_Notify_Title_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_notify_title_description = /** @type {((inputs?: Wb_Field_Notify_Title_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Notify_Title_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_notify_title_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_notify_title_description(inputs)
	if (locale === "es") return es_wb_field_notify_title_description(inputs)
	if (locale === "ja") return ja_wb_field_notify_title_description(inputs)
	if (locale === "hi") return hi_wb_field_notify_title_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_notify_title_description(inputs)
	if (locale === "ko") return ko_wb_field_notify_title_description(inputs)
	return fr_wb_field_notify_title_description(inputs)
});