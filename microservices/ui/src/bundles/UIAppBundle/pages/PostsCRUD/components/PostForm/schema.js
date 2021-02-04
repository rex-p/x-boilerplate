import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';

const InsurancePlanSchema = new SimpleSchema({
  name: String,
});

export default new SimpleSchema2Bridge(
  new SimpleSchema({
    companyName: {
      type: String,
    },
    plans: Array,
    'plans.$': InsurancePlanSchema,
  })
);
