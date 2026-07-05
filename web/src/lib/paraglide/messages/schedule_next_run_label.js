/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Schedule_Next_Run_LabelInputs */

const en_schedule_next_run_label = /** @type {(inputs: Schedule_Next_Run_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Next: ${i?.time}`)
};

const zh_cn2_schedule_next_run_label = /** @type {(inputs: Schedule_Next_Run_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下次：${i?.time}`)
};

const es_schedule_next_run_label = /** @type {(inputs: Schedule_Next_Run_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Siguiente: ${i?.time}`)
};

const ja_schedule_next_run_label = /** @type {(inputs: Schedule_Next_Run_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`次回：${i?.time}`)
};

const hi_schedule_next_run_label = /** @type {(inputs: Schedule_Next_Run_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`अगला: ${i?.time}`)
};

const pt_br2_schedule_next_run_label = /** @type {(inputs: Schedule_Next_Run_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Próxima: ${i?.time}`)
};

const ko_schedule_next_run_label = /** @type {(inputs: Schedule_Next_Run_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`다음: ${i?.time}`)
};

const fr_schedule_next_run_label = /** @type {(inputs: Schedule_Next_Run_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Suivant : ${i?.time}`)
};

/**
* | output |
* | --- |
* | "Next: {time}" |
*
* @param {Schedule_Next_Run_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_next_run_label = /** @type {((inputs: Schedule_Next_Run_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Next_Run_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_next_run_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_next_run_label(inputs)
	if (locale === "es") return es_schedule_next_run_label(inputs)
	if (locale === "ja") return ja_schedule_next_run_label(inputs)
	if (locale === "hi") return hi_schedule_next_run_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_next_run_label(inputs)
	if (locale === "ko") return ko_schedule_next_run_label(inputs)
	return fr_schedule_next_run_label(inputs)
});