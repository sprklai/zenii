/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} _Meta_LabelInputs */

const en__meta_label = /** @type {(inputs: _Meta_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`English`)
};

const zh_cn2__meta_label = /** @type {(inputs: _Meta_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简体中文`)
};

const es__meta_label = /** @type {(inputs: _Meta_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Español`)
};

const ja__meta_label = /** @type {(inputs: _Meta_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日本語`)
};

const hi__meta_label = /** @type {(inputs: _Meta_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हिन्दी`)
};

const pt_br2__meta_label = /** @type {(inputs: _Meta_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Português`)
};

const ko__meta_label = /** @type {(inputs: _Meta_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`한국어`)
};

const fr__meta_label = /** @type {(inputs: _Meta_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Français`)
};

/**
* | output |
* | --- |
* | "English" |
*
* @param {_Meta_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const _meta_label = /** @type {((inputs?: _Meta_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<_Meta_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en__meta_label(inputs)
	if (locale === "zh-CN") return zh_cn2__meta_label(inputs)
	if (locale === "es") return es__meta_label(inputs)
	if (locale === "ja") return ja__meta_label(inputs)
	if (locale === "hi") return hi__meta_label(inputs)
	if (locale === "pt-BR") return pt_br2__meta_label(inputs)
	if (locale === "ko") return ko__meta_label(inputs)
	return fr__meta_label(inputs)
});