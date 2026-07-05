/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Disabled_BadgeInputs */

const en_schedule_disabled_badge = /** @type {(inputs: Schedule_Disabled_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disabled`)
};

const zh_cn2_schedule_disabled_badge = /** @type {(inputs: Schedule_Disabled_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已禁用`)
};

const es_schedule_disabled_badge = /** @type {(inputs: Schedule_Disabled_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deshabilitada`)
};

const ja_schedule_disabled_badge = /** @type {(inputs: Schedule_Disabled_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`無効`)
};

const hi_schedule_disabled_badge = /** @type {(inputs: Schedule_Disabled_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अक्षम`)
};

const pt_br2_schedule_disabled_badge = /** @type {(inputs: Schedule_Disabled_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desabilitado`)
};

const ko_schedule_disabled_badge = /** @type {(inputs: Schedule_Disabled_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`비활성`)
};

const fr_schedule_disabled_badge = /** @type {(inputs: Schedule_Disabled_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Désactivée`)
};

/**
* | output |
* | --- |
* | "Disabled" |
*
* @param {Schedule_Disabled_BadgeInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_disabled_badge = /** @type {((inputs?: Schedule_Disabled_BadgeInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Disabled_BadgeInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_disabled_badge(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_disabled_badge(inputs)
	if (locale === "es") return es_schedule_disabled_badge(inputs)
	if (locale === "ja") return ja_schedule_disabled_badge(inputs)
	if (locale === "hi") return hi_schedule_disabled_badge(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_disabled_badge(inputs)
	if (locale === "ko") return ko_schedule_disabled_badge(inputs)
	return fr_schedule_disabled_badge(inputs)
});