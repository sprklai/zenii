/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Updates_Install_ButtonInputs */

const en_settings_updates_install_button = /** @type {(inputs: Settings_Updates_Install_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install & Restart`)
};

const zh_cn2_settings_updates_install_button = /** @type {(inputs: Settings_Updates_Install_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装并重启`)
};

const es_settings_updates_install_button = /** @type {(inputs: Settings_Updates_Install_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar y reiniciar`)
};

const ja_settings_updates_install_button = /** @type {(inputs: Settings_Updates_Install_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストールして再起動`)
};

const hi_settings_updates_install_button = /** @type {(inputs: Settings_Updates_Install_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इंस्टॉल करें और पुनः आरंभ करें`)
};

const pt_br2_settings_updates_install_button = /** @type {(inputs: Settings_Updates_Install_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar e Reiniciar`)
};

const ko_settings_updates_install_button = /** @type {(inputs: Settings_Updates_Install_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설치 후 재시작`)
};

const fr_settings_updates_install_button = /** @type {(inputs: Settings_Updates_Install_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer et redémarrer`)
};

/**
* | output |
* | --- |
* | "Install & Restart" |
*
* @param {Settings_Updates_Install_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_updates_install_button = /** @type {((inputs?: Settings_Updates_Install_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Updates_Install_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_updates_install_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_updates_install_button(inputs)
	if (locale === "es") return es_settings_updates_install_button(inputs)
	if (locale === "ja") return ja_settings_updates_install_button(inputs)
	if (locale === "hi") return hi_settings_updates_install_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_updates_install_button(inputs)
	if (locale === "ko") return ko_settings_updates_install_button(inputs)
	return fr_settings_updates_install_button(inputs)
});