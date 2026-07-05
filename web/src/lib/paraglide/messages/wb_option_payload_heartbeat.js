/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Payload_HeartbeatInputs */

const en_wb_option_payload_heartbeat = /** @type {(inputs: Wb_Option_Payload_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heartbeat`)
};

const zh_cn2_wb_option_payload_heartbeat = /** @type {(inputs: Wb_Option_Payload_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`心跳`)
};

const es_wb_option_payload_heartbeat = /** @type {(inputs: Wb_Option_Payload_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latido`)
};

const ja_wb_option_payload_heartbeat = /** @type {(inputs: Wb_Option_Payload_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ハートビート`)
};

const hi_wb_option_payload_heartbeat = /** @type {(inputs: Wb_Option_Payload_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हार्टबीट`)
};

const pt_br2_wb_option_payload_heartbeat = /** @type {(inputs: Wb_Option_Payload_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heartbeat`)
};

const ko_wb_option_payload_heartbeat = /** @type {(inputs: Wb_Option_Payload_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`하트비트`)
};

const fr_wb_option_payload_heartbeat = /** @type {(inputs: Wb_Option_Payload_HeartbeatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heartbeat`)
};

/**
* | output |
* | --- |
* | "Heartbeat" |
*
* @param {Wb_Option_Payload_HeartbeatInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_payload_heartbeat = /** @type {((inputs?: Wb_Option_Payload_HeartbeatInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Payload_HeartbeatInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_payload_heartbeat(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_payload_heartbeat(inputs)
	if (locale === "es") return es_wb_option_payload_heartbeat(inputs)
	if (locale === "ja") return ja_wb_option_payload_heartbeat(inputs)
	if (locale === "hi") return hi_wb_option_payload_heartbeat(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_payload_heartbeat(inputs)
	if (locale === "ko") return ko_wb_option_payload_heartbeat(inputs)
	return fr_wb_option_payload_heartbeat(inputs)
});