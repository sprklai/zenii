/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Confirm_Remove_TitleInputs */

const en_settings_channels_confirm_remove_title = /** @type {(inputs: Settings_Channels_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove credential?`)
};

const zh_cn2_settings_channels_confirm_remove_title = /** @type {(inputs: Settings_Channels_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除凭据？`)
};

const es_settings_channels_confirm_remove_title = /** @type {(inputs: Settings_Channels_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar credencial?`)
};

const ja_settings_channels_confirm_remove_title = /** @type {(inputs: Settings_Channels_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証情報を削除しますか？`)
};

const hi_settings_channels_confirm_remove_title = /** @type {(inputs: Settings_Channels_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`क्रेडेंशियल हटाएँ?`)
};

const pt_br2_settings_channels_confirm_remove_title = /** @type {(inputs: Settings_Channels_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover credencial?`)
};

const ko_settings_channels_confirm_remove_title = /** @type {(inputs: Settings_Channels_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`자격 증명을 제거할까요?`)
};

const fr_settings_channels_confirm_remove_title = /** @type {(inputs: Settings_Channels_Confirm_Remove_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer l'identifiant ?`)
};

/**
* | output |
* | --- |
* | "Remove credential?" |
*
* @param {Settings_Channels_Confirm_Remove_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_confirm_remove_title = /** @type {((inputs?: Settings_Channels_Confirm_Remove_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Confirm_Remove_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_confirm_remove_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_confirm_remove_title(inputs)
	if (locale === "es") return es_settings_channels_confirm_remove_title(inputs)
	if (locale === "ja") return ja_settings_channels_confirm_remove_title(inputs)
	if (locale === "hi") return hi_settings_channels_confirm_remove_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_confirm_remove_title(inputs)
	if (locale === "ko") return ko_settings_channels_confirm_remove_title(inputs)
	return fr_settings_channels_confirm_remove_title(inputs)
});