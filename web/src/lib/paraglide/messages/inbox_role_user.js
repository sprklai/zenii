/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Inbox_Role_UserInputs */

const en_inbox_role_user = /** @type {(inputs: Inbox_Role_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User`)
};

const zh_cn2_inbox_role_user = /** @type {(inputs: Inbox_Role_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户`)
};

const es_inbox_role_user = /** @type {(inputs: Inbox_Role_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuario`)
};

const ja_inbox_role_user = /** @type {(inputs: Inbox_Role_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー`)
};

const hi_inbox_role_user = /** @type {(inputs: Inbox_Role_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`उपयोगकर्ता`)
};

const pt_br2_inbox_role_user = /** @type {(inputs: Inbox_Role_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuário`)
};

const ko_inbox_role_user = /** @type {(inputs: Inbox_Role_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`사용자`)
};

const fr_inbox_role_user = /** @type {(inputs: Inbox_Role_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisateur`)
};

/**
* | output |
* | --- |
* | "User" |
*
* @param {Inbox_Role_UserInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const inbox_role_user = /** @type {((inputs?: Inbox_Role_UserInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Inbox_Role_UserInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_inbox_role_user(inputs)
	if (locale === "zh-CN") return zh_cn2_inbox_role_user(inputs)
	if (locale === "es") return es_inbox_role_user(inputs)
	if (locale === "ja") return ja_inbox_role_user(inputs)
	if (locale === "hi") return hi_inbox_role_user(inputs)
	if (locale === "pt-BR") return pt_br2_inbox_role_user(inputs)
	if (locale === "ko") return ko_inbox_role_user(inputs)
	return fr_inbox_role_user(inputs)
});