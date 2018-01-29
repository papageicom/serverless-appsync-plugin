const path = require('path');

module.exports = (config, provider, servicePath) => {
  // TODO verify authenticationType
  if (!config.authenticationType) {
    throw new Error('appSync property `authenticationType` is required.');
  }
  if (!config.serviceRole) {
    throw new Error('appSync property `serviceRole` is required.');
  }

  // TODO verify dataSources structure

  const mappingTemplatePath = path.join(
    servicePath,
    config.mappingTemplates || 'mapping-templates'
  );
  // console.log(mappingTemplatePath);
  // TODO read out mapping templates from

  const mappingTemplates = {};

  return {
    name: config.name || 'api',
    region: provider.region,
    authenticationType: config.authenticationType,
    schema: config.schema || 'schema.graphql',
    dataSources: config.dataSources,
    mappingTemplates
  };
};