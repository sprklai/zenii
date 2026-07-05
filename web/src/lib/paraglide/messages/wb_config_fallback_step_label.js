/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Config_Fallback_Step_LabelInputs */

const en_wb_config_fallback_step_label = /** @type {(inputs: Wb_Config_Fallback_Step_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fallback Step`)
};

const zh_cn2_wb_config_fallback_step_label = /** @type {(inputs: Wb_Config_Fallback_Step_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回退步骤`)
};

const es_wb_config_fallback_step_label = /** @type {(inputs: Wb_Config_Fallback_Step_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paso de reserva`)
};

const ja_wb_config_fallback_step_label = /** @type {(inputs: Wb_Config_Fallback_Step_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォールバックステップ`)
};

const hi_wb_config_fallback_step_label = /** @type {(inputs: Wb_Config_Fallback_Step_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ॉलबैक चरण`)
};

const pt_br2_wb_config_fallback_step_label = /** @type {(inputs: Wb_Config_Fallback_Step_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passo alternativo`)
};

const ko_wb_config_fallback_step_label = /** @type {(inputs: Wb_Config_Fallback_Step_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`대체 단계`)
};

const fr_wb_config_fallback_step_label = /** @type {(inputs: Wb_Config_Fallback_Step_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étape de secours`)
};

/**
* | output |
* | --- |
* | "Fallback Step" |
*
* @param {Wb_Config_Fallback_Step_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_config_fallback_step_label = /** @type {((inputs?: Wb_Config_Fallback_Step_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Config_Fallback_Step_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_config_fallback_step_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_config_fallback_step_label(inputs)
	if (locale === "es") return es_wb_config_fallback_step_label(inputs)
	if (locale === "ja") return ja_wb_config_fallback_step_label(inputs)
	if (locale === "hi") return hi_wb_config_fallback_step_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_config_fallback_step_label(inputs)
	if (locale === "ko") return ko_wb_config_fallback_step_label(inputs)
	return fr_wb_config_fallback_step_label(inputs)
});