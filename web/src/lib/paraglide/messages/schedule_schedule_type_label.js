/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Schedule_Type_LabelInputs */

const en_schedule_schedule_type_label = /** @type {(inputs: Schedule_Schedule_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schedule Type`)
};

const zh_cn2_schedule_schedule_type_label = /** @type {(inputs: Schedule_Schedule_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`计划类型`)
};

const es_schedule_schedule_type_label = /** @type {(inputs: Schedule_Schedule_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de programación`)
};

const ja_schedule_schedule_type_label = /** @type {(inputs: Schedule_Schedule_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュールタイプ`)
};

const hi_schedule_schedule_type_label = /** @type {(inputs: Schedule_Schedule_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शेड्यूल प्रकार`)
};

const pt_br2_schedule_schedule_type_label = /** @type {(inputs: Schedule_Schedule_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de Agenda`)
};

const ko_schedule_schedule_type_label = /** @type {(inputs: Schedule_Schedule_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`일정 유형`)
};

const fr_schedule_schedule_type_label = /** @type {(inputs: Schedule_Schedule_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type de planification`)
};

/**
* | output |
* | --- |
* | "Schedule Type" |
*
* @param {Schedule_Schedule_Type_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_schedule_type_label = /** @type {((inputs?: Schedule_Schedule_Type_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Schedule_Type_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_schedule_type_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_schedule_type_label(inputs)
	if (locale === "es") return es_schedule_schedule_type_label(inputs)
	if (locale === "ja") return ja_schedule_schedule_type_label(inputs)
	if (locale === "hi") return hi_schedule_schedule_type_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_schedule_type_label(inputs)
	if (locale === "ko") return ko_schedule_schedule_type_label(inputs)
	return fr_schedule_schedule_type_label(inputs)
});