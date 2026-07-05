/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Missing_Key_DetailInputs */

const en_settings_providers_missing_key_detail = /** @type {(inputs: Settings_Providers_Missing_Key_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`but no API key is configured for that provider. Add a key below or select a different default model.`)
};

const zh_cn2_settings_providers_missing_key_detail = /** @type {(inputs: Settings_Providers_Missing_Key_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`但该提供商尚未配置 API 密钥。请在下方添加密钥或选择其他默认模型。`)
};

const es_settings_providers_missing_key_detail = /** @type {(inputs: Settings_Providers_Missing_Key_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`pero no hay clave API configurada para ese proveedor. Añade una clave abajo o selecciona un modelo predeterminado diferente.`)
};

const ja_settings_providers_missing_key_detail = /** @type {(inputs: Settings_Providers_Missing_Key_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`が、そのプロバイダーに API キーが設定されていません。下でキーを追加するか、別のデフォルトモデルを選択してください。`)
};

const hi_settings_providers_missing_key_detail = /** @type {(inputs: Settings_Providers_Missing_Key_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लेकिन उस प्रदाता के लिए कोई API कुंजी कॉन्फ़िगर नहीं है। नीचे कुंजी जोड़ें या कोई अन्य डिफ़ॉल्ट मॉडल चुनें।`)
};

const pt_br2_settings_providers_missing_key_detail = /** @type {(inputs: Settings_Providers_Missing_Key_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mas nenhuma chave de API está configurada para esse provedor. Adicione uma chave abaixo ou selecione um modelo padrão diferente.`)
};

const ko_settings_providers_missing_key_detail = /** @type {(inputs: Settings_Providers_Missing_Key_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`그러나 해당 공급자에 대한 API 키가 설정되지 않았습니다. 아래에서 키를 추가하거나 다른 기본 모델을 선택하세요.`)
};

const fr_settings_providers_missing_key_detail = /** @type {(inputs: Settings_Providers_Missing_Key_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mais aucune clé API n'est configurée pour ce fournisseur. Ajoutez une clé ci-dessous ou sélectionnez un autre modèle par défaut.`)
};

/**
* | output |
* | --- |
* | "but no API key is configured for that provider. Add a key below or select a different default model." |
*
* @param {Settings_Providers_Missing_Key_DetailInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_missing_key_detail = /** @type {((inputs?: Settings_Providers_Missing_Key_DetailInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Missing_Key_DetailInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_missing_key_detail(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_missing_key_detail(inputs)
	if (locale === "es") return es_settings_providers_missing_key_detail(inputs)
	if (locale === "ja") return ja_settings_providers_missing_key_detail(inputs)
	if (locale === "hi") return hi_settings_providers_missing_key_detail(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_missing_key_detail(inputs)
	if (locale === "ko") return ko_settings_providers_missing_key_detail(inputs)
	return fr_settings_providers_missing_key_detail(inputs)
});