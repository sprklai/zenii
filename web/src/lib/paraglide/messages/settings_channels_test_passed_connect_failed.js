/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Test_Passed_Connect_FailedInputs */

const en_settings_channels_test_passed_connect_failed = /** @type {(inputs: Settings_Channels_Test_Passed_Connect_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test passed but connection failed. Check backend logs.`)
};

const zh_cn2_settings_channels_test_passed_connect_failed = /** @type {(inputs: Settings_Channels_Test_Passed_Connect_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试通过但连接失败。请检查后端日志。`)
};

const es_settings_channels_test_passed_connect_failed = /** @type {(inputs: Settings_Channels_Test_Passed_Connect_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prueba exitosa pero la conexión falló. Revisa los registros del backend.`)
};

const ja_settings_channels_test_passed_connect_failed = /** @type {(inputs: Settings_Channels_Test_Passed_Connect_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テストは通過しましたが接続に失敗しました。バックエンドのログを確認してください。`)
};

const hi_settings_channels_test_passed_connect_failed = /** @type {(inputs: Settings_Channels_Test_Passed_Connect_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जाँच सफल लेकिन कनेक्शन विफल। बैकएंड लॉग जाँचें।`)
};

const pt_br2_settings_channels_test_passed_connect_failed = /** @type {(inputs: Settings_Channels_Test_Passed_Connect_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teste aprovado, mas a conexão falhou. Verifique os logs do backend.`)
};

const ko_settings_channels_test_passed_connect_failed = /** @type {(inputs: Settings_Channels_Test_Passed_Connect_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`테스트는 통과했지만 연결에 실패했습니다. 백엔드 로그를 확인하세요.`)
};

const fr_settings_channels_test_passed_connect_failed = /** @type {(inputs: Settings_Channels_Test_Passed_Connect_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test réussi mais la connexion a échoué. Consultez les journaux du backend.`)
};

/**
* | output |
* | --- |
* | "Test passed but connection failed. Check backend logs." |
*
* @param {Settings_Channels_Test_Passed_Connect_FailedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_test_passed_connect_failed = /** @type {((inputs?: Settings_Channels_Test_Passed_Connect_FailedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Test_Passed_Connect_FailedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_test_passed_connect_failed(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_test_passed_connect_failed(inputs)
	if (locale === "es") return es_settings_channels_test_passed_connect_failed(inputs)
	if (locale === "ja") return ja_settings_channels_test_passed_connect_failed(inputs)
	if (locale === "hi") return hi_settings_channels_test_passed_connect_failed(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_test_passed_connect_failed(inputs)
	if (locale === "ko") return ko_settings_channels_test_passed_connect_failed(inputs)
	return fr_settings_channels_test_passed_connect_failed(inputs)
});