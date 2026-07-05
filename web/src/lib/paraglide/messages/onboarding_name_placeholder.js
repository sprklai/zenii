/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Name_PlaceholderInputs */

const en_onboarding_name_placeholder = /** @type {(inputs: Onboarding_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g., John`)
};

const zh_cn2_onboarding_name_placeholder = /** @type {(inputs: Onboarding_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：小明`)
};

const es_onboarding_name_placeholder = /** @type {(inputs: Onboarding_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p. ej., Juan`)
};

const ja_onboarding_name_placeholder = /** @type {(inputs: Onboarding_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例：太郎`)
};

const hi_onboarding_name_placeholder = /** @type {(inputs: Onboarding_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जैसे, राहुल`)
};

const pt_br2_onboarding_name_placeholder = /** @type {(inputs: Onboarding_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ex.: João`)
};

const ko_onboarding_name_placeholder = /** @type {(inputs: Onboarding_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`예: 홍길동`)
};

const fr_onboarding_name_placeholder = /** @type {(inputs: Onboarding_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p. ex., Jean`)
};

/**
* | output |
* | --- |
* | "e.g., John" |
*
* @param {Onboarding_Name_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_name_placeholder = /** @type {((inputs?: Onboarding_Name_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Name_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_name_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_name_placeholder(inputs)
	if (locale === "es") return es_onboarding_name_placeholder(inputs)
	if (locale === "ja") return ja_onboarding_name_placeholder(inputs)
	if (locale === "hi") return hi_onboarding_name_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_name_placeholder(inputs)
	if (locale === "ko") return ko_onboarding_name_placeholder(inputs)
	return fr_onboarding_name_placeholder(inputs)
});