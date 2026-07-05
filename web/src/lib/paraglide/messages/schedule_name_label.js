/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Name_LabelInputs */

const en_schedule_name_label = /** @type {(inputs: Schedule_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const zh_cn2_schedule_name_label = /** @type {(inputs: Schedule_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称`)
};

const es_schedule_name_label = /** @type {(inputs: Schedule_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre`)
};

const ja_schedule_name_label = /** @type {(inputs: Schedule_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前`)
};

const hi_schedule_name_label = /** @type {(inputs: Schedule_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`नाम`)
};

const pt_br2_schedule_name_label = /** @type {(inputs: Schedule_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const ko_schedule_name_label = /** @type {(inputs: Schedule_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이름`)
};

const fr_schedule_name_label = /** @type {(inputs: Schedule_Name_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom`)
};

/**
* | output |
* | --- |
* | "Name" |
*
* @param {Schedule_Name_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_name_label = /** @type {((inputs?: Schedule_Name_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Name_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_name_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_name_label(inputs)
	if (locale === "es") return es_schedule_name_label(inputs)
	if (locale === "ja") return ja_schedule_name_label(inputs)
	if (locale === "hi") return hi_schedule_name_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_name_label(inputs)
	if (locale === "ko") return ko_schedule_name_label(inputs)
	return fr_schedule_name_label(inputs)
});