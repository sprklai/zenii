/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Session_TargetInputs */

const en_wb_field_session_target = /** @type {(inputs: Wb_Field_Session_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Session Target`)
};

const zh_cn2_wb_field_session_target = /** @type {(inputs: Wb_Field_Session_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会话目标`)
};

const es_wb_field_session_target = /** @type {(inputs: Wb_Field_Session_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destino de sesión`)
};

const ja_wb_field_session_target = /** @type {(inputs: Wb_Field_Session_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セッションターゲット`)
};

const hi_wb_field_session_target = /** @type {(inputs: Wb_Field_Session_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सत्र लक्ष्य`)
};

const pt_br2_wb_field_session_target = /** @type {(inputs: Wb_Field_Session_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destino da Sessão`)
};

const ko_wb_field_session_target = /** @type {(inputs: Wb_Field_Session_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`세션 대상`)
};

const fr_wb_field_session_target = /** @type {(inputs: Wb_Field_Session_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cible de session`)
};

/**
* | output |
* | --- |
* | "Session Target" |
*
* @param {Wb_Field_Session_TargetInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_session_target = /** @type {((inputs?: Wb_Field_Session_TargetInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Session_TargetInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_session_target(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_session_target(inputs)
	if (locale === "es") return es_wb_field_session_target(inputs)
	if (locale === "ja") return ja_wb_field_session_target(inputs)
	if (locale === "hi") return hi_wb_field_session_target(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_session_target(inputs)
	if (locale === "ko") return ko_wb_field_session_target(inputs)
	return fr_wb_field_session_target(inputs)
});