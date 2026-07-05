/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, suffix: NonNullable<unknown> }} Dashboard_Channels_UnreadInputs */

const en_dashboard_channels_unread = /** @type {(inputs: Dashboard_Channels_UnreadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} unread conversation${i?.suffix}`)
};

const zh_cn2_dashboard_channels_unread = /** @type {(inputs: Dashboard_Channels_UnreadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 条未读对话${i?.suffix}`)
};

const es_dashboard_channels_unread = /** @type {(inputs: Dashboard_Channels_UnreadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} conversación${i?.suffix} sin leer`)
};

const ja_dashboard_channels_unread = /** @type {(inputs: Dashboard_Channels_UnreadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 件の未読会話${i?.suffix}`)
};

const hi_dashboard_channels_unread = /** @type {(inputs: Dashboard_Channels_UnreadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} अपठित वार्तालाप${i?.suffix}`)
};

const pt_br2_dashboard_channels_unread = /** @type {(inputs: Dashboard_Channels_UnreadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} conversa${i?.suffix} não lida(s)`)
};

const ko_dashboard_channels_unread = /** @type {(inputs: Dashboard_Channels_UnreadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`읽지 않은 대화 ${i?.count}개${i?.suffix}`)
};

const fr_dashboard_channels_unread = /** @type {(inputs: Dashboard_Channels_UnreadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} conversation${i?.suffix} non lue(s)`)
};

/**
* | output |
* | --- |
* | "{count} unread conversation{suffix}" |
*
* @param {Dashboard_Channels_UnreadInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_channels_unread = /** @type {((inputs: Dashboard_Channels_UnreadInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Channels_UnreadInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_channels_unread(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_channels_unread(inputs)
	if (locale === "es") return es_dashboard_channels_unread(inputs)
	if (locale === "ja") return ja_dashboard_channels_unread(inputs)
	if (locale === "hi") return hi_dashboard_channels_unread(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_channels_unread(inputs)
	if (locale === "ko") return ko_dashboard_channels_unread(inputs)
	return fr_dashboard_channels_unread(inputs)
});