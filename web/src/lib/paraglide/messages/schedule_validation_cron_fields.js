/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Validation_Cron_FieldsInputs */

const en_schedule_validation_cron_fields = /** @type {(inputs: Schedule_Validation_Cron_FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron expression must have 5 or 6 space-separated fields`)
};

const zh_cn2_schedule_validation_cron_fields = /** @type {(inputs: Schedule_Validation_Cron_FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 表达式必须包含 5 或 6 个以空格分隔的字段`)
};

const es_schedule_validation_cron_fields = /** @type {(inputs: Schedule_Validation_Cron_FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La expresión cron debe tener 5 o 6 campos separados por espacios`)
};

const ja_schedule_validation_cron_fields = /** @type {(inputs: Schedule_Validation_Cron_FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 式はスペース区切りの 5 つまたは 6 つのフィールドが必要です`)
};

const hi_schedule_validation_cron_fields = /** @type {(inputs: Schedule_Validation_Cron_FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron एक्सप्रेशन में 5 या 6 स्पेस-अलग फ़ील्ड होनी चाहिए`)
};

const pt_br2_schedule_validation_cron_fields = /** @type {(inputs: Schedule_Validation_Cron_FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A expressão Cron deve ter 5 ou 6 campos separados por espaço`)
};

const ko_schedule_validation_cron_fields = /** @type {(inputs: Schedule_Validation_Cron_FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 표현식은 5개 또는 6개의 공백으로 구분된 필드가 필요합니다`)
};

const fr_schedule_validation_cron_fields = /** @type {(inputs: Schedule_Validation_Cron_FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L'expression cron doit avoir 5 ou 6 champs séparés par des espaces`)
};

/**
* | output |
* | --- |
* | "Cron expression must have 5 or 6 space-separated fields" |
*
* @param {Schedule_Validation_Cron_FieldsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_validation_cron_fields = /** @type {((inputs?: Schedule_Validation_Cron_FieldsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Validation_Cron_FieldsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_validation_cron_fields(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_validation_cron_fields(inputs)
	if (locale === "es") return es_schedule_validation_cron_fields(inputs)
	if (locale === "ja") return ja_schedule_validation_cron_fields(inputs)
	if (locale === "hi") return hi_schedule_validation_cron_fields(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_validation_cron_fields(inputs)
	if (locale === "ko") return ko_schedule_validation_cron_fields(inputs)
	return fr_schedule_validation_cron_fields(inputs)
});