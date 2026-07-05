/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Detail_LicenseInputs */

const en_settings_plugins_detail_license = /** @type {(inputs: Settings_Plugins_Detail_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`License:`)
};

const zh_cn2_settings_plugins_detail_license = /** @type {(inputs: Settings_Plugins_Detail_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`许可证：`)
};

const es_settings_plugins_detail_license = /** @type {(inputs: Settings_Plugins_Detail_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencia:`)
};

const ja_settings_plugins_detail_license = /** @type {(inputs: Settings_Plugins_Detail_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライセンス：`)
};

const hi_settings_plugins_detail_license = /** @type {(inputs: Settings_Plugins_Detail_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लाइसेंस:`)
};

const pt_br2_settings_plugins_detail_license = /** @type {(inputs: Settings_Plugins_Detail_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licença:`)
};

const ko_settings_plugins_detail_license = /** @type {(inputs: Settings_Plugins_Detail_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`라이선스:`)
};

const fr_settings_plugins_detail_license = /** @type {(inputs: Settings_Plugins_Detail_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence :`)
};

/**
* | output |
* | --- |
* | "License:" |
*
* @param {Settings_Plugins_Detail_LicenseInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_detail_license = /** @type {((inputs?: Settings_Plugins_Detail_LicenseInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Detail_LicenseInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_detail_license(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_detail_license(inputs)
	if (locale === "es") return es_settings_plugins_detail_license(inputs)
	if (locale === "ja") return ja_settings_plugins_detail_license(inputs)
	if (locale === "hi") return hi_settings_plugins_detail_license(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_detail_license(inputs)
	if (locale === "ko") return ko_settings_plugins_detail_license(inputs)
	return fr_settings_plugins_detail_license(inputs)
});