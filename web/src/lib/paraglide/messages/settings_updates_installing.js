/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Settings_Updates_InstallingInputs */

const en_settings_updates_installing = /** @type {(inputs: Settings_Updates_InstallingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Installing update v${i?.version}...`)
};

const zh_cn2_settings_updates_installing = /** @type {(inputs: Settings_Updates_InstallingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`正在安装更新 v${i?.version}...`)
};

const es_settings_updates_installing = /** @type {(inputs: Settings_Updates_InstallingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Instalando actualización v${i?.version}...`)
};

const ja_settings_updates_installing = /** @type {(inputs: Settings_Updates_InstallingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更新 v${i?.version} をインストール中...`)
};

const hi_settings_updates_installing = /** @type {(inputs: Settings_Updates_InstallingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`अपडेट v${i?.version} इंस्टॉल हो रहा है...`)
};

const pt_br2_settings_updates_installing = /** @type {(inputs: Settings_Updates_InstallingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Instalando atualização v${i?.version}...`)
};

const ko_settings_updates_installing = /** @type {(inputs: Settings_Updates_InstallingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`업데이트 v${i?.version} 설치 중...`)
};

const fr_settings_updates_installing = /** @type {(inputs: Settings_Updates_InstallingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Installation de la mise à jour v${i?.version}...`)
};

/**
* | output |
* | --- |
* | "Installing update v{version}..." |
*
* @param {Settings_Updates_InstallingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_updates_installing = /** @type {((inputs: Settings_Updates_InstallingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Updates_InstallingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_updates_installing(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_updates_installing(inputs)
	if (locale === "es") return es_settings_updates_installing(inputs)
	if (locale === "ja") return ja_settings_updates_installing(inputs)
	if (locale === "hi") return hi_settings_updates_installing(inputs)
	if (locale === "pt-BR") return pt_br2_settings_updates_installing(inputs)
	if (locale === "ko") return ko_settings_updates_installing(inputs)
	return fr_settings_updates_installing(inputs)
});