/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Session_MainInputs */

const en_wb_option_session_main = /** @type {(inputs: Wb_Option_Session_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Main`)
};

const zh_cn2_wb_option_session_main = /** @type {(inputs: Wb_Option_Session_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主会话`)
};

const es_wb_option_session_main = /** @type {(inputs: Wb_Option_Session_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Principal`)
};

const ja_wb_option_session_main = /** @type {(inputs: Wb_Option_Session_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メイン`)
};

const hi_wb_option_session_main = /** @type {(inputs: Wb_Option_Session_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मुख्य`)
};

const pt_br2_wb_option_session_main = /** @type {(inputs: Wb_Option_Session_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Principal`)
};

const ko_wb_option_session_main = /** @type {(inputs: Wb_Option_Session_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메인`)
};

const fr_wb_option_session_main = /** @type {(inputs: Wb_Option_Session_MainInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Principale`)
};

/**
* | output |
* | --- |
* | "Main" |
*
* @param {Wb_Option_Session_MainInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_session_main = /** @type {((inputs?: Wb_Option_Session_MainInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Session_MainInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_session_main(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_session_main(inputs)
	if (locale === "es") return es_wb_option_session_main(inputs)
	if (locale === "ja") return ja_wb_option_session_main(inputs)
	if (locale === "hi") return hi_wb_option_session_main(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_session_main(inputs)
	if (locale === "ko") return ko_wb_option_session_main(inputs)
	return fr_wb_option_session_main(inputs)
});