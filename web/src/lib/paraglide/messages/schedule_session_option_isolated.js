/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Session_Option_IsolatedInputs */

const en_schedule_session_option_isolated = /** @type {(inputs: Schedule_Session_Option_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isolated`)
};

const zh_cn2_schedule_session_option_isolated = /** @type {(inputs: Schedule_Session_Option_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隔离`)
};

const es_schedule_session_option_isolated = /** @type {(inputs: Schedule_Session_Option_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aislada`)
};

const ja_schedule_session_option_isolated = /** @type {(inputs: Schedule_Session_Option_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分離`)
};

const hi_schedule_session_option_isolated = /** @type {(inputs: Schedule_Session_Option_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पृथक`)
};

const pt_br2_schedule_session_option_isolated = /** @type {(inputs: Schedule_Session_Option_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isolada`)
};

const ko_schedule_session_option_isolated = /** @type {(inputs: Schedule_Session_Option_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`격리됨`)
};

const fr_schedule_session_option_isolated = /** @type {(inputs: Schedule_Session_Option_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isolée`)
};

/**
* | output |
* | --- |
* | "Isolated" |
*
* @param {Schedule_Session_Option_IsolatedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_session_option_isolated = /** @type {((inputs?: Schedule_Session_Option_IsolatedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Session_Option_IsolatedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_session_option_isolated(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_session_option_isolated(inputs)
	if (locale === "es") return es_schedule_session_option_isolated(inputs)
	if (locale === "ja") return ja_schedule_session_option_isolated(inputs)
	if (locale === "hi") return hi_schedule_session_option_isolated(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_session_option_isolated(inputs)
	if (locale === "ko") return ko_schedule_session_option_isolated(inputs)
	return fr_schedule_session_option_isolated(inputs)
});