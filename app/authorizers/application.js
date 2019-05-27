// https://github.com/paulcwatts/ember-cognito/issues/23
import Base from 'ember-simple-auth/authorizers/base';
const { isEmpty } = Ember;

export default Base.extend({

  authorize(data, block) {
    const accessToken = data['access_token'];

    if (!isEmpty(accessToken)) {
      block('Authorization', `${accessToken}`);
    }
  }
});