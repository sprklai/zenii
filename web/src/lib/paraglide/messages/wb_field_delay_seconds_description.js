/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Delay_Seconds_DescriptionInputs */

const en_wb_field_delay_seconds_description = /** @type {(inputs: Wb_Field_Delay_Seconds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Number of seconds to pause before continuing`)
};

const zh_cn2_wb_field_delay_seconds_description = /** @type {(inputs: Wb_Field_Delay_Seconds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续之前暂停的秒数`)
};

const es_wb_field_delay_seconds_description = /** @type {(inputs: Wb_Field_Delay_Seconds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Número de segundos a pausar antes de continuar`)
};

const ja_wb_field_delay_seconds_description = /** @type {(inputs: Wb_Field_Delay_Seconds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`続行前に一時停止する秒数`)
};

const hi_wb_field_delay_seconds_description = /** @type {(inputs: Wb_Field_Delay_Seconds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जारी रखने से पहले रुकने के लिए सेकंड की संख्या`)
};

const pt_br2_wb_field_delay_seconds_description = /** @type {(inputs: Wb_Field_Delay_Seconds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Número de segundos para pausar antes de continuar`)
};

const ko_wb_field_delay_seconds_description = /** @type {(inputs: Wb_Field_Delay_Seconds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`계속하기 전에 일시 중지할 초 수`)
};

const fr_wb_field_delay_seconds_description = /** @type {(inputs: Wb_Field_Delay_Seconds_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre de secondes de pause avant de continuer`)
};

/**
* | output |
* | --- |
* | "Number of seconds to pause before continuing" |
*
* @param {Wb_Field_Delay_Seconds_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_delay_seconds_description = /** @type {((inputs?: Wb_Field_Delay_Seconds_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Delay_Seconds_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_delay_seconds_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_delay_seconds_description(inputs)
	if (locale === "es") return es_wb_field_delay_seconds_description(inputs)
	if (locale === "ja") return ja_wb_field_delay_seconds_description(inputs)
	if (locale === "hi") return hi_wb_field_delay_seconds_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_delay_seconds_description(inputs)
	if (locale === "ko") return ko_wb_field_delay_seconds_description(inputs)
	return fr_wb_field_delay_seconds_description(inputs)
});