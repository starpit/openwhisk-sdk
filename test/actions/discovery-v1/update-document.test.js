const assert = require('assert');
const nock = require('nock');
const extend = require('extend');
const omit = require('object.omit');
const openwhisk = require('openwhisk');
const { auth, describe } = require('../../resources/auth-helper');
const { adapt, negativeHandler } = require('../../resources/test-helper');
let updateDocument = require('../../../actions/discovery-v1/update-document');

let ow;
let credentials;
let payload = {
  environment_id: 'example_environment_id',
  collection_id: 'example_collection_id',
  document_id: 'example_document_id',
  headers: {
    'User-Agent': 'openwhisk'
  },
  metadata: {
    creator: 'example_creator',
    subject: 'example_subject'
  }
};

before(() => {
  if (process.env.TEST_OPENWHISK && auth) {
    ow = openwhisk(auth.ow);
    updateDocument = adapt(updateDocument, 'discovery-v1/update-document', ow);
    credentials = auth.discovery;
  } else {
    credentials = {
      username: 'username',
      password: 'password',
      version_date: 'version-date'
    };
    beforeEach(() => {
      nock('https://gateway.watsonplatform.net/discovery')
        .post(`/api/v1/environments/${payload.environment_id}`
              + `/collections/${payload.collection_id}`
              + `/documents/${payload.document_id}`)
        .query({
          version: credentials.version_date
        })
        .reply(200, {});
    });
  }
  payload = extend({}, payload, credentials);
});

describe('update-document', () => {
  it('should fail if credentials are missing', () => {
    const params = omit(payload, ['username', 'password']);
    return updateDocument
      .test(params)
      .then(() => {
        assert.fail('No failure on missing credentials');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if environment_id is missing', () => {
    const params = omit(payload, ['environment_id']);
    return updateDocument
      .test(params)
      .then(() => {
        assert.fail('No failure on missing environment_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if collection_id is missing', () => {
    const params = omit(payload, ['collection_id']);
    return updateDocument
      .test(params)
      .then(() => {
        assert.fail('No failure on missing collection_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should fail if document_id is missing', () => {
    const params = omit(payload, ['document_id']);
    return updateDocument
      .test(params)
      .then(() => {
        assert.fail('No failure on missing document_id');
      })
      .catch(err => negativeHandler(err));
  });
  it('should generate a valid payload', () => {
    if (!(process.env.TEST_OPENWHISK && auth)) {
      const params = payload;
      return updateDocument
        .test(params)
        .then(() => {
          assert.ok(true);
        })
        .catch(() => {
          assert.fail('Failure on valid payload');
        });
    }
  });
});
