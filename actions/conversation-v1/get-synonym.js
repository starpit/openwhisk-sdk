/**
 * Copyright 2018 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const ConversationV1 = require('watson-developer-cloud/conversation/v1');
const pkg = require('../../package.json');

/**
 * Get entity value synonym.
 *
 * Get information about a synonym for an entity value.
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - required unless use_unauthenticated is set.
 * @param {string} [params.password] - required unless use_unauthenticated is set.
 * @param {Object} [params.headers]
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version_date - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.workspace_id - The workspace ID.
 * @param {string} params.entity - The name of the entity.
 * @param {string} params.value - The text of the entity value.
 * @param {string} params.synonym - The text of the synonym.
 * @param {boolean} [params.include_audit] - Whether to include the audit properties (`created` and `updated` timestamps) in the response.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = params || {};
    _params.headers['User-Agent'] = `openwhisk-${pkg.version}`;
    let service;
    try {
      service = new ConversationV1(_params);
    } catch (err) {
      reject(err.message);
      return;
    }
    service.getSynonym(_params, (err, response) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(response);
      }
    });
  });
}
global.main = main;
module.exports.test = main;
