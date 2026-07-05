/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_No_ProvidersInputs */

const en_settings_providers_no_providers = /** @type {(inputs: Settings_Providers_No_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No providers found. Is the daemon running?`)
};

const zh_cn2_settings_providers_no_providers = /** @type {(inputs: Settings_Providers_No_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到提供商。守护进程是否正在运行？`)
};

const es_settings_providers_no_providers = /** @type {(inputs: Settings_Providers_No_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se encontraron proveedores. ¿Está el daemon en ejecución?`)
};

const ja_settings_providers_no_providers = /** @type {(inputs: Settings_Providers_No_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロバイダーが見つかりません。デーモンは実行中ですか？`)
};

const hi_settings_providers_no_providers = /** @type {(inputs: Settings_Providers_No_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई प्रदाता नहीं मिला। क्या daemon चल रहा है?`)
};

const pt_br2_settings_providers_no_providers = /** @type {(inputs: Settings_Providers_No_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum provedor encontrado. O daemon está em execução?`)
};

const ko_settings_providers_no_providers = /** @type {(inputs: Settings_Providers_No_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공급자를 찾을 수 없습니다. Daemon이 실행 중인가요?`)
};

const fr_settings_providers_no_providers = /** @type {(inputs: Settings_Providers_No_ProvidersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun fournisseur trouvé. Le daemon est-il en cours d'exécution ?`)
};

/**
* | output |
* | --- |
* | "No providers found. Is the daemon running?" |
*
* @param {Settings_Providers_No_ProvidersInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_no_providers = /** @type {((inputs?: Settings_Providers_No_ProvidersInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_No_ProvidersInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_no_providers(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_no_providers(inputs)
	if (locale === "es") return es_settings_providers_no_providers(inputs)
	if (locale === "ja") return ja_settings_providers_no_providers(inputs)
	if (locale === "hi") return hi_settings_providers_no_providers(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_no_providers(inputs)
	if (locale === "ko") return ko_settings_providers_no_providers(inputs)
	return fr_settings_providers_no_providers(inputs)
});