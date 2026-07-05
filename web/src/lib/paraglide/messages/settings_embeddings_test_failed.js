/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ error: NonNullable<unknown> }} Settings_Embeddings_Test_FailedInputs */

const en_settings_embeddings_test_failed = /** @type {(inputs: Settings_Embeddings_Test_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Test failed: ${i?.error}`)
};

const zh_cn2_settings_embeddings_test_failed = /** @type {(inputs: Settings_Embeddings_Test_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`测试失败：${i?.error}`)
};

const es_settings_embeddings_test_failed = /** @type {(inputs: Settings_Embeddings_Test_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prueba fallida: ${i?.error}`)
};

const ja_settings_embeddings_test_failed = /** @type {(inputs: Settings_Embeddings_Test_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`テスト失敗：${i?.error}`)
};

const hi_settings_embeddings_test_failed = /** @type {(inputs: Settings_Embeddings_Test_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`जाँच विफल: ${i?.error}`)
};

const pt_br2_settings_embeddings_test_failed = /** @type {(inputs: Settings_Embeddings_Test_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Teste falhou: ${i?.error}`)
};

const ko_settings_embeddings_test_failed = /** @type {(inputs: Settings_Embeddings_Test_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`테스트 실패: ${i?.error}`)
};

const fr_settings_embeddings_test_failed = /** @type {(inputs: Settings_Embeddings_Test_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Échec du test : ${i?.error}`)
};

/**
* | output |
* | --- |
* | "Test failed: {error}" |
*
* @param {Settings_Embeddings_Test_FailedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_test_failed = /** @type {((inputs: Settings_Embeddings_Test_FailedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Test_FailedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_test_failed(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_test_failed(inputs)
	if (locale === "es") return es_settings_embeddings_test_failed(inputs)
	if (locale === "ja") return ja_settings_embeddings_test_failed(inputs)
	if (locale === "hi") return hi_settings_embeddings_test_failed(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_test_failed(inputs)
	if (locale === "ko") return ko_settings_embeddings_test_failed(inputs)
	return fr_settings_embeddings_test_failed(inputs)
});