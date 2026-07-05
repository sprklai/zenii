/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Session_Target_DescriptionInputs */

const en_wb_field_session_target_description = /** @type {(inputs: Wb_Field_Session_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Whether to use the main session or an isolated one`)
};

const zh_cn2_wb_field_session_target_description = /** @type {(inputs: Wb_Field_Session_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`是否使用主会话或隔离会话`)
};

const es_wb_field_session_target_description = /** @type {(inputs: Wb_Field_Session_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si usar la sesión principal o una aislada`)
};

const ja_wb_field_session_target_description = /** @type {(inputs: Wb_Field_Session_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メインセッションまたは隔離セッションのどちらを使用するか`)
};

const hi_wb_field_session_target_description = /** @type {(inputs: Wb_Field_Session_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मुख्य सत्र या अलग सत्र का उपयोग करना है या नहीं`)
};

const pt_br2_wb_field_session_target_description = /** @type {(inputs: Wb_Field_Session_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se deve usar a sessão principal ou uma isolada`)
};

const ko_wb_field_session_target_description = /** @type {(inputs: Wb_Field_Session_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메인 세션 또는 격리 세션 중 어느 것을 사용할지`)
};

const fr_wb_field_session_target_description = /** @type {(inputs: Wb_Field_Session_Target_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utiliser la session principale ou une session isolée`)
};

/**
* | output |
* | --- |
* | "Whether to use the main session or an isolated one" |
*
* @param {Wb_Field_Session_Target_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_session_target_description = /** @type {((inputs?: Wb_Field_Session_Target_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Session_Target_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_session_target_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_session_target_description(inputs)
	if (locale === "es") return es_wb_field_session_target_description(inputs)
	if (locale === "ja") return ja_wb_field_session_target_description(inputs)
	if (locale === "hi") return hi_wb_field_session_target_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_session_target_description(inputs)
	if (locale === "ko") return ko_wb_field_session_target_description(inputs)
	return fr_wb_field_session_target_description(inputs)
});