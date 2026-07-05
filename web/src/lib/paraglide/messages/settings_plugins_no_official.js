/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_No_OfficialInputs */

const en_settings_plugins_no_official = /** @type {(inputs: Settings_Plugins_No_OfficialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No plugins found in official repository.`)
};

const zh_cn2_settings_plugins_no_official = /** @type {(inputs: Settings_Plugins_No_OfficialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`官方仓库中未找到插件。`)
};

const es_settings_plugins_no_official = /** @type {(inputs: Settings_Plugins_No_OfficialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se encontraron plugins en el repositorio oficial.`)
};

const ja_settings_plugins_no_official = /** @type {(inputs: Settings_Plugins_No_OfficialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公式リポジトリにプラグインが見つかりません。`)
};

const hi_settings_plugins_no_official = /** @type {(inputs: Settings_Plugins_No_OfficialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आधिकारिक रिपॉज़िटरी में कोई प्लगइन नहीं मिला।`)
};

const pt_br2_settings_plugins_no_official = /** @type {(inputs: Settings_Plugins_No_OfficialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum plugin encontrado no repositório oficial.`)
};

const ko_settings_plugins_no_official = /** @type {(inputs: Settings_Plugins_No_OfficialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공식 저장소에서 플러그인을 찾을 수 없습니다.`)
};

const fr_settings_plugins_no_official = /** @type {(inputs: Settings_Plugins_No_OfficialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun plugin trouvé dans le dépôt officiel.`)
};

/**
* | output |
* | --- |
* | "No plugins found in official repository." |
*
* @param {Settings_Plugins_No_OfficialInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_no_official = /** @type {((inputs?: Settings_Plugins_No_OfficialInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_No_OfficialInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_no_official(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_no_official(inputs)
	if (locale === "es") return es_settings_plugins_no_official(inputs)
	if (locale === "ja") return ja_settings_plugins_no_official(inputs)
	if (locale === "hi") return hi_settings_plugins_no_official(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_no_official(inputs)
	if (locale === "ko") return ko_settings_plugins_no_official(inputs)
	return fr_settings_plugins_no_official(inputs)
});