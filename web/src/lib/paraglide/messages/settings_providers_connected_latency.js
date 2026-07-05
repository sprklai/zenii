/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ latency_ms: NonNullable<unknown> }} Settings_Providers_Connected_LatencyInputs */

const en_settings_providers_connected_latency = /** @type {(inputs: Settings_Providers_Connected_LatencyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Connected — ${i?.latency_ms}ms`)
};

const zh_cn2_settings_providers_connected_latency = /** @type {(inputs: Settings_Providers_Connected_LatencyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已连接 — ${i?.latency_ms}ms`)
};

const es_settings_providers_connected_latency = /** @type {(inputs: Settings_Providers_Connected_LatencyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Conectado — ${i?.latency_ms}ms`)
};

const ja_settings_providers_connected_latency = /** @type {(inputs: Settings_Providers_Connected_LatencyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`接続済み — ${i?.latency_ms}ms`)
};

const hi_settings_providers_connected_latency = /** @type {(inputs: Settings_Providers_Connected_LatencyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`कनेक्टेड — ${i?.latency_ms}ms`)
};

const pt_br2_settings_providers_connected_latency = /** @type {(inputs: Settings_Providers_Connected_LatencyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Conectado — ${i?.latency_ms}ms`)
};

const ko_settings_providers_connected_latency = /** @type {(inputs: Settings_Providers_Connected_LatencyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`연결됨 — ${i?.latency_ms}ms`)
};

const fr_settings_providers_connected_latency = /** @type {(inputs: Settings_Providers_Connected_LatencyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Connecté — ${i?.latency_ms}ms`)
};

/**
* | output |
* | --- |
* | "Connected — {latency_ms}ms" |
*
* @param {Settings_Providers_Connected_LatencyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_connected_latency = /** @type {((inputs: Settings_Providers_Connected_LatencyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Connected_LatencyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_connected_latency(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_connected_latency(inputs)
	if (locale === "es") return es_settings_providers_connected_latency(inputs)
	if (locale === "ja") return ja_settings_providers_connected_latency(inputs)
	if (locale === "hi") return hi_settings_providers_connected_latency(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_connected_latency(inputs)
	if (locale === "ko") return ko_settings_providers_connected_latency(inputs)
	return fr_settings_providers_connected_latency(inputs)
});