/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Install_All_LabelInputs */

const en_settings_plugins_install_all_label = /** @type {(inputs: Settings_Plugins_Install_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install all plugins in directory`)
};

const zh_cn2_settings_plugins_install_all_label = /** @type {(inputs: Settings_Plugins_Install_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装目录中的所有插件`)
};

const es_settings_plugins_install_all_label = /** @type {(inputs: Settings_Plugins_Install_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar todos los plugins del directorio`)
};

const ja_settings_plugins_install_all_label = /** @type {(inputs: Settings_Plugins_Install_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ディレクトリ内のすべてのプラグインをインストール`)
};

const hi_settings_plugins_install_all_label = /** @type {(inputs: Settings_Plugins_Install_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डायरेक्टरी के सभी प्लगइन इंस्टॉल करें`)
};

const pt_br2_settings_plugins_install_all_label = /** @type {(inputs: Settings_Plugins_Install_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar todos os plugins do diretório`)
};

const ko_settings_plugins_install_all_label = /** @type {(inputs: Settings_Plugins_Install_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`디렉터리의 모든 플러그인 설치`)
};

const fr_settings_plugins_install_all_label = /** @type {(inputs: Settings_Plugins_Install_All_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer tous les plugins du répertoire`)
};

/**
* | output |
* | --- |
* | "Install all plugins in directory" |
*
* @param {Settings_Plugins_Install_All_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_install_all_label = /** @type {((inputs?: Settings_Plugins_Install_All_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Install_All_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_install_all_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_install_all_label(inputs)
	if (locale === "es") return es_settings_plugins_install_all_label(inputs)
	if (locale === "ja") return ja_settings_plugins_install_all_label(inputs)
	if (locale === "hi") return hi_settings_plugins_install_all_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_install_all_label(inputs)
	if (locale === "ko") return ko_settings_plugins_install_all_label(inputs)
	return fr_settings_plugins_install_all_label(inputs)
});