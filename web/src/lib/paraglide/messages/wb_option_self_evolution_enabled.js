/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Self_Evolution_EnabledInputs */

const en_wb_option_self_evolution_enabled = /** @type {(inputs: Wb_Option_Self_Evolution_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Self-Evolution`)
};

const zh_cn2_wb_option_self_evolution_enabled = /** @type {(inputs: Wb_Option_Self_Evolution_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自我进化`)
};

const es_wb_option_self_evolution_enabled = /** @type {(inputs: Wb_Option_Self_Evolution_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto-evolución`)
};

const ja_wb_option_self_evolution_enabled = /** @type {(inputs: Wb_Option_Self_Evolution_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自己進化`)
};

const hi_wb_option_self_evolution_enabled = /** @type {(inputs: Wb_Option_Self_Evolution_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`स्व-विकास`)
};

const pt_br2_wb_option_self_evolution_enabled = /** @type {(inputs: Wb_Option_Self_Evolution_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto-Evolução`)
};

const ko_wb_option_self_evolution_enabled = /** @type {(inputs: Wb_Option_Self_Evolution_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`자기 진화`)
};

const fr_wb_option_self_evolution_enabled = /** @type {(inputs: Wb_Option_Self_Evolution_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto-évolution`)
};

/**
* | output |
* | --- |
* | "Self-Evolution" |
*
* @param {Wb_Option_Self_Evolution_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_self_evolution_enabled = /** @type {((inputs?: Wb_Option_Self_Evolution_EnabledInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Self_Evolution_EnabledInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_self_evolution_enabled(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_self_evolution_enabled(inputs)
	if (locale === "es") return es_wb_option_self_evolution_enabled(inputs)
	if (locale === "ja") return ja_wb_option_self_evolution_enabled(inputs)
	if (locale === "hi") return hi_wb_option_self_evolution_enabled(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_self_evolution_enabled(inputs)
	if (locale === "ko") return ko_wb_option_self_evolution_enabled(inputs)
	return fr_wb_option_self_evolution_enabled(inputs)
});