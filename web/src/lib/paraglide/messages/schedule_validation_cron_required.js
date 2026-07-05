/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Validation_Cron_RequiredInputs */

const en_schedule_validation_cron_required = /** @type {(inputs: Schedule_Validation_Cron_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron expression is required`)
};

const zh_cn2_schedule_validation_cron_required = /** @type {(inputs: Schedule_Validation_Cron_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 表达式为必填项`)
};

const es_schedule_validation_cron_required = /** @type {(inputs: Schedule_Validation_Cron_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La expresión cron es obligatoria`)
};

const ja_schedule_validation_cron_required = /** @type {(inputs: Schedule_Validation_Cron_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 式は必須です`)
};

const hi_schedule_validation_cron_required = /** @type {(inputs: Schedule_Validation_Cron_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron एक्सप्रेशन आवश्यक है`)
};

const pt_br2_schedule_validation_cron_required = /** @type {(inputs: Schedule_Validation_Cron_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expressão Cron é obrigatória`)
};

const ko_schedule_validation_cron_required = /** @type {(inputs: Schedule_Validation_Cron_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 표현식은 필수입니다`)
};

const fr_schedule_validation_cron_required = /** @type {(inputs: Schedule_Validation_Cron_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L'expression cron est requise`)
};

/**
* | output |
* | --- |
* | "Cron expression is required" |
*
* @param {Schedule_Validation_Cron_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_validation_cron_required = /** @type {((inputs?: Schedule_Validation_Cron_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Validation_Cron_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_validation_cron_required(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_validation_cron_required(inputs)
	if (locale === "es") return es_schedule_validation_cron_required(inputs)
	if (locale === "ja") return ja_schedule_validation_cron_required(inputs)
	if (locale === "hi") return hi_schedule_validation_cron_required(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_validation_cron_required(inputs)
	if (locale === "ko") return ko_schedule_validation_cron_required(inputs)
	return fr_schedule_validation_cron_required(inputs)
});