/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Notify_Level_DescriptionInputs */

const en_wb_field_notify_level_description = /** @type {(inputs: Wb_Field_Notify_Level_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Severity level for the notification`)
};

const zh_cn2_wb_field_notify_level_description = /** @type {(inputs: Wb_Field_Notify_Level_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知的严重级别`)
};

const es_wb_field_notify_level_description = /** @type {(inputs: Wb_Field_Notify_Level_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nivel de gravedad para la notificación`)
};

const ja_wb_field_notify_level_description = /** @type {(inputs: Wb_Field_Notify_Level_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知の重大度レベル`)
};

const hi_wb_field_notify_level_description = /** @type {(inputs: Wb_Field_Notify_Level_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचना के लिए गंभीरता स्तर`)
};

const pt_br2_wb_field_notify_level_description = /** @type {(inputs: Wb_Field_Notify_Level_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nível de gravidade para a notificação`)
};

const ko_wb_field_notify_level_description = /** @type {(inputs: Wb_Field_Notify_Level_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림의 심각도 수준`)
};

const fr_wb_field_notify_level_description = /** @type {(inputs: Wb_Field_Notify_Level_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niveau de gravité pour la notification`)
};

/**
* | output |
* | --- |
* | "Severity level for the notification" |
*
* @param {Wb_Field_Notify_Level_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_notify_level_description = /** @type {((inputs?: Wb_Field_Notify_Level_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Notify_Level_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_notify_level_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_notify_level_description(inputs)
	if (locale === "es") return es_wb_field_notify_level_description(inputs)
	if (locale === "ja") return ja_wb_field_notify_level_description(inputs)
	if (locale === "hi") return hi_wb_field_notify_level_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_notify_level_description(inputs)
	if (locale === "ko") return ko_wb_field_notify_level_description(inputs)
	return fr_wb_field_notify_level_description(inputs)
});