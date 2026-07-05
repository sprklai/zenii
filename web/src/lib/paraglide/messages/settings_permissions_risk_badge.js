/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ risk: NonNullable<unknown> }} Settings_Permissions_Risk_BadgeInputs */

const en_settings_permissions_risk_badge = /** @type {(inputs: Settings_Permissions_Risk_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.risk} risk`)
};

const zh_cn2_settings_permissions_risk_badge = /** @type {(inputs: Settings_Permissions_Risk_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.risk} 风险`)
};

const es_settings_permissions_risk_badge = /** @type {(inputs: Settings_Permissions_Risk_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Riesgo ${i?.risk}`)
};

const ja_settings_permissions_risk_badge = /** @type {(inputs: Settings_Permissions_Risk_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.risk} リスク`)
};

const hi_settings_permissions_risk_badge = /** @type {(inputs: Settings_Permissions_Risk_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.risk} जोखिम`)
};

const pt_br2_settings_permissions_risk_badge = /** @type {(inputs: Settings_Permissions_Risk_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Risco ${i?.risk}`)
};

const ko_settings_permissions_risk_badge = /** @type {(inputs: Settings_Permissions_Risk_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.risk} 위험`)
};

const fr_settings_permissions_risk_badge = /** @type {(inputs: Settings_Permissions_Risk_BadgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Risque ${i?.risk}`)
};

/**
* | output |
* | --- |
* | "{risk} risk" |
*
* @param {Settings_Permissions_Risk_BadgeInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_permissions_risk_badge = /** @type {((inputs: Settings_Permissions_Risk_BadgeInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Permissions_Risk_BadgeInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_permissions_risk_badge(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_permissions_risk_badge(inputs)
	if (locale === "es") return es_settings_permissions_risk_badge(inputs)
	if (locale === "ja") return ja_settings_permissions_risk_badge(inputs)
	if (locale === "hi") return hi_settings_permissions_risk_badge(inputs)
	if (locale === "pt-BR") return pt_br2_settings_permissions_risk_badge(inputs)
	if (locale === "ko") return ko_settings_permissions_risk_badge(inputs)
	return fr_settings_permissions_risk_badge(inputs)
});