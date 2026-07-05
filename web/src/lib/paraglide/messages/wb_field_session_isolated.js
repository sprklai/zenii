/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Session_IsolatedInputs */

const en_wb_field_session_isolated = /** @type {(inputs: Wb_Field_Session_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isolated`)
};

const zh_cn2_wb_field_session_isolated = /** @type {(inputs: Wb_Field_Session_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隔离会话`)
};

const es_wb_field_session_isolated = /** @type {(inputs: Wb_Field_Session_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aislada`)
};

const ja_wb_field_session_isolated = /** @type {(inputs: Wb_Field_Session_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隔離`)
};

const hi_wb_field_session_isolated = /** @type {(inputs: Wb_Field_Session_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अलग`)
};

const pt_br2_wb_field_session_isolated = /** @type {(inputs: Wb_Field_Session_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isolada`)
};

const ko_wb_field_session_isolated = /** @type {(inputs: Wb_Field_Session_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`격리`)
};

const fr_wb_field_session_isolated = /** @type {(inputs: Wb_Field_Session_IsolatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isolée`)
};

/**
* | output |
* | --- |
* | "Isolated" |
*
* @param {Wb_Field_Session_IsolatedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_session_isolated = /** @type {((inputs?: Wb_Field_Session_IsolatedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Session_IsolatedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_session_isolated(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_session_isolated(inputs)
	if (locale === "es") return es_wb_field_session_isolated(inputs)
	if (locale === "ja") return ja_wb_field_session_isolated(inputs)
	if (locale === "hi") return hi_wb_field_session_isolated(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_session_isolated(inputs)
	if (locale === "ko") return ko_wb_field_session_isolated(inputs)
	return fr_wb_field_session_isolated(inputs)
});