/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Active_Hours_LabelInputs */

const en_schedule_active_hours_label = /** @type {(inputs: Schedule_Active_Hours_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restrict to active hours`)
};

const zh_cn2_schedule_active_hours_label = /** @type {(inputs: Schedule_Active_Hours_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`限制在活跃时段内`)
};

const es_schedule_active_hours_label = /** @type {(inputs: Schedule_Active_Hours_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restringir a horas activas`)
};

const ja_schedule_active_hours_label = /** @type {(inputs: Schedule_Active_Hours_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクティブ時間帯に制限`)
};

const hi_schedule_active_hours_label = /** @type {(inputs: Schedule_Active_Hours_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सक्रिय घंटों तक सीमित करें`)
};

const pt_br2_schedule_active_hours_label = /** @type {(inputs: Schedule_Active_Hours_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restringir ao horário ativo`)
};

const ko_schedule_active_hours_label = /** @type {(inputs: Schedule_Active_Hours_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`활성 시간으로 제한`)
};

const fr_schedule_active_hours_label = /** @type {(inputs: Schedule_Active_Hours_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restreindre aux heures actives`)
};

/**
* | output |
* | --- |
* | "Restrict to active hours" |
*
* @param {Schedule_Active_Hours_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_active_hours_label = /** @type {((inputs?: Schedule_Active_Hours_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Active_Hours_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_active_hours_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_active_hours_label(inputs)
	if (locale === "es") return es_schedule_active_hours_label(inputs)
	if (locale === "ja") return ja_schedule_active_hours_label(inputs)
	if (locale === "hi") return hi_schedule_active_hours_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_active_hours_label(inputs)
	if (locale === "ko") return ko_schedule_active_hours_label(inputs)
	return fr_schedule_active_hours_label(inputs)
});