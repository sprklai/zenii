/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ backupPath: NonNullable<unknown> }} Settings_Config_Toast_Opened_DescriptionInputs */

const en_settings_config_toast_opened_description = /** @type {(inputs: Settings_Config_Toast_Opened_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Backup saved to ${i?.backupPath}`)
};

const zh_cn2_settings_config_toast_opened_description = /** @type {(inputs: Settings_Config_Toast_Opened_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`备份已保存到 ${i?.backupPath}`)
};

const es_settings_config_toast_opened_description = /** @type {(inputs: Settings_Config_Toast_Opened_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Copia de respaldo guardada en ${i?.backupPath}`)
};

const ja_settings_config_toast_opened_description = /** @type {(inputs: Settings_Config_Toast_Opened_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`バックアップを ${i?.backupPath} に保存しました`)
};

const hi_settings_config_toast_opened_description = /** @type {(inputs: Settings_Config_Toast_Opened_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`बैकअप ${i?.backupPath} पर सहेजा गया`)
};

const pt_br2_settings_config_toast_opened_description = /** @type {(inputs: Settings_Config_Toast_Opened_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Backup salvo em ${i?.backupPath}`)
};

const ko_settings_config_toast_opened_description = /** @type {(inputs: Settings_Config_Toast_Opened_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`백업이 ${i?.backupPath}에 저장됨`)
};

const fr_settings_config_toast_opened_description = /** @type {(inputs: Settings_Config_Toast_Opened_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sauvegarde enregistrée dans ${i?.backupPath}`)
};

/**
* | output |
* | --- |
* | "Backup saved to {backupPath}" |
*
* @param {Settings_Config_Toast_Opened_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_config_toast_opened_description = /** @type {((inputs: Settings_Config_Toast_Opened_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_Toast_Opened_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_toast_opened_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_config_toast_opened_description(inputs)
	if (locale === "es") return es_settings_config_toast_opened_description(inputs)
	if (locale === "ja") return ja_settings_config_toast_opened_description(inputs)
	if (locale === "hi") return hi_settings_config_toast_opened_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_config_toast_opened_description(inputs)
	if (locale === "ko") return ko_settings_config_toast_opened_description(inputs)
	return fr_settings_config_toast_opened_description(inputs)
});