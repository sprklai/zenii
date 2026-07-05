/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ active: NonNullable<unknown>, total: NonNullable<unknown> }} Dashboard_Channels_Active_TotalInputs */

const en_dashboard_channels_active_total = /** @type {(inputs: Dashboard_Channels_Active_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.active} active / ${i?.total} total`)
};

const zh_cn2_dashboard_channels_active_total = /** @type {(inputs: Dashboard_Channels_Active_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.active} 个活跃 / 共 ${i?.total} 个`)
};

const es_dashboard_channels_active_total = /** @type {(inputs: Dashboard_Channels_Active_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.active} activos / ${i?.total} total`)
};

const ja_dashboard_channels_active_total = /** @type {(inputs: Dashboard_Channels_Active_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.active} アクティブ / 全 ${i?.total}`)
};

const hi_dashboard_channels_active_total = /** @type {(inputs: Dashboard_Channels_Active_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.active} सक्रिय / ${i?.total} कुल`)
};

const pt_br2_dashboard_channels_active_total = /** @type {(inputs: Dashboard_Channels_Active_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.active} ativo(s) / ${i?.total} total`)
};

const ko_dashboard_channels_active_total = /** @type {(inputs: Dashboard_Channels_Active_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.active}개 활성 / ${i?.total}개 전체`)
};

const fr_dashboard_channels_active_total = /** @type {(inputs: Dashboard_Channels_Active_TotalInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.active} actifs / ${i?.total} au total`)
};

/**
* | output |
* | --- |
* | "{active} active / {total} total" |
*
* @param {Dashboard_Channels_Active_TotalInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_channels_active_total = /** @type {((inputs: Dashboard_Channels_Active_TotalInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Channels_Active_TotalInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_channels_active_total(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_channels_active_total(inputs)
	if (locale === "es") return es_dashboard_channels_active_total(inputs)
	if (locale === "ja") return ja_dashboard_channels_active_total(inputs)
	if (locale === "hi") return hi_dashboard_channels_active_total(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_channels_active_total(inputs)
	if (locale === "ko") return ko_dashboard_channels_active_total(inputs)
	return fr_dashboard_channels_active_total(inputs)
});