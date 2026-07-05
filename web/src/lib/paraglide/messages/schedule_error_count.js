/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Schedule_Error_CountInputs */

const en_schedule_error_count = /** @type {(inputs: Schedule_Error_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} errors`)
};

const zh_cn2_schedule_error_count = /** @type {(inputs: Schedule_Error_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 个错误`)
};

const es_schedule_error_count = /** @type {(inputs: Schedule_Error_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} errores`)
};

const ja_schedule_error_count = /** @type {(inputs: Schedule_Error_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 件のエラー`)
};

const hi_schedule_error_count = /** @type {(inputs: Schedule_Error_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} त्रुटियाँ`)
};

const pt_br2_schedule_error_count = /** @type {(inputs: Schedule_Error_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} erros`)
};

const ko_schedule_error_count = /** @type {(inputs: Schedule_Error_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count}개 오류`)
};

const fr_schedule_error_count = /** @type {(inputs: Schedule_Error_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} erreurs`)
};

/**
* | output |
* | --- |
* | "{count} errors" |
*
* @param {Schedule_Error_CountInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_error_count = /** @type {((inputs: Schedule_Error_CountInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Error_CountInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_error_count(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_error_count(inputs)
	if (locale === "es") return es_schedule_error_count(inputs)
	if (locale === "ja") return ja_schedule_error_count(inputs)
	if (locale === "hi") return hi_schedule_error_count(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_error_count(inputs)
	if (locale === "ko") return ko_schedule_error_count(inputs)
	return fr_schedule_error_count(inputs)
});