/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Test_Passed_ConnectingInputs */

const en_settings_channels_test_passed_connecting = /** @type {(inputs: Settings_Channels_Test_Passed_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test passed, connecting...`)
};

const zh_cn2_settings_channels_test_passed_connecting = /** @type {(inputs: Settings_Channels_Test_Passed_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试通过，正在连接...`)
};

const es_settings_channels_test_passed_connecting = /** @type {(inputs: Settings_Channels_Test_Passed_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prueba exitosa, conectando...`)
};

const ja_settings_channels_test_passed_connecting = /** @type {(inputs: Settings_Channels_Test_Passed_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テスト通過、接続中...`)
};

const hi_settings_channels_test_passed_connecting = /** @type {(inputs: Settings_Channels_Test_Passed_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जाँच सफल, कनेक्ट हो रहा है...`)
};

const pt_br2_settings_channels_test_passed_connecting = /** @type {(inputs: Settings_Channels_Test_Passed_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teste aprovado, conectando...`)
};

const ko_settings_channels_test_passed_connecting = /** @type {(inputs: Settings_Channels_Test_Passed_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`테스트 통과, 연결 중...`)
};

const fr_settings_channels_test_passed_connecting = /** @type {(inputs: Settings_Channels_Test_Passed_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test réussi, connexion...`)
};

/**
* | output |
* | --- |
* | "Test passed, connecting..." |
*
* @param {Settings_Channels_Test_Passed_ConnectingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_test_passed_connecting = /** @type {((inputs?: Settings_Channels_Test_Passed_ConnectingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Test_Passed_ConnectingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_test_passed_connecting(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_test_passed_connecting(inputs)
	if (locale === "es") return es_settings_channels_test_passed_connecting(inputs)
	if (locale === "ja") return ja_settings_channels_test_passed_connecting(inputs)
	if (locale === "hi") return hi_settings_channels_test_passed_connecting(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_test_passed_connecting(inputs)
	if (locale === "ko") return ko_settings_channels_test_passed_connecting(inputs)
	return fr_settings_channels_test_passed_connecting(inputs)
});