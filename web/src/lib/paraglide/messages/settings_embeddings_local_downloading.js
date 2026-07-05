/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Local_DownloadingInputs */

const en_settings_embeddings_local_downloading = /** @type {(inputs: Settings_Embeddings_Local_DownloadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloading model...`)
};

const zh_cn2_settings_embeddings_local_downloading = /** @type {(inputs: Settings_Embeddings_Local_DownloadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在下载模型...`)
};

const es_settings_embeddings_local_downloading = /** @type {(inputs: Settings_Embeddings_Local_DownloadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargando modelo...`)
};

const ja_settings_embeddings_local_downloading = /** @type {(inputs: Settings_Embeddings_Local_DownloadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデルをダウンロード中...`)
};

const hi_settings_embeddings_local_downloading = /** @type {(inputs: Settings_Embeddings_Local_DownloadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मॉडल डाउनलोड हो रहा है...`)
};

const pt_br2_settings_embeddings_local_downloading = /** @type {(inputs: Settings_Embeddings_Local_DownloadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixando modelo...`)
};

const ko_settings_embeddings_local_downloading = /** @type {(inputs: Settings_Embeddings_Local_DownloadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모델 다운로드 중...`)
};

const fr_settings_embeddings_local_downloading = /** @type {(inputs: Settings_Embeddings_Local_DownloadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargement du modèle...`)
};

/**
* | output |
* | --- |
* | "Downloading model..." |
*
* @param {Settings_Embeddings_Local_DownloadingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_local_downloading = /** @type {((inputs?: Settings_Embeddings_Local_DownloadingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Local_DownloadingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_local_downloading(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_local_downloading(inputs)
	if (locale === "es") return es_settings_embeddings_local_downloading(inputs)
	if (locale === "ja") return ja_settings_embeddings_local_downloading(inputs)
	if (locale === "hi") return hi_settings_embeddings_local_downloading(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_local_downloading(inputs)
	if (locale === "ko") return ko_settings_embeddings_local_downloading(inputs)
	return fr_settings_embeddings_local_downloading(inputs)
});