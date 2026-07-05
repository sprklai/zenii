/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Learning_EnabledInputs */

const en_wb_option_learning_enabled = /** @type {(inputs: Wb_Option_Learning_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Learning`)
};

const zh_cn2_wb_option_learning_enabled = /** @type {(inputs: Wb_Option_Learning_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`学习`)
};

const es_wb_option_learning_enabled = /** @type {(inputs: Wb_Option_Learning_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprendizaje`)
};

const ja_wb_option_learning_enabled = /** @type {(inputs: Wb_Option_Learning_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`学習`)
};

const hi_wb_option_learning_enabled = /** @type {(inputs: Wb_Option_Learning_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सीखना`)
};

const pt_br2_wb_option_learning_enabled = /** @type {(inputs: Wb_Option_Learning_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprendizado`)
};

const ko_wb_option_learning_enabled = /** @type {(inputs: Wb_Option_Learning_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`학습`)
};

const fr_wb_option_learning_enabled = /** @type {(inputs: Wb_Option_Learning_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apprentissage`)
};

/**
* | output |
* | --- |
* | "Learning" |
*
* @param {Wb_Option_Learning_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_learning_enabled = /** @type {((inputs?: Wb_Option_Learning_EnabledInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Learning_EnabledInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_learning_enabled(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_learning_enabled(inputs)
	if (locale === "es") return es_wb_option_learning_enabled(inputs)
	if (locale === "ja") return ja_wb_option_learning_enabled(inputs)
	if (locale === "hi") return hi_wb_option_learning_enabled(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_learning_enabled(inputs)
	if (locale === "ko") return ko_wb_option_learning_enabled(inputs)
	return fr_wb_option_learning_enabled(inputs)
});