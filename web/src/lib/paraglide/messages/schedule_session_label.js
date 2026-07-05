/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Session_LabelInputs */

const en_schedule_session_label = /** @type {(inputs: Schedule_Session_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Session`)
};

const zh_cn2_schedule_session_label = /** @type {(inputs: Schedule_Session_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会话`)
};

const es_schedule_session_label = /** @type {(inputs: Schedule_Session_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sesión`)
};

const ja_schedule_session_label = /** @type {(inputs: Schedule_Session_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セッション`)
};

const hi_schedule_session_label = /** @type {(inputs: Schedule_Session_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सत्र`)
};

const pt_br2_schedule_session_label = /** @type {(inputs: Schedule_Session_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sessão`)
};

const ko_schedule_session_label = /** @type {(inputs: Schedule_Session_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`세션`)
};

const fr_schedule_session_label = /** @type {(inputs: Schedule_Session_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Session`)
};

/**
* | output |
* | --- |
* | "Session" |
*
* @param {Schedule_Session_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_session_label = /** @type {((inputs?: Schedule_Session_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Session_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_session_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_session_label(inputs)
	if (locale === "es") return es_schedule_session_label(inputs)
	if (locale === "ja") return ja_schedule_session_label(inputs)
	if (locale === "hi") return hi_schedule_session_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_session_label(inputs)
	if (locale === "ko") return ko_schedule_session_label(inputs)
	return fr_schedule_session_label(inputs)
});