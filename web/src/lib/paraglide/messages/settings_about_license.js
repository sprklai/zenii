/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_About_LicenseInputs */

const en_settings_about_license = /** @type {(inputs: Settings_About_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT License`)
};

const zh_cn2_settings_about_license = /** @type {(inputs: Settings_About_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT 许可证`)
};

const es_settings_about_license = /** @type {(inputs: Settings_About_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencia MIT`)
};

const ja_settings_about_license = /** @type {(inputs: Settings_About_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT ライセンス`)
};

const hi_settings_about_license = /** @type {(inputs: Settings_About_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT लाइसेंस`)
};

const pt_br2_settings_about_license = /** @type {(inputs: Settings_About_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licença MIT`)
};

const ko_settings_about_license = /** @type {(inputs: Settings_About_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MIT 라이선스`)
};

const fr_settings_about_license = /** @type {(inputs: Settings_About_LicenseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence MIT`)
};

/**
* | output |
* | --- |
* | "MIT License" |
*
* @param {Settings_About_LicenseInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_about_license = /** @type {((inputs?: Settings_About_LicenseInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_About_LicenseInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_about_license(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_about_license(inputs)
	if (locale === "es") return es_settings_about_license(inputs)
	if (locale === "ja") return ja_settings_about_license(inputs)
	if (locale === "hi") return hi_settings_about_license(inputs)
	if (locale === "pt-BR") return pt_br2_settings_about_license(inputs)
	if (locale === "ko") return ko_settings_about_license(inputs)
	return fr_settings_about_license(inputs)
});