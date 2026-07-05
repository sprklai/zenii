/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ message: NonNullable<unknown> }} Settings_Loading_ErrorInputs */

const en_settings_loading_error = /** @type {(inputs: Settings_Loading_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Failed to load settings tab: ${i?.message}`)
};

const zh_cn2_settings_loading_error = /** @type {(inputs: Settings_Loading_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`加载设置标签页失败：${i?.message}`)
};

const es_settings_loading_error = /** @type {(inputs: Settings_Loading_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Error al cargar la pestaña de ajustes: ${i?.message}`)
};

const ja_settings_loading_error = /** @type {(inputs: Settings_Loading_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`設定タブの読み込みに失敗しました：${i?.message}`)
};

const hi_settings_loading_error = /** @type {(inputs: Settings_Loading_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`सेटिंग्स टैब लोड करने में विफल: ${i?.message}`)
};

const pt_br2_settings_loading_error = /** @type {(inputs: Settings_Loading_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Falha ao carregar aba de configurações: ${i?.message}`)
};

const ko_settings_loading_error = /** @type {(inputs: Settings_Loading_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`설정 탭 로드 실패: ${i?.message}`)
};

const fr_settings_loading_error = /** @type {(inputs: Settings_Loading_ErrorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Échec du chargement de l'onglet paramètres : ${i?.message}`)
};

/**
* | output |
* | --- |
* | "Failed to load settings tab: {message}" |
*
* @param {Settings_Loading_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_loading_error = /** @type {((inputs: Settings_Loading_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Loading_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_loading_error(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_loading_error(inputs)
	if (locale === "es") return es_settings_loading_error(inputs)
	if (locale === "ja") return ja_settings_loading_error(inputs)
	if (locale === "hi") return hi_settings_loading_error(inputs)
	if (locale === "pt-BR") return pt_br2_settings_loading_error(inputs)
	if (locale === "ko") return ko_settings_loading_error(inputs)
	return fr_settings_loading_error(inputs)
});