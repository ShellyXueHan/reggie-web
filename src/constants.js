//
// Reggie Web
//
// Copyright © 2019 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Created by Shelly Xue Han on 2019-01-16.
//

import config from './config.json';

export const API = {
  BASE_URL: process.env.REACT_APP_API_BASE_URL
    ? `${process.env.REACT_APP_API_BASE_URL}/api/v1/`
    : `${config.apiBaseUrl}/api/v1/`,
  GET_SSO_USER: userId => `sso/user/${userId}`,
  UPDATE_SSO_USER: userId => `sso/user/${userId}`,
  CONFIRM_SSO_USER: userId => `sso/user/confirmed/${userId}`,
  INVITE_USER: userId => `sso/user/invite/${userId}`,
  VERIFY_SSO_USER: userId => `sso/user/verify/${userId}`,
  TIME_OUT: 40000,
};

export const SSO_CONFIG = {
  baseURL: process.env.REACT_APP_SSO_BASE_URL || config.ssoBaseUrl,
  realmName: process.env.REACT_APP_SSO_REALM_NAME || config.ssoRealmName,
  clientId: process.env.REACT_APP_SSO_CLIENT_ID || config.ssoClientId,
  kcIDPHint: null,
};

export const SSO_IDP = {
  GITHUB: 'github',
  IDIR: 'idir',
};

export const SELF_SERVER_APP = {
  ROCKETCHAT: {
    URL: process.env.REACT_APP_ROCKETCHAT_URL || config.rocketchatUrl,
    NAME: 'rc',
    INVITATION_CODE: 'rc',
  },
};

export const ROUTES = {
  EMAIL: {
    CONFIRM: 'confirm',
    VERIFY: 'invite',
  },
};

export const AUTH_CODE = {
  NEW: 'new',
  PENDING: 'pending',
  AUTHORIZED: 'authorized',
  REJECTED: 'rejected',
};
