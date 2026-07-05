/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Session_Option_MainInputs */

const en_schedule_session_option_main = /** @type {(inputs: Schedule_Session_Option_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Main`)
};

const zh_cn2_schedule_session_option_main = /** @type {(inputs: Schedule_Session_Option_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主会话`)
};

const es_schedule_session_option_main = /** @type {(inputs: Schedule_Session_Option_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Principal`)
};

const ja_schedule_session_option_main = /** @type {(inputs: Schedule_Session_Option_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メイン`)
};

const hi_schedule_session_option_main = /** @type {(inputs: Schedule_Session_Option_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मुख्य`)
};

const pt_br2_schedule_session_option_main = /** @type {(inputs: Schedule_Session_Option_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Principal`)
};

const ko_schedule_session_option_main = /** @type {(inputs: Schedule_Session_Option_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메인`)
};

const fr_schedule_session_option_main = /** @type {(inputs: Schedule_Session_Option_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Principale`)
};

/**
* | output |
* | --- |
* | "Main" |
*
* @param {Schedule_Session_Option_MainInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_session_option_main = /** @type {((inputs?: Schedule_Session_Option_MainInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Session_Option_MainInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_session_option_main(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_session_option_main(inputs)
	if (locale === "es") return es_schedule_session_option_main(inputs)
	if (locale === "ja") return ja_schedule_session_option_main(inputs)
	if (locale === "hi") return hi_schedule_session_option_main(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_session_option_main(inputs)
	if (locale === "ko") return ko_schedule_session_option_main(inputs)
	return fr_schedule_session_option_main(inputs)
});