/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Self_Evolution_LabelInputs */

const en_settings_general_self_evolution_label = /** @type {(inputs: Settings_General_Self_Evolution_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Self-Evolution`)
};

const zh_cn2_settings_general_self_evolution_label = /** @type {(inputs: Settings_General_Self_Evolution_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自我进化`)
};

const es_settings_general_self_evolution_label = /** @type {(inputs: Settings_General_Self_Evolution_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto-evolución`)
};

const ja_settings_general_self_evolution_label = /** @type {(inputs: Settings_General_Self_Evolution_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自己進化`)
};

const hi_settings_general_self_evolution_label = /** @type {(inputs: Settings_General_Self_Evolution_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सेल्फ़-इवोल्यूशन`)
};

const pt_br2_settings_general_self_evolution_label = /** @type {(inputs: Settings_General_Self_Evolution_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autoevolução`)
};

const ko_settings_general_self_evolution_label = /** @type {(inputs: Settings_General_Self_Evolution_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`자기 진화`)
};

const fr_settings_general_self_evolution_label = /** @type {(inputs: Settings_General_Self_Evolution_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto-évolution`)
};

/**
* | output |
* | --- |
* | "Self-Evolution" |
*
* @param {Settings_General_Self_Evolution_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_self_evolution_label = /** @type {((inputs?: Settings_General_Self_Evolution_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Self_Evolution_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_self_evolution_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_self_evolution_label(inputs)
	if (locale === "es") return es_settings_general_self_evolution_label(inputs)
	if (locale === "ja") return ja_settings_general_self_evolution_label(inputs)
	if (locale === "hi") return hi_settings_general_self_evolution_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_self_evolution_label(inputs)
	if (locale === "ko") return ko_settings_general_self_evolution_label(inputs)
	return fr_settings_general_self_evolution_label(inputs)
});