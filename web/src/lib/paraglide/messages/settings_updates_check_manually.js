/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Updates_Check_ManuallyInputs */

const en_settings_updates_check_manually = /** @type {(inputs: Settings_Updates_Check_ManuallyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Or check manually:`)
};

const zh_cn2_settings_updates_check_manually = /** @type {(inputs: Settings_Updates_Check_ManuallyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`或手动检查：`)
};

const es_settings_updates_check_manually = /** @type {(inputs: Settings_Updates_Check_ManuallyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O verificar manualmente:`)
};

const ja_settings_updates_check_manually = /** @type {(inputs: Settings_Updates_Check_ManuallyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手動で確認：`)
};

const hi_settings_updates_check_manually = /** @type {(inputs: Settings_Updates_Check_ManuallyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`या मैन्युअल रूप से जाँचें:`)
};

const pt_br2_settings_updates_check_manually = /** @type {(inputs: Settings_Updates_Check_ManuallyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ou verifique manualmente:`)
};

const ko_settings_updates_check_manually = /** @type {(inputs: Settings_Updates_Check_ManuallyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`또는 수동으로 확인:`)
};

const fr_settings_updates_check_manually = /** @type {(inputs: Settings_Updates_Check_ManuallyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ou vérifier manuellement :`)
};

/**
* | output |
* | --- |
* | "Or check manually:" |
*
* @param {Settings_Updates_Check_ManuallyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_updates_check_manually = /** @type {((inputs?: Settings_Updates_Check_ManuallyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Updates_Check_ManuallyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_updates_check_manually(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_updates_check_manually(inputs)
	if (locale === "es") return es_settings_updates_check_manually(inputs)
	if (locale === "ja") return ja_settings_updates_check_manually(inputs)
	if (locale === "hi") return hi_settings_updates_check_manually(inputs)
	if (locale === "pt-BR") return pt_br2_settings_updates_check_manually(inputs)
	if (locale === "ko") return ko_settings_updates_check_manually(inputs)
	return fr_settings_updates_check_manually(inputs)
});