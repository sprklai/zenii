/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Settings_Plugins_Install_Selected_ButtonInputs */

const en_settings_plugins_install_selected_button = /** @type {(inputs: Settings_Plugins_Install_Selected_ButtonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Install Selected (${i?.count})`)
};

const zh_cn2_settings_plugins_install_selected_button = /** @type {(inputs: Settings_Plugins_Install_Selected_ButtonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`安装所选（${i?.count}）`)
};

const es_settings_plugins_install_selected_button = /** @type {(inputs: Settings_Plugins_Install_Selected_ButtonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Instalar seleccionados (${i?.count})`)
};

const ja_settings_plugins_install_selected_button = /** @type {(inputs: Settings_Plugins_Install_Selected_ButtonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`選択をインストール（${i?.count}）`)
};

const hi_settings_plugins_install_selected_button = /** @type {(inputs: Settings_Plugins_Install_Selected_ButtonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`चयनित इंस्टॉल करें (${i?.count})`)
};

const pt_br2_settings_plugins_install_selected_button = /** @type {(inputs: Settings_Plugins_Install_Selected_ButtonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Instalar Selecionados (${i?.count})`)
};

const ko_settings_plugins_install_selected_button = /** @type {(inputs: Settings_Plugins_Install_Selected_ButtonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`선택한 항목 설치 (${i?.count})`)
};

const fr_settings_plugins_install_selected_button = /** @type {(inputs: Settings_Plugins_Install_Selected_ButtonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Installer la sélection (${i?.count})`)
};

/**
* | output |
* | --- |
* | "Install Selected ({count})" |
*
* @param {Settings_Plugins_Install_Selected_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_install_selected_button = /** @type {((inputs: Settings_Plugins_Install_Selected_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Install_Selected_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_install_selected_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_install_selected_button(inputs)
	if (locale === "es") return es_settings_plugins_install_selected_button(inputs)
	if (locale === "ja") return ja_settings_plugins_install_selected_button(inputs)
	if (locale === "hi") return hi_settings_plugins_install_selected_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_install_selected_button(inputs)
	if (locale === "ko") return ko_settings_plugins_install_selected_button(inputs)
	return fr_settings_plugins_install_selected_button(inputs)
});